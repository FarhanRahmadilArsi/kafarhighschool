<?php
$host = "localhost";     // atau 127.0.0.1
$user = "root";          // sesuaikan user MySQL Anda
$pass = "";              // biasanya kosong jika pakai XAMPP
$db   = "buku_tamu";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
