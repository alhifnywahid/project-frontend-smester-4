# Berkah Teknik - Toko AC Online

Aplikasi web e-commerce untuk toko Air Conditioner yang dibangun menggunakan React dan Vite. Proyek ini dibuat sebagai tugas frontend semester 4 dengan fitur-fitur lengkap mulai dari pencarian produk, perbandingan, keranjang belanja, hingga pembayaran terintegrasi.

Baca dokumentasi ini dalam bahasa lain: [English](./README.en.md)

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Proyek](#struktur-proyek)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Cara Instalasi](#cara-instalasi)
- [Konfigurasi Environment](#konfigurasi-environment)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Halaman dan Rute](#halaman-dan-rute)
- [Overview](#overview)
- [Lisensi](#lisensi)

---

## Tentang Proyek

Berkah Teknik adalah platform e-commerce berbasis web yang menyediakan berbagai produk Air Conditioner dari merek-merek terkemuka. Pengguna dapat menelusuri produk, membandingkan spesifikasi, menambahkan produk ke keranjang, dan menyelesaikan pembayaran secara online menggunakan Midtrans Payment Gateway.

---

## Fitur

### Produk
- Tampilan daftar produk dengan skeleton loading
- Pencarian produk secara real-time
- Filter produk berdasarkan merek, kondisi (baru/bekas), dan rentang harga
- Perbandingan produk hingga 3 produk secara bersamaan dengan detail spesifikasi lengkap
- Pagination untuk navigasi produk
- Halaman detail produk (nama, harga, gambar, spesifikasi teknis)

### Autentikasi
- Login dengan email dan password
- Registrasi akun baru dengan validasi formulir (pola password, konfirmasi password)
- Dukungan login sosial (Google dan Facebook)
- Fitur lupa kata sandi

### Keranjang dan Checkout
- Manajemen keranjang belanja (tambah dan hapus produk)
- Proses checkout dengan pilihan alamat pengiriman (alamat tersimpan atau alamat baru)
- Manajemen alamat dengan data wilayah Indonesia (provinsi, kab/kota, kecamatan, desa, kode pos)
- Integrasi Midtrans Snap untuk pembayaran online
- Ringkasan pesanan dengan rincian harga

### Akun Pengguna
- Halaman profil dan pengelolaan data pribadi
- Riwayat pesanan
- Manajemen alamat pengiriman

### Lainnya
- Halaman galeri foto layanan
- Halaman layanan (servis, pemasangan, dll.)
- Halaman kontak
- Halaman kerja sama / kemitraan
- Navigasi responsif (desktop dan mobile)
- Notifikasi toast untuk feedback pengguna

---

## Teknologi yang Digunakan

| Kategori | Teknologi |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3, DaisyUI 4 |
| Routing | React Router DOM 6 |
| HTTP Client | Axios |
| Payment Gateway | Midtrans Snap |
| UI Components | React Icons, React Toastify, React Spinners |
| Carousel | React Slick, @notbaldrick/react-crossfade-carousel |
| Foto Viewer | React Photo View |
| Pagination | RC Pagination, React Paginate |
| Skeleton Loading | React Loading Skeleton |
| Linter | ESLint |
| Formatter | Prettier |

---

## Struktur Proyek

```
air-conditioning-shop/
├── public/
│   ├── brand/          # Logo merek AC (Panasonic, Sharp, Daikin, dll.)
│   ├── layanan/        # Gambar layanan
│   ├── payment-logo/   # Logo metode pembayaran
│   └── ...             # Aset gambar lainnya
├── src/
│   ├── api/            # Konfigurasi API
│   ├── components/     # Komponen UI yang dapat digunakan ulang
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── CardProduct.jsx
│   │   ├── SearchProduct.jsx
│   │   ├── NavMobile.jsx
│   │   └── ...
│   ├── context/        # React Context (CartProvider, SearchProvider)
│   ├── layouts/        # Layout utama aplikasi
│   ├── pages/          # Halaman-halaman aplikasi
│   │   ├── Home.jsx
│   │   ├── Auth.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── DetailProduct.jsx
│   │   ├── Galery.jsx
│   │   ├── Layanan.jsx
│   │   ├── Kontak.jsx
│   │   ├── KerjaSama.jsx
│   │   ├── Account.jsx
│   │   └── OutletAkun/
│   ├── routes/         # Definisi routing aplikasi
│   ├── service/        # Fungsi pemanggilan API (auth, produk, midtrans, dll.)
│   └── utils/          # Fungsi utilitas (format IDR, dll.)
├── .env                # Variabel environment (tidak di-commit)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## Persyaratan Sistem

- Node.js versi 18 atau lebih baru
- Yarn (disarankan) atau npm
- Backend API yang berjalan (diperlukan untuk data produk, autentikasi, dan pesanan)
- Akun Midtrans (Sandbox untuk pengembangan)

---

## Cara Instalasi

1. Clone repository ini:

```bash
git clone https://github.com/alhifnywahid/air-conditioning-shop.git
```

2. Masuk ke direktori proyek:

```bash
cd air-conditioning-shop
```

3. Install semua dependensi:

```bash
yarn
```

---

## Konfigurasi Environment

Buat file `.env` di direktori root proyek dengan isi berikut:

```env
# URL Backend API
VITE_BASE_URL="https://your-backend-url.com"

# Midtrans Client Key (gunakan Sandbox untuk pengembangan)
VITE_MIDTRANS_CK="your-midtrans-client-key"

# Midtrans Merchant ID
VITE_MIDTRANS_MI="your-midtrans-merchant-id"
```

Untuk mendapatkan Midtrans Client Key dan Merchant ID, daftar di [dashboard.midtrans.com](https://dashboard.midtrans.com) dan gunakan mode Sandbox untuk pengembangan.

---

## Menjalankan Proyek

Jalankan server pengembangan:

```bash
yarn dev
```

Aplikasi akan berjalan di `http://localhost:5173` secara default.

Untuk build production:

```bash
yarn build
```

Untuk preview hasil build:

```bash
yarn preview
```

---

## Halaman dan Rute

| Rute | Deskripsi |
|---|---|
| `/` | Halaman utama, daftar produk, filter, pencarian, perbandingan |
| `/masuk` | Halaman login |
| `/daftar` | Halaman registrasi |
| `/ganti-akun` | Halaman lupa kata sandi |
| `/produk/:id` | Halaman detail produk |
| `/keranjang` | Halaman keranjang belanja |
| `/checkout/*` | Halaman checkout dan pembayaran |
| `/galeri` | Halaman galeri foto |
| `/layanan` | Halaman layanan |
| `/kontak` | Halaman kontak |
| `/kerja-sama` | Halaman kerja sama / kemitraan |
| `/akun` | Halaman profil akun |
| `/akun/pesanan` | Riwayat pesanan |
| `/akun/alamat` | Manajemen alamat |

---

## Overview

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/8ea9927afbf49ec99e5e6.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/9ced4c131c562302f5405.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/30e98f7c79e457b5bbf19.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/ff5d5b45c49f9e3a646f6.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/305636c5ed14c98ea4c51.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/817399feff9c2d4593f12.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/565ac4962f4004e20a1ff.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/1c71f2febd25e4b429aa0.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/ff0ffbe181b58d453e3d0.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/19cce874b2d06388d91e4.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/73b18c767ca00d2a85295.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/08b626a9b6c40170b38c7.png" /></p>

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).
