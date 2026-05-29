# 🏫 Kafar High School — Website Profil Sekolah

> Website resmi SMA Kafar High School yang menampilkan informasi lengkap sekolah: profil, kurikulum, tenaga didik, ekstrakurikuler, prestasi, dan sistem pendaftaran siswa baru berbasis database.

![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)
![Tech](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20Bootstrap%20%7C%20PHP%20%7C%20MySQL-blue?style=flat)
![Type](https://img.shields.io/badge/Type-School%20Profile%20Website-orange?style=flat)
![Made By](https://img.shields.io/badge/Made%20by-Farhan%20%26%20Dhiika-purple?style=flat)

---

## 📌 Deskripsi Proyek

Website ini dibangun sebagai platform digital resmi **Kafar High School** — sekolah menengah atas yang berdiri sejak 2023 di Jakarta Barat. Website menggabungkan tampilan profil institusi yang informatif dengan fitur interaktif seperti formulir pendaftaran siswa baru, buku tamu, dan halaman kontak yang terhubung langsung ke database MySQL.

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|---|---|
| 🏠 **Halaman Utama** | Landing page dengan slider, info singkat sekolah, harga paket, dan booking bangku |
| 📖 **Tentang Kami** | Visi, misi, sejarah sekolah, dan daftar penghargaan/prestasi |
| 👨‍🏫 **Tenaga Didik** | Profil lengkap guru dan staf pengajar |
| 📚 **Kurikulum & Ekskul** | Halaman mata pelajaran dan detail ekstrakurikuler (Futsal, Basket, OSIS) |
| 📝 **Registrasi Siswa** | Form pendaftaran siswa baru dengan penyimpanan ke database MySQL |
| 📬 **Buku Tamu** | Form pesan interaktif yang tersimpan di database |
| 📞 **Kontak** | Form kontak dengan validasi email dan integrasi PHP mailer |
| 🖼️ **Galeri** | Dokumentasi kegiatan sekolah, ekskul, dan prestasi |
| 📰 **Blog** | Halaman artikel dan berita sekolah |

---

## 🛠️ Teknologi yang Digunakan

```
Frontend  : HTML5, CSS3, Bootstrap 4, JavaScript, jQuery
Backend   : PHP (Native)
Database  : MySQL (via phpMyAdmin / XAMPP)
Tools     : XAMPP, Visual Studio Code
Design    : CSS Custom + Bootstrap Responsive Grid
```

---

## 🗂️ Struktur Proyek

```
kafar_high_school/
├── index.html              # Halaman utama
├── about.html              # Profil & sejarah sekolah
├── teachers.html           # Halaman tenaga didik
├── course-grid-2.html      # Halaman ekskul Futsal
├── course-grid-3.html      # Halaman ekskul Basket
├── course-grid-4.html      # Halaman OSIS
├── blog.html               # Halaman berita/artikel
├── contact.html            # Halaman kontak
├── bukutamu.html           # Halaman buku tamu
├── koneksi.php             # Konfigurasi koneksi database
├── register_proses.php     # Proses simpan data registrasi
├── bukutamu.php            # Proses simpan data buku tamu
├── contact.php             # Handler form kontak & email
├── style.css               # Stylesheet utama
├── bukutamu.css            # Stylesheet buku tamu
├── logo.png                # Logo sekolah
└── images/                 # Aset gambar & media
```

---

## 🗄️ Database

Database: `buku_tamu` (MySQL)

**Tabel `registrasi`:**
| Kolom | Tipe | Keterangan |
|---|---|---|
| `nama` | VARCHAR | Nama calon siswa |
| `tanggal_lahir` | DATE | Tanggal lahir |
| `asal_sekolah` | VARCHAR | Asal sekolah sebelumnya |
| `tanggal_daftar` | DATE | Otomatis diisi tanggal hari ini |

---

## ⚙️ Cara Menjalankan

**Prasyarat:** XAMPP (Apache + MySQL) terinstal di komputer.

```bash
# 1. Clone atau ekstrak project ke folder htdocs
cp -r kafar_high_school/ C:/xampp/htdocs/

# 2. Jalankan Apache & MySQL di XAMPP Control Panel

# 3. Buat database di phpMyAdmin
#    Nama database: buku_tamu
#    Import struktur tabel dari file .sql (jika tersedia)

# 4. Buka browser dan akses
http://localhost/kafar_high_school/index.html
```

> **Catatan:** Pastikan konfigurasi di `koneksi.php` sesuai dengan pengaturan MySQL lokal Anda (host, user, password).

---

## 🏆 Tentang Kafar High School

- 📍 Lokasi: Jl. Meruya Selatan, Kel. Meruya Selatan, Kec. Kembangan, Jakarta Barat
- 📧 Email: KafarHighSchoool@Gmail.com
- 🌐 Website: www.kafarhighscchool.com
- 📞 Telepon: +62 8829 1247 968
- 🎖️ Prestasi: Juara 1 Futsal Tingkat Kota, Juara Umum Olimpiade Sains, Sekolah Ramah Anak & Anti Perundungan

---

## 👨‍💻 Developer

Dibuat oleh **Farhan Rahmadil Arsi & Dhiika** © 2025 Kafar High School

[![Portfolio](https://img.shields.io/badge/Portfolio-Farhan-00C896?style=flat)](https://portofarhan.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-farhanganteng09-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/farhanganteng09/)
