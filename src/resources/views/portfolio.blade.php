<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ポートフォリオサイト</title>
    <link rel="stylesheet" href="/css/portfolio.css">
</head>
<body>
    <header class="fade-in">
        <h1>私のポートフォリオ</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="about" class="slide-in">
        <h2>About Me</h2>
        <p>Webエンジニアとして活動しています。JSやPHP、Laravelが得意です。</p>
    </section>
    <section id="projects" class="slide-in">
        <h2>Projects</h2>
        <div class="card-list">
            <div class="card">
                <h3>プロジェクトA</h3>
                <p>説明文A</p>
            </div>
            <div class="card">
                <h3>プロジェクトB</h3>
                <p>説明文B</p>
            </div>
            <div class="card">
                <h3>プロジェクトC</h3>
                <p>説明文C</p>
            </div>
        </div>
    </section>
    <section id="contact" class="slide-in">
        <h2>Contact</h2>
        <form>
            <input type="text" placeholder="お名前" required>
            <input type="email" placeholder="メールアドレス" required>
            <textarea placeholder="お問い合わせ内容" required></textarea>
            <button type="submit">送信</button>
        </form>
    </section>
    <script src="/js/portfolio.js"></script>
</body>
</html>
