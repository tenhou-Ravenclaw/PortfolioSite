<?php
// ポートフォリオサイトのトップページのコードを記述

// ヘッダーのインクルード
include '../includes/header.php';

echo '<h1>ポートフォリオサイトへようこそ</h1>';
echo '<p>ここでは私のプロジェクトやブログ投稿を紹介しています。</p>';

// ブログセクション
echo '<h2>最新のブログ投稿</h2>';

// データベース接続をインクルード
include '../includes/db.php';

// 最新のブログ投稿を取得するSQLクエリ
$sql = "SELECT id, title, created_at FROM posts ORDER BY created_at DESC LIMIT 5";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo '<ul>';
    while($row = $result->fetch_assoc()) {
        echo '<li><a href="blog/post.php?id=' . $row["id"] . '">' . $row["title"] . '</a> - ' . $row["created_at"] . '</li>';
    }
    echo '</ul>';
} else {
    echo '<p>ブログ投稿がありません。</p>';
}

// データベース接続を閉じる
$conn->close();

// フッターのインクルード
include '../includes/footer.php';
?>