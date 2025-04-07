<?php
// データベース接続
include '../includes/db.php';
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ポートフォリオサイト</title>
    <link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet" href="../includes/styles.css">
</head>
<body>

<?php include '../includes/header.php'; ?>

<main>
    <h1>ポートフォリオサイトへようこそ</h1>
    <p>ここでは私のプロジェクトやブログ投稿を紹介しています。</p>

    <h2>最新のブログ投稿</h2>

    <?php
    $sql = "SELECT id, title, created_at FROM posts ORDER BY created_at DESC LIMIT 5";
    $result = $conn->query($sql);

    if ($result->num_rows > 0): ?>
        <ul>
            <?php while($row = $result->fetch_assoc()): ?>
                <li>
                    <a href="../blog/post.php?id=<?= $row["id"] ?>">
                        <?= htmlspecialchars($row["title"]) ?>
                    </a> - <?= $row["created_at"] ?>
                </li>
            <?php endwhile; ?>
        </ul>
    <?php else: ?>
        <p>ブログ投稿がありません。</p>
    <?php endif; ?>

</main>

<?php
$conn->close();
include '../includes/footer.php';
?>

</body>
</html>