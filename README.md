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
3. **Visual = screenshot asli**, bukan editor bikinan HTML. Gambar disalin ke
   `website/img/` supaya situs bisa dideploy sendirian.
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
| `website/img/` | salinan screenshot aplikasi (galeri) |
| `package.json` | tambah script `web` (aditif) |

## Status

- [x] Screenshot disalin ke `website/img/`
- [x] `index.html`, `style.css`, `index.js` diisi
- [x] `serve.mjs` + script `web`
- [x] Diverifikasi di `http://localhost:8085/`

**SUDAH DIEKSEKUSI ✅**
