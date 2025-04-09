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
    $message = "記事が投稿されました。<a href='dashboard.php'>戻る</a>";
} else {
    $message = "投稿に失敗しました: " . $stmt->error;
}

// 接続を閉じる
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>投稿処理 - 管理画面</title>
    <link rel="stylesheet" href="./post_process.css">
</head>
<body>
    <div class="process-container">
        <div class="process-header">
            <h1>投稿処理</h1>
        </div>
        <div class="process-content">
            <p><?php echo $message; ?></p>
        </div>
    </div>
</body>
</html>
