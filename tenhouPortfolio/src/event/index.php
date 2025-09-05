<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>イベント参加履歴</title>
    <link rel="stylesheet" href="../includes/styles.css">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>

<?php include '../includes/header.php'; ?>

<main>
    <div class="blog-container">
        <div class="blog-header">
            <h1>イベント参加履歴</h1>
        </div>

        <?php
        // データベース接続をインクルード
        include '../includes/db.php';

        // イベント参加履歴を取得するSQLクエリ
        $sql = "SELECT event_name, participated_at, description FROM event_history ORDER BY participated_at DESC";
        $result = $conn->query($sql);

        if ($result && $result->num_rows > 0) {
            // 各イベント履歴を出力
            while($row = $result->fetch_assoc()) {
                echo "<div class='event-history'>";
                echo "<h2>" . htmlspecialchars($row["event_name"]) . "</h2>";
                echo "<span class='date'>参加日: " . $row["participated_at"] . "</span>";
                if (!empty($row["description"])) {
                    echo "<p>" . nl2br(htmlspecialchars($row["description"])) . "</p>";
                }
                echo "<hr>";
                echo "</div>";
            }
        } else {
            echo "<p>参加履歴がありません</p>";
        }

        // データベース接続を閉じる
        $conn->close();
        ?>
    </div>
</main>

<?php include '../includes/footer.php'; ?>

</body>
</html>