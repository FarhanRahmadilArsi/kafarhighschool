<?php

include("koneksi.php");
if(isset($_POST['tamu'])){

    // ambil data dari formulir
    $nama = mysqli_real_escape_string($conn, $_POST['nama'] ?? '');
    $instansi = mysqli_real_escape_string($conn, $_POST['instansi'] ?? '');
    $email = mysqli_real_escape_string($conn, $_POST['email'] ?? '');
    $telepon = mysqli_real_escape_string($conn, $_POST['telepon'] ?? '');
    $pesan = mysqli_real_escape_string($conn, $_POST['pesan'] ?? '');
    $tanggal_kunjungan = mysqli_real_escape_string($conn, $_POST['tanggal_kunjungan'] ?? '');

    if ($nama === '' || $email === '' || $pesan === '' || $tanggal_kunjungan === '') {
        header('Location: bukutamu.html?status=data-kosong');
        exit;
    }

    // buat query
    $sql = "INSERT INTO bukutamu (nama, instansi, email, telepon, pesan, tanggal_kunjungan)
            VALUES ('$nama', '$instansi', '$email', '$telepon', '$pesan', '$tanggal_kunjungan')";
    $query = mysqli_query($conn, $sql);

    if (!$query) {
        $alamat_penanggung_jawab = trim($email . ' - ' . $pesan);
        $alamat_penanggung_jawab = mysqli_real_escape_string($conn, $alamat_penanggung_jawab);
        $sql = "INSERT INTO bukutamu (sekolah_atau_organisasi, nama_penanggung_jawab, nohp_penanggung_jawab, alamat_penanggung_jawab, tanggal_kunjungan)
                VALUES ('$instansi', '$nama', '$telepon', '$alamat_penanggung_jawab', '$tanggal_kunjungan')";
        $query = mysqli_query($conn, $sql);
    }

    // apakah query simpan berhasil?
    if( $query ) {
        // kalau berhasil alihkan ke halaman index.php dengan status=sukses
        header('Location: bukutamu.html?status=sukses');
    } else {
        // kalau gagal alihkan ke halaman indek.php dengan status=gagal
        header('Location: bukutamu.html?status=gagal');
    }
} else {
    die("Akses dilarang...");
}
?>
