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
    <div class="home-container">
        <!-- ヒーローセクション -->
        <section class="hero-section">
            <h1>ポートフォリオサイトへようこそ</h1>
            <p>ここでは私のプロジェクトやブログ投稿を紹介しています。</p>
        </section>

        <!-- 自己紹介セクション -->
        <section id="about" class="section">
            <h2>自己紹介</h2>
            <div class="about-content">
                <p>ここに自己紹介文を入れてください。</p>
            </div>
        </section>

        <!-- 受賞歴セクション -->
        <section id="awards" class="section">
            <h2>受賞歴</h2>
            <div class="awards-content">
                <?php
                $awards = [
                    [
                        'title' => 'UnionHack 2024 企業賞',
                        'date' => '2024-08-31',
                        'description' => 'UnionHack 2024で企業賞を受賞しました。詳しくは<a href="http://localhost:8000/project/unionHack.php">こちら</a>をご覧ください。'
                    ]
                ];

                if (!empty($awards)) {
                    echo '<ul class="awards-list">';
                    foreach($awards as $award) {
                        echo '<li class="award-item">';
                        echo '<h3>' . htmlspecialchars($award['title']) . '</h3>';
                        echo '<p class="award-date">' . date('Y年m月d日', strtotime($award['date'])) . '</p>';
                        echo '<p class="award-description">' . $award['description'] . '</p>';
                        echo '</li>';
                    }
                    echo '</ul>';
                } else {
                    echo '<p>受賞歴はまだありません。</p>';
                }
                ?>
            </div>
        </section>

        <!-- ブログセクション -->
        <section id="blog" class="section">
            <h2>最新のブログ投稿</h2>
            <?php
            $sql = "SELECT id, title, created_at FROM posts ORDER BY created_at DESC LIMIT 5";
            $result = $conn->query($sql);

            if ($result->num_rows > 0): ?>
                <ul class="blog-list">
                    <?php while($row = $result->fetch_assoc()): ?>
                        <li>
                            <a href="../blog/post.php?id=<?= $row["id"] ?>">
                                <?= htmlspecialchars($row["title"]) ?>
                            </a>
                            <span class="date"><?= $row["created_at"] ?></span>
                        </li>
                    <?php endwhile; ?>
                </ul>
            <?php else: ?>
                <p>ブログ投稿がありません。</p>
            <?php endif; ?>
        </section>

        <!-- お問い合わせセクション -->
        <section id="contact" class="section">
            <h2>お問い合わせ</h2>
            <p>お問い合わせは<a href="https://docs.google.com/forms/d/e/1FAIpQLSeKLj-bnw1KYSRaDFFtJUsxJjD6c6JnkJQf_qIJrOVk2DSydA/viewform?usp=dialog" target="_blank">こちら</a>からお願いします。</p>
        </section>
    </div>
</main>

<?php
$conn->close();
include '../includes/footer.php';
?>

</body>
</html>