<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include 'koneksi.php';

    $nama            = mysqli_real_escape_string($conn, $_POST['nama'] ?? '');
    $tanggal_lahir   = mysqli_real_escape_string($conn, $_POST['tanggal_lahir'] ?? $_POST['tgl_lahir'] ?? '');
    $asal_sekolah    = mysqli_real_escape_string($conn, $_POST['asal_sekolah'] ?? '');
    $tahun_lulus     = mysqli_real_escape_string($conn, $_POST['tahun_lulus'] ?? '');
    $program         = mysqli_real_escape_string($conn, $_POST['program'] ?? 'Pendaftaran Umum');
    $tanggal_daftar  = date("Y-m-d"); // otomatis tanggal hari ini

    if ($nama === '' || $tanggal_lahir === '' || $asal_sekolah === '' || $tahun_lulus === '') {
        echo "<script>
            alert('Data pendaftaran belum lengkap.');
            window.history.back();
        </script>";
        exit;
    }

    mysqli_query($conn, "CREATE TABLE IF NOT EXISTS registrasi (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nama VARCHAR(100) NOT NULL,
        tanggal_lahir DATE NOT NULL,
        asal_sekolah VARCHAR(150) NOT NULL,
        tahun_lulus VARCHAR(10) NOT NULL,
        program VARCHAR(80) NOT NULL,
        tanggal_daftar DATE NOT NULL
    )");

    $columns = [];
    $result = mysqli_query($conn, "SHOW COLUMNS FROM registrasi");
    while ($row = mysqli_fetch_assoc($result)) {
        $columns[] = $row['Field'];
    }

    if (!in_array('tahun_lulus', $columns)) {
        mysqli_query($conn, "ALTER TABLE registrasi ADD tahun_lulus VARCHAR(10) NOT NULL DEFAULT '' AFTER asal_sekolah");
    }
    if (!in_array('program', $columns)) {
        mysqli_query($conn, "ALTER TABLE registrasi ADD program VARCHAR(80) NOT NULL DEFAULT 'Pendaftaran Umum' AFTER tahun_lulus");
    }

    $sql = "INSERT INTO registrasi (nama, tanggal_lahir, asal_sekolah, tahun_lulus, program, tanggal_daftar)
            VALUES ('$nama', '$tanggal_lahir', '$asal_sekolah', '$tahun_lulus', '$program', '$tanggal_daftar')";

    if (mysqli_query($conn, $sql)) {
        $safe_program = htmlspecialchars($program, ENT_QUOTES, 'UTF-8');
        echo "<script>
            alert('Pendaftaran online berhasil untuk program $safe_program!');
            window.location.href = 'index.html?status=sukses';
        </script>";
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
