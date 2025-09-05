<?php
// 記事詳細画面のコードを記述
include '../includes/db.php';

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
    <link rel="stylesheet" href="../includes/styles.css">
    <link rel="stylesheet" href="./post.css">
</head>
<body>
    <main>
        <div class="post-container">
            <?php if ($post): ?>
                <div class="post-header">
                    <h1><?php echo htmlspecialchars($post['title']); ?></h1>
                </div>
                <div class="post-content">
                    <p><?php echo nl2br(htmlspecialchars($post['content'])); ?></p>
                    <span class="date">投稿日: <?php echo $post['created_at']; ?></span>
                    <a href="index.php">戻る</a>
                </div>
            <?php else: ?>
                <div class="post-content">
                    <p>記事が見つかりません</p>
                    <a href="index.php">戻る</a>
                </div>
            <?php endif; ?>
        </div>
    </main>
</body>
</html>
