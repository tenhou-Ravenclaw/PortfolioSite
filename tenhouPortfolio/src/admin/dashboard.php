<?php
// データベース接続
include '../includes/db.php';
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>記事投稿 - 管理画面</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="admin-container">
        <div class="admin-header">
            <h1>管理画面</h1>
        </div>

        <section class="admin-section">
            <h2>記事を投稿</h2>
            <form action="post_process.php" method="post" class="admin-form">
                <label for="title">タイトル:</label>
                <input type="text" name="title" id="title" required>

                <label for="content">内容:</label>
                <textarea name="content" id="content" required></textarea>

        <button type="submit">投稿する</button>
    </form>

        <section class="admin-section">
            <h2>投稿一覧</h2>
            <ul class="admin-list">
                <?php
                // 投稿一覧を取得
                $sql = "SELECT id, title, created_at FROM posts ORDER BY created_at DESC";
                $result = $conn->query($sql);
                
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<li>";
                        echo "<a href='../blog/post.php?id=" . $row["id"] . "'>" . htmlspecialchars($row["title"]) . "</a>";
                        echo " <span class='date'>(" . $row["created_at"] . ")</span>";
                        echo " <form action='delete_post.php' method='post' style='display: inline;'>";
                        echo "<input type='hidden' name='post_id' value='" . $row["id"] . "'>";
                        echo "<button type='submit' class='delete-btn' onclick='return confirm(\"この投稿を削除してもよろしいですか？\")'>削除</button>";
                        echo "</form>";
                        echo "</li>";
                    }
                } else {
                    echo "<li>まだ投稿がありません</li>";
                }
                ?>
            </ul>
        </section>
    </div>
</body>
</html>
