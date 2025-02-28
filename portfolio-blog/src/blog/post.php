<?php
// 記事詳細画面のコードを記述
echo '記事詳細画面です';
include 'includes/db.php';

// 記事IDの取得
$post_id = $_GET['id'] ?? 0;
$sql = "SELECT title, content, created_at FROM posts WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $post_id);
$stmt->execute();
$result = $stmt->get_result();
$post = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($post['title'] ?? "記事が見つかりません"); ?></title>
</head>
<body>
    <?php if ($post): ?>
        <h1><?php echo htmlspecialchars($post['title']); ?></h1>
        <p><?php echo nl2br(htmlspecialchars($post['content'])); ?></p>
        <p><small>投稿日: <?php echo $post['created_at']; ?></small></p>
        <a href="index.php">戻る</a>
    <?php else: ?>
        <p>記事が見つかりません</p>
        <a href="index.php">戻る</a>
    <?php endif; ?>
</body>
</html>
