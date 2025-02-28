<?php
include '../includes/db.php';

$result = $conn->query("SELECT * FROM posts");

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Title: " . $row["title"] . "<br>";
    }
} else {
    echo "投稿がありません";
}

$conn->close();
?>
