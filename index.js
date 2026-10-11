/* ==========================================================================
   NxCode IDE — beranda publik
   HTML + CSS + JS murni, tanpa dependency.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  /* --- Tema gelap / terang ---------------------------------------------- */
  var THEME_KEY = "nxcode-website-theme";
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { /* diabaikan */ }
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      applyTheme("light");
    }
  }
  initTheme();

  var themeBtn = $("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }

  /* --- Nav: bayangan saat digulir --------------------------------------- */
  var nav = $("nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Nav: menu seluler ------------------------------------------------- */
  var burger = $("burger");
  var navLinks = $("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  /* --- Reveal saat masuk viewport --------------------------------------- */
  var revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* --- Tombol salin perintah -------------------------------------------- */
  $$(".copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = $(btn.getAttribute("data-copy"));
      if (!target) return;
      var text = target.textContent;
      var done = function () {
        var old = btn.textContent;
        btn.textContent = "Tersalin!";
        setTimeout(function () { btn.textContent = old; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* diabaikan */ }
        ta.remove();
        done();
      }
    });
  });

  /* --- Galeri: bangun hanya dari gambar yang benar-benar ada ------------ */
  var gallery = $("gallery");
  var galleryNote = $("galleryNote");

  (function buildGallery() {
    if (!gallery) return;
    var candidates = [];
    for (var i = 1; i <= 12; i++) {
      candidates.push("img/screenshot-" + ("00" + i).slice(-3) + ".png");
    }
    var found = [];
    var pending = candidates.length;

    function render() {
      if (!found.length) {
        var section = $("tangkapan");
        if (section) section.style.display = "none";
        return;
      }
      found.sort();
      gallery.innerHTML = found
        .map(function (src) {
          return (
            '<figure class="shot" data-img="' + src + '">' +
            '<img src="' + src + '" alt="Tangkapan layar NxCode IDE" loading="lazy"/></figure>'
          );
        })
        .join("");
      if (galleryNote) galleryNote.textContent = "Klik gambar untuk memperbesar.";
    }

    candidates.forEach(function (src) {
      var im = new Image();
      var finish = function () {
        pending--;
        if (pending === 0) render();
      };
      im.onload = function () { found.push(src); finish(); };
      im.onerror = finish;
      im.src = src;
    });
  })();

  /* --- Lightbox tangkapan layar ----------------------------------------- */
  var lightbox = $("lightbox");
  var lbImg = $("lbImg");
  var current = 0;
  var currentList = [];

  function showShot(index) {
    if (!currentList.length || !lbImg) return;
    current = (index + currentList.length) % currentList.length;
    lbImg.setAttribute("src", currentList[current].getAttribute("data-img"));
  }
  function openLightbox(index, list) {
    if (!lightbox) return;
    currentList = list || [];
    showShot(index);
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    if (lightbox) lightbox.classList.remove("open");
  }

  if (gallery) {
    gallery.addEventListener("click", function (e) {
      var fig = e.target.closest ? e.target.closest(".shot") : null;
      if (!fig) return;
      var all = Array.prototype.slice.call(gallery.querySelectorAll(".shot"));
      openLightbox(all.indexOf(fig), all);
    });
  }

  var lbClose = $("lbClose");
  var lbPrev = $("lbPrev");
  var lbNext = $("lbNext");
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", function (e) { e.stopPropagation(); showShot(current - 1); });
  if (lbNext) lbNext.addEventListener("click", function (e) { e.stopPropagation(); showShot(current + 1); });
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showShot(current - 1);
    else if (e.key === "ArrowRight") showShot(current + 1);
  });

  /* --- Tahun footer otomatis (kalau ada penanda) ------------------------ */
  var yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
