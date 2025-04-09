<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>プロジェクト一覧</title>
    <link rel="stylesheet" href="../includes/styles.css">
    <link rel="stylesheet" href="./styles.css">
</head>
<body>

<?php include '../includes/header.php'; ?>

<main>
    <div class="project-container">
        <h1>プロジェクト一覧</h1>
        
        <section class="project-section">
            <h2>ハッカソン一覧</h2>
            <div class="project-grid">
                <div class="project-card">
                    <a href="./unionHack.php">
                        <h3>UnionHack</h3>
                        <p>大学間連携ハッカソンでのプロジェクト開発</p>
                        <span class="project-tag">ハッカソン</span>
                        <span class="project-tag">チーム開発</span>
                    </a>
                </div>
                <div class="project-card">
                    <a href="./JPHacks.php">
                        <h3>JPHacks</h3>
                        <p>日本最大級の学生向けハッカソン</p>
                        <span class="project-tag">ハッカソン</span>
                        <span class="project-tag">全国規模</span>
                    </a>
                </div>
                <div class="project-card">
                    <a href="./KC3Hack.php">
                        <h3>KC3Hack</h3>
                        <p>近畿大学主催のハッカソン</p>
                        <span class="project-tag">ハッカソン</span>
                        <span class="project-tag">関西最大級</span>
                    </a>
                </div>
            </div>
        </section>

        <section class="project-section">
            <h2>学生プロジェクト一覧</h2>
            <div class="project-grid">
                <div class="project-card">
                    <a href="./pediatrics.php">
                        <h3>KDIX.Connect</h3>
                        <p>小児科医と患者をつなぐプラットフォーム</p>
                        <span class="project-tag">医療</span>
                        <span class="project-tag">社会実装</span>
                    </a>
                </div>
                <div class="project-card">
                    <a href="./KDIX.Order.php">
                        <h3>KDIX.Order</h3>
                        <p>病院向け注文管理システム</p>
                        <span class="project-tag">飲食店</span>
                        <span class="project-tag">業務効率化</span>
                    </a>
                </div>
                <div class="project-card">
                    <a href="./HackSphere.php">
                        <h3>HackSphere</h3>
                        <p>学生向けプログラミング学習プラットフォーム</p>
                        <span class="project-tag">クリエイティブ</span>
                        <span class="project-tag">カジュアル</span>
                    </a>
                </div>
            </div>
        </section>
    </div>
</main>

<?php include '../includes/footer.php'; ?>

</body>
</html>