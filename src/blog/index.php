<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ブログ</title>
    <link rel="stylesheet" href="../includes/styles.css">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>

<?php include '../includes/header.php'; ?>

<main>
    <div class="blog-container">
        <div class="blog-header">
            <h1>ブログ</h1>
        </div>

        <?php
        // データベース接続をインクルード
        include '../includes/db.php';

        // 投稿内容を取得するSQLクエリ
        $sql = "SELECT title, content, created_at FROM posts";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // 各投稿を出力
            while($row = $result->fetch_assoc()) {
                echo "<div class='blog-post'>";
                echo "<h2>" . htmlspecialchars($row["title"]) . "</h2>";
                echo "<p>" . nl2br(htmlspecialchars($row["content"])) . "</p>";
                echo "<span class='date'>投稿日: " . $row["created_at"] . "</span>";
                echo "<hr>";
                echo "</div>";
            }
        } else {
            echo "<p>投稿がありません</p>";
        }

        // データベース接続を閉じる
        $conn->close();
        ?>
    </div>
</main>

<?php include '../includes/footer.php'; ?>

</body>
</html>