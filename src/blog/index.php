<?php
// ブログページのコードを記述

// ヘッダーのインクルード
include '../includes/header.php';

// データベース接続をインクルード
include '../includes/db.php';

// 投稿内容を取得するSQLクエリ
$sql = "SELECT title, content, created_at FROM posts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 各投稿を出力
    while($row = $result->fetch_assoc()) {
        echo "<h2>" . $row["title"] . "</h2>";
        echo "<p>" . $row["content"] . "</p>";
        echo "<small>投稿日: " . $row["created_at"] . "</small><hr>";
    }
} else {
    echo "投稿がありません";
}

// データベース接続を閉じる
$conn->close();

// フッターのインクルード
include '../includes/footer.php';
?>