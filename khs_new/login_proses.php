<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: index.html");
    exit;
}

$name = trim($_POST["name"] ?? "");

if ($name === "") {
    echo "<script>
        alert('Nama wajib diisi.');
        window.history.back();
    </script>";
    exit;
}

$safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');

echo "<script>
    alert('Terima kasih, {$safe_name}. Data login/booking sudah diterima.');
    window.location.href = 'index.html';
</script>";
?>
