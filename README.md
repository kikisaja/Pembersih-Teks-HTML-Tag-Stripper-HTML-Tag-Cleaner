# 🧹 HTML Tag Cleaner (Pembersih Teks HTML / Tag Stripper)

Aplikasi pembersih kode HTML (*HTML Tag Cleaner*) berbasis JavaScript murni untuk menghapus seluruh tag elemen markup HTML dari sebuah teks mentah dan menyisakan teks bersih (*plain text*) secara instan.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **DOMParser API:**
   Memanfaatkan objek bawaan peramban `DOMParser` guna mem-parsing string HTML ke dalam struktur dokumen DOM secara aman tanpa risiko eksekusi skrip berbahaya.
2. **Text Content Extraction (`textContent`):**
   Mengambil properti `textContent` dari dokumen hasil parsing untuk mengekstrak seluruh teks murni secara otomatis tanpa menyertakan atribut atau tag elemen.
3. **Clipboard API & Toast Feedback:**
   Menyediakan tombol salin teks instan ke *clipboard* sistem dengan umpan balik visual berupa pemberitahuan *toast*.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Textarea input HTML, tombol pembersih, & textarea output
├── style.css        # Desain Neobrutalism pink-pop, textarea monokrom, & bayangan keras
└── script.js        # Logika DOMParser, ekstraksi teks polos, & Clipboard API handler
