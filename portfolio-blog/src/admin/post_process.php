<?php
include '../includes/db.php';

// フォームからの入力を取得
$title = $_POST['title'];
$content = $_POST['content'];

// SQLを準備
$sql = "INSERT INTO posts (title, content, created_at) VALUES (?, ?, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $title, $content);

// 実行
if ($stmt->execute()) {
    echo "記事が投稿されました。<a href='dashboard.php'>戻る</a>";
} else {
    echo "投稿に失敗しました: " . $stmt->error;
}

// 接続を閉じる
$stmt->close();
$conn->close();
?>
