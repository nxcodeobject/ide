# website/ — beranda publik NxCode IDE

Folder ini berisi **halaman web statis (landing page)** untuk memperkenalkan
**NxCode IDE** ke publik. Gaya visual mengikuti situs web VS Code (gelap,
aksen biru) — **bukan** tiruan editor di HTML.

## Masalah

- Folder `website/` sudah ada (dibuat pengguna) berisi `index.html`,
  `index.js`, `style.css` yang masih **kosong** (percobaan pertama gagal
  ter-tulis), plus `icon.png`.
- Percobaan sebelumnya salah arah: membuat tiruan editor/jendela VS Code di
  dalam HTML. Yang diminta adalah **beranda** untuk produk NxCode IDE.

## Keputusan desain

1. **Landing page produk**, bukan mock editor. Isi: hero + CTA unduh, sorotan
   fitur, galeri **screenshot asli aplikasi** (disalin dari `../screenshot/`),
   bagian "dibangun di atas NXC SDK", daftar pintasan, dan bagian unduh.
2. **Tanpa dependency & tanpa framework** — HTML + CSS + JavaScript murni
   (aturan proyek). Tidak ada CDN.
3. **Visual = screenshot asli**, bukan editor bikinan HTML. Galeri membaca
   `website/img/screenshot-001.png` … dan menyembunyikan seksinya bila gambar
   tidak ada. Kartu "welcome" di hero dibuat dari CSS, bukan editor tiruan.
4. **Tema gelap default + opsi terang**, warna mengikuti VS Code
   (aksen `#0078d4`, latar `#1e1e1e`).
5. **Server statis sendiri** `website/serve.mjs` (`node:http`, Node sudah ada)
   di port **8085** + script `npm run web`.

## Perubahan file yang direncanakan

| Berkas | Isi |
| --- | --- |
| `website/README.md` | dokumen ini |
| `website/index.html` | struktur landing page |
| `website/style.css` | tema gelap/terang, layout responsif |
| `website/index.js` | ganti tema, nav seluler, lightbox, tombol salin, animasi masuk |
| `website/serve.mjs` | server statis `node:http` di port 8085 |
| `website/img/` | screenshot aplikasi untuk galeri (opsional) |
| `package.json` | tambah script `web` (aditif) |

## Status

- [x] `index.html`, `style.css`, `index.js` diisi
- [x] Galeri opsional (auto-deteksi `website/img/`; screenshot proyek saat ini kosong)
- [x] `serve.mjs` + script `web`
- [x] Diverifikasi di `http://localhost:8085/`
- [x] Di-commit & push ke `https://github.com/iyanrsaleh/nxcode-ide` (disatukan ke repo editor; repo lama `nxcodeobject/ide` ditinggalkan)

**SUDAH DIEKSEKUSI ✅**

---

# RENCANA — installer lintas-platform (Linux .tar.gz/.deb/.AppImage, macOS .app)

## Masalah

- `npm run dist` (`scripts/nxc.mjs`) hanya menghasilkan installer **Windows**
  (Inno Setup -> `dist\NxCode-IDE-Setup-1.0.0.exe`). Di Linux/macOS hanya
  membuat `tar.gz`/zip portable.
- Website mengklaim "Unduh untuk Windows" saja; padahal target unduhan perlu
  mencakup 3 OS.

## Keputusan desain

1. **Windows**: tidak diubah — Inno Setup tetap default (sudah benar).
2. **Linux**: `npm run dist` menghasilkan **tar.gz** (sudah ada) + opsi
   `.deb` (fpm) dan `.AppImage` (linuxdeploy). Tool tidak ada -> lewati dengan
   pesan jelas, jangan gagal (mirip pola Inno Setup yang fallback ke zip).
3. **macOS**: hasilkan `.app`/`.dmg`. Wajib di-build **di mesin macOS**;
   script hanya menyiapkan jalurnya, tidak bisa diuji dari Windows.
4. **Website**: bagian unduh jadi per-OS (Windows / macOS / Linux) dan teks
   "Unduh untuk Windows" diganti netral + pilihan OS.

## Perubahan file yang direncanakan

| Berkas | Perubahan |
| --- | --- |
| `scripts/nxc.mjs` | `dist()`: cabang Linux (.deb + .AppImage opsional, fallback tar.gz) & macOS (.app/.dmg opsional, fallback tar.gz) |
| `website/index.html` | Bagian unduh + hero CTA per-OS, kebutuhan per platform |
| `website/index.js` | Deteksi OS pengunjung, tandai tombol unduh yang relevan |
| `website/style.css` | Gaya tombol unduhan per-OS |

## Status

- [x] `scripts/nxc.mjs`: cabang Linux (`.deb` via `--deb`, `.AppImage` via `--appimage`,
      fallback tar.gz) + macOS (`.dmg` via macdeployqt/hdiutil, fallback tar.gz).
      Tool belum ada -> dilewati dengan pesan jelas, tidak menggagalkan build.
- [x] `CMakeLists.txt`: `MACOSX_BUNDLE ${APPLE}` (Windows/Linux tetap FALSE).
- [x] `website/index.html` + `index.js` + `style.css`: bagian unduh per-OS
      (Windows/macOS/Linux) + deteksi OS pengunjung.
- [x] Diverifikasi: `node --check` bersih; halaman terlayani 200 di port 8085.

### Catatan uji (jujur)

- **Windows**: jalur tidak berubah; `dist/NxCode-IDE-Setup-1.0.0.exe` sudah ada.
- **Linux**: WSL Ubuntu ada, tetapi Qt6 dev + `fpm`/`linuxdeployqt`/
  `appimagetool` belum terpasang -> **belum diuji build nyata**, hanya cabang
  script diverifikasi.
- **macOS**: **tidak dapat diuji dari Windows**; perlu dijalankan di mesin Mac.

**SUDAH DIEKSEKUSI ✅** (Linux/macOS masih perlu uji di mesin aslinya)

---

# Pembaruan versi di website (13-10-2026)

Versi unduhan Windows dinaikkan dari `1.0.0` -> **`1.0.5`** agar selaras rilis
terbaru (`github.com/nxcodeobject/nxcode-ide/releases`). Diperbarui di:
- `index.html`: meta hero ("v1.0.5 · Windows & Linux"), link tombol unduh
  (`NxCode-IDE-Setup-1.0.5.exe`), `data-artifact` Windows, teks langkah unduh.
- `index.js`: teks i18n `dl.step1.win` (ID + EN).
- Card fitur baru **Markdown & PDF** (pratinjau, ekspor HTML/PDF, buka PDF)
  di `index.html` + i18n `card.pdf.t` / `card.pdf.d`.

Catatan: link Windows memakai nama file berversi (`.../latest/download/
NxCode-IDE-Setup-1.0.5.exe`) sehingga **harus diperbarui tiap rilis** — kalau
lupa, akan 404 begitu `latest` berganti. Linux masih `1.0.0` (belum ada rilis
Linux baru).

**SUDAH DIEKSEKUSI ✅**
