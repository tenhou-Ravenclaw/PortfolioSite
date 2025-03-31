<?php
// データベース接続
include '../includes/db.php';
echo '管理画面です';
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>記事投稿 - 管理画面</title>
</head>
<body>
    <h2>記事を投稿</h2>
    <form action="post_process.php" method="post">
        <label for="title">タイトル:</label><br>
        <input type="text" name="title" required><br><br>

        <label for="content">内容:</label><br>
        <textarea name="content" rows="5" required></textarea><br><br>

        <button type="submit">投稿する</button>
    </form>

    <h2>投稿一覧</h2>
    <ul>
        <?php
        // 投稿一覧を取得
        $sql = "SELECT id, title, created_at FROM posts ORDER BY created_at DESC";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<li><a href='../blog/post.php?id=" . $row["id"] . "'>" . htmlspecialchars($row["title"]) . "</a> (" . $row["created_at"] . ")</li>";
            }
        } else {
            echo "<li>まだ投稿がありません</li>";
        }
        ?>
    </ul>
</body>
</html>
