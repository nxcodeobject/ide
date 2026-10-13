/* ==========================================================================
   NxCode IDE — beranda publik
   HTML + CSS + JS murni, tanpa dependency.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var $ = function (id) { return document.getElementById(id); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  /* --- Bahasa (ID / EN) -------------------------------------------------- */
  var I18N = {
    id: {
      "meta.title": "NxCode IDE — editor kode desktop yang ringan",
      "meta.desc": "NxCode IDE: editor kode desktop untuk Windows dan Linux — explorer, pencarian, source control, API client, database, terminal agen AI, dan penyorotan sintaks 400+ bahasa dalam satu jendela yang ringan.",
      "nav.fitur": "Fitur",
      "nav.tangkapan": "Tangkapan Layar",
      "nav.tentang": "Tentang",
      "nav.pintasan": "Pintasan",
      "nav.unduh": "Unduh",
      "nav.unduhBtn": "Unduh",
      "nav.sponsor": "Sponsor",
      "nav.sponsor2": "Menjadi Sponsor",
      "hero.eyebrow": "Desktop native · Windows &amp; Linux",
      "hero.title": "Editor kode desktop<br />yang <span class=\"grad\">ringan</span>.",
      "hero.lead": "NxCode IDE menyatukan explorer, pencarian, source control, API client, database, dan terminal agen AI dalam satu jendela yang ringan — lalu dilengkapi editor dengan penyorotan sintaks lebih dari 400 bahasa.",
      "hero.dl": "Unduh sekarang",
      "hero.features": "Lihat fitur",
      "wc.head": "Built-in features",
      "wc.explorer": "Tree view, drag &amp; drop, buat / ganti nama / hapus.",
      "wc.search": "Pencarian di berkas dan seluruh proyek.",
      "wc.scm": "Repositori, status, commit, push / pull.",
      "wc.api": "Klien REST: susun permintaan, kirim, periksa respons.",
      "wc.skill": "AGENTS.md, daftar plan, dan riwayat simpan.",
      "strip.lang": "bahasa ter-sorot",
      "strip.panes": "panel editor",
      "strip.panels": "panel bawaan",
      "strip.dep": "dependency UI",
      "fitur.title": "Semua yang kamu butuhkan, dalam satu jendela",
      "fitur.sub": "Setiap panel berdiri sebagai modulnya sendiri di dalam <code>src/</code>, jadi mudah dipelajari dan dikembangkan.",
      "card.editor.t": "Editor inti",
      "card.editor.d": "Nomor baris, find/replace mengambang, indentasi Tab/Shift+Tab, dan indikator baris aktif.",
      "card.highlight.t": "Penyorotan sintaks",
      "card.highlight.d": "KSyntaxHighlighting memilih grammar otomatis dari ekstensi — lebih dari 400 bahasa, tema gelap/terang.",
      "card.ac.d": "Saran kata per tipe berkas: keyword bahasa, tag, atribut, properti CSS, kunci JSON, hingga anggota objek.",
      "card.minimap.d": "Kolom ringkasan berwarna token di kanan editor, lengkap dengan indikator viewport yang bisa diklik.",
      "card.explorer.t": "Explorer &amp; berkas",
      "card.explorer.d": "Tree view dengan drag &amp; drop, buat / ganti nama / hapus ke Recycle Bin, tempel gambar, dan filter.",
      "card.search.t": "Pencarian",
      "card.search.d": "Cari di dalam berkas maupun seluruh proyek, hasilnya bisa diklik untuk langsung membuka barisnya.",
      "card.scm.d": "Status perubahan, commit, push dan pull langsung dari sidebar — tanpa keluar dari editor.",
      "card.api.d": "Klien REST bawaan: susun permintaan, tambah header, kirim, lalu periksa respons dalam satu tab.",
      "card.skill.d": "Kelola AGENTS.md, daftar plan per proyek, dan riwayat penyimpanan berkas — semuanya dari satu panel.",
      "card.db.d": "Telusuri skema, lihat tabel dan kolom, lalu buka kanvas relasi antar tabel.",
      "card.term.d": "Dua terminal: kolom kanan untuk agen AI CLI, panel bawah untuk menjalankan build dan uji.",
      "card.split.t": "Split editor",
      "card.split.d": "Buka sampai empat panel dalam satu jendela, termasuk tata letak dua kolom, grid, dan campuran.",
      "card.pdf.t": "Markdown & PDF",
      "card.pdf.d": "Pratinjau Markdown, ekspor ke HTML/PDF, dan buka berkas PDF langsung di dalam editor.",
      "about.eyebrow": "Kenapa NxCode IDE",
      "about.title": "Ringan, native,<br />dan langsung produktif.",
      "about.lead": "NxCode IDE dirancang sebagai satu jendela untuk seluruh alur kerja: buka proyek, tulis kode, jalankan terminal, kelola versi, uji API, dan telusuri database — tanpa berpindah-pindah aplikasi. Semuanya berjalan sebagai aplikasi desktop native yang cepat dan hemat memori.",
      "about.check1": "Buka dalam sekejap — tanpa peramban, tanpa runtime berat.",
      "about.check2": "Penyorotan sintaks 400+ bahasa siap dipakai.",
      "about.check3": "Tema gelap/terang dan pengaturan yang tersimpan otomatis.",
      "about.th1": "Yang kamu butuhkan",
      "about.row1": "Editor kode dengan penyorotan sintaks",
      "about.row2": "Autocomplete per tipe berkas",
      "about.row3": "Explorer &amp; pencarian proyek",
      "about.row4": "Terminal &amp; agen AI",
      "about.row5": "Source control dan build",
      "about.row6": "API client &amp; database designer",
      "shot.title": "Tangkapan layar",
      "shot.note": "Klik gambar untuk memperbesar.",
      "shot.loading": "Memuat…",
      "sc.title": "Pintasan papan tombol",
      "sc.sub": "Rasa yang sama seperti editor populer, jadi langsung terasa akrab.",
      "dl.eyebrow": "Unduh",
      "dl.title": "Jalankan NxCode IDE di komputermu",
      "dl.lead": "Pilih sistem operasimu, unduh paketnya, lalu langsung jalankan — tanpa perlu menyiapkan tool build apa pun.",
      "dl.req": "Kebutuhan",
      "dl.req.win1": "Windows 10 (1809+) atau Windows 11, 64-bit.",
      "dl.req.win2": "NxCode IDE — cukup unduh dan jalankan installer.",
      "dl.req.mac1": "macOS 12+ (Intel atau Apple Silicon), 64-bit.",
      "dl.req.mac2": "Belum tersedia — paket <code>.dmg</code> untuk macOS sedang disiapkan.",
      "dl.req.lin1": "Distribusi Linux 64-bit dengan Qt 6 (mis. Ubuntu 22.04+).",
      "dl.req.lin2": "Ekstrak <code>tar.gz</code> lalu jalankan <code>./editor</code>.",
      "dl.all": "Semua rilis",
      "dl.step1": "Unduh",
      "dl.step1.win": "Unduh <code>NxCode-IDE-Setup-1.0.6.exe</code>, lalu jalankan. Karena belum ditandatangani, Windows SmartScreen mungkin muncul — pilih <b>More info</b> lalu <b>Run anyway</b>.",
      "dl.step1.mac1": "Paket macOS belum tersedia. Nantikan rilisnya di halaman",
      "dl.step1.lin": "Unduh <code>NxCode-IDE-1.0.6-linux-x64.tar.gz</code>, ekstrak, lalu jalankan <code>./editor</code>. Pastikan Qt 6 terpasang di sistem.",
      "dl.step2": "Jalankan",
      "dl.step2.note": "Buka aplikasi, lalu mulai mengerjakan proyekmu: buka folder, tulis kode, dan jalankan terminal agen AI — semuanya dari satu jendela.",
      "footer.tagline": "Cepat · Native · Multi-platform",
      "dl.dlWindows": "Unduh untuk Windows",
      "dl.dlMacos": "Unduh untuk macOS",
      "dl.dlLinux": "Unduh untuk Linux",
      "dl.viewReleases": "Lihat rilis"
    },
    en: {
      "meta.title": "NxCode IDE — a lightweight desktop code editor",
      "meta.desc": "NxCode IDE: a desktop code editor for Windows and Linux — explorer, search, source control, API client, database, AI-agent terminal, and syntax highlighting for 400+ languages in one lightweight window.",
      "nav.fitur": "Features",
      "nav.tangkapan": "Screenshots",
      "nav.tentang": "About",
      "nav.pintasan": "Shortcuts",
      "nav.unduh": "Download",
      "nav.unduhBtn": "Download",
      "nav.sponsor": "Sponsor",
      "nav.sponsor2": "Become a sponsor",
      "hero.eyebrow": "Native desktop · Windows &amp; Linux",
      "hero.title": "The desktop code editor<br />that stays <span class=\"grad\">light</span>.",
      "hero.lead": "NxCode IDE unites explorer, search, source control, API client, database, and an AI-agent terminal in one lightweight window — then adds an editor with syntax highlighting for 400+ languages.",
      "hero.dl": "Download now",
      "hero.features": "See features",
      "wc.head": "Built-in features",
      "wc.explorer": "Tree view, drag &amp; drop, create / rename / delete.",
      "wc.search": "Search in a file and across the whole project.",
      "wc.scm": "Repositories, status, commit, push / pull.",
      "wc.api": "REST client: compose a request, send, inspect the response.",
      "wc.skill": "AGENTS.md, plan lists, and save history.",
      "strip.lang": "highlighted languages",
      "strip.panes": "editor panes",
      "strip.panels": "built-in panels",
      "strip.dep": "UI dependencies",
      "fitur.title": "Everything you need, in a single window",
      "fitur.sub": "Each panel stands as its own module inside <code>src/</code>, so it is easy to learn and extend.",
      "card.editor.t": "Core editor",
      "card.editor.d": "Line numbers, floating find/replace, Tab/Shift+Tab indent, and an active-line indicator.",
      "card.highlight.t": "Syntax highlighting",
      "card.highlight.d": "KSyntaxHighlighting picks the grammar automatically from the extension — 400+ languages, dark/light themes.",
      "card.ac.d": "Word suggestions per file type: language keywords, tags, attributes, CSS properties, JSON keys, and object members.",
      "card.minimap.d": "A token-colored overview column on the right of the editor, with a clickable viewport indicator.",
      "card.explorer.t": "Explorer &amp; files",
      "card.explorer.d": "Tree view with drag &amp; drop, create / rename / delete to Recycle Bin, paste images, and filtering.",
      "card.search.t": "Search",
      "card.search.d": "Search within a file or across the whole project; results are clickable to open the line directly.",
      "card.scm.d": "Change status, commit, push and pull right from the sidebar — without leaving the editor.",
      "card.api.d": "Built-in REST client: compose a request, add headers, send, then inspect the response in one tab.",
      "card.skill.d": "Manage AGENTS.md, per-project plan lists, and file save history — all from one panel.",
      "card.db.d": "Browse the schema, view tables and columns, then open a relationship canvas between tables.",
      "card.term.d": "Two terminals: the right column for the AI CLI agent, the bottom panel to run builds and tests.",
      "card.split.t": "Split editor",
      "card.split.d": "Open up to four panes in one window, including two-column, grid, and mixed layouts.",
      "card.pdf.t": "Markdown & PDF",
      "card.pdf.d": "Markdown preview, export to HTML/PDF, and open PDF files right inside the editor.",
      "about.eyebrow": "Why NxCode IDE",
      "about.title": "Light, native,<br />and immediately productive.",
      "about.lead": "NxCode IDE is designed as a single window for the whole workflow: open a project, write code, run the terminal, manage versions, test APIs, and browse the database — without switching apps. It all runs as a fast, memory-efficient native desktop application.",
      "about.check1": "Opens in an instant — no browser, no heavy runtime.",
      "about.check2": "Syntax highlighting for 400+ languages, ready to use.",
      "about.check3": "Dark/light theme and settings saved automatically.",
      "about.th1": "What you need",
      "about.row1": "A code editor with syntax highlighting",
      "about.row2": "Autocomplete per file type",
      "about.row3": "Explorer &amp; project search",
      "about.row4": "Terminal &amp; AI agent",
      "about.row5": "Source control and build",
      "about.row6": "API client &amp; database designer",
      "shot.title": "Screenshots",
      "shot.note": "Click an image to enlarge.",
      "shot.loading": "Loading…",
      "sc.title": "Keyboard shortcuts",
      "sc.sub": "The same feel as popular editors, so it is instantly familiar.",
      "dl.eyebrow": "Download",
      "dl.title": "Run NxCode IDE on your computer",
      "dl.lead": "Pick your operating system, download the package, and run it right away — no build tools to set up.",
      "dl.req": "Requirements",
      "dl.req.win1": "Windows 10 (1809+) or Windows 11, 64-bit.",
      "dl.req.win2": "NxCode IDE — just download and run the installer.",
      "dl.req.mac1": "macOS 12+ (Intel or Apple Silicon), 64-bit.",
      "dl.req.mac2": "Not yet available — the macOS <code>.dmg</code> package is in preparation.",
      "dl.req.lin1": "A 64-bit Linux distribution with Qt 6 (e.g. Ubuntu 22.04+).",
      "dl.req.lin2": "Extract the <code>tar.gz</code> then run <code>./editor</code>.",
      "dl.all": "All releases",
      "dl.step1": "Download",
      "dl.step1.win": "Download <code>NxCode-IDE-Setup-1.0.6.exe</code>, then run it. Because it is unsigned, Windows SmartScreen may appear — choose <b>More info</b> then <b>Run anyway</b>.",
      "dl.step1.mac1": "The macOS package is not available yet. Watch for it on the",
      "dl.step1.lin": "Download <code>NxCode-IDE-1.0.6-linux-x64.tar.gz</code>, extract, then run <code>./editor</code>. Make sure Qt 6 is installed on your system.",
      "dl.step2": "Run",
      "dl.step2.note": "Open the app, then start working on your project: open a folder, write code, and run the AI-agent terminal — all from one window.",
      "footer.tagline": "Fast · Native · Multi-platform",
      "dl.dlWindows": "Download for Windows",
      "dl.dlMacos": "Download for macOS",
      "dl.dlLinux": "Download for Linux",
      "dl.viewReleases": "View releases"
    }
  };

  var LANG_KEY = "nxcode-website-lang";
  var currentLang = "id";

  function setLang(lang) {
    if (!I18N[lang]) lang = "id";
    currentLang = lang;
    root.setAttribute("lang", lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* diabaikan */ }
    $$("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
    var dict = I18N[lang];
    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    $$("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (rule) {
        var parts = rule.split("|");
        if (parts.length === 2 && dict[parts[1]] != null) el.setAttribute(parts[0], dict[parts[1]]);
      });
    });
    if (dict["meta.title"]) document.title = dict["meta.title"];
    if (typeof refreshDownloadLabel === "function") refreshDownloadLabel();
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { saved = null; }
    if (saved === "id" || saved === "en") { setLang(saved); return; }
    var nav = (navigator.language || "id").slice(0, 2).toLowerCase();
    setLang(nav === "id" ? "id" : "en");
  }

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

  /* --- Pilih sistem operasi di bagian unduh ----------------------------- */
  (function osPicker() {
    var tabs = $$(".os-tab");
    if (!tabs.length) return;
    var section = $("downloadGrid");
    var storageKey = "nxcode-website-os";
    var known = ["windows", "macos", "linux"];
    var currentOS = "windows";

    function detectOS() {
      var saved = null;
      try { saved = localStorage.getItem(storageKey); } catch (e) { saved = null; }
      if (saved && known.indexOf(saved) !== -1) return saved;
      var ua = (navigator.userAgent || "") + " " + (navigator.platform || "");
      if (/mac/i.test(ua)) return "macos";
      if (/linux|x11/i.test(ua)) return "linux";
      return "windows";
    }

    function labelFor(os) {
      var dict = I18N[currentLang] || I18N.id;
      if (os === "macos") return dict["dl.dlMacos"];
      if (os === "linux") return dict["dl.dlLinux"];
      return dict["dl.dlWindows"];
    }

    // Dipanggil osPicker dan setLang(): sinkronkan tombol unduh dengan
    // OS aktif + bahasa aktif.
    function refreshDownloadLabel() {
      var dict = I18N[currentLang] || I18N.id;
      var cta = document.querySelector("[data-os-cta]");
      if (cta) {
        var osName = { windows: "Windows", macos: "macOS", linux: "Linux" }[currentOS];
        cta.textContent = (currentLang === "en" ? "Download for " : "Unduh untuk ") + osName;
        cta.setAttribute("data-i18n", "");
      }
      var dl = document.querySelector("[data-dl]");
      if (!dl) return;
      var url = dl.getAttribute("data-dl-" + currentOS);
      if (url) dl.setAttribute("href", url);
      // macOS belum punya berkas unduhan -> jangan pasang atribut download,
      // cukup arahkan ke halaman rilis.
      if (currentOS === "macos") {
        dl.removeAttribute("download");
        dl.textContent = dict["dl.viewReleases"];
      } else {
        dl.setAttribute("download", "");
        dl.textContent = labelFor(currentOS);
      }
      dl.setAttribute("data-i18n", "");
    }
    window.refreshDownloadLabel = refreshDownloadLabel;

    function apply(os) {
      if (!section) return;
      currentOS = os;
      known.forEach(function (name) { section.classList.remove("os-active-" + name); });
      section.classList.add("os-active-" + os);
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-os") === os;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      refreshDownloadLabel();
      try { localStorage.setItem(storageKey, os); } catch (e) { /* diabaikan */ }
    }

    tabs.forEach(function (t) {
      t.addEventListener("click", function () { apply(t.getAttribute("data-os")); });
    });
    apply(detectOS());
  })();

  /* --- Tombol bahasa + inisialisasi ------------------------------------- */
  $$("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
      // Detail bahasa bisa menimpa teks dinamis; panggil ulang urutan aman.
      if (typeof window.refreshDownloadLabel === "function") window.refreshDownloadLabel();
    });
  });
  initLang();
  if (typeof window.refreshDownloadLabel === "function") window.refreshDownloadLabel();

  /* --- Tahun footer otomatis (kalau ada penanda) ------------------------ */
  var yearEl = $("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
