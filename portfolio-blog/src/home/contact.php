<?php
// 問い合わせページのコードを記述

// ヘッダーのインクルード
include '../includes/header.php';

// データベース接続をインクルード
include '../includes/db.php';

echo '<h1>お問い合わせ</h1>';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームからのデータを取得
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // データベースに問い合わせ内容を保存
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo '<p>お問い合わせありがとうございます。メッセージが送信されました。</p>';
    } else {
        echo '<p>申し訳ありませんが、メッセージの送信に失敗しました。</p>';
    }

    $stmt->close();
    $conn->close();
} else {
    // フォームの表示
    echo '<form action="contact.php" method="post">';
    echo '<label for="name">名前:</label>';
    echo '<input type="text" id="name" name="name" required>';
    echo '<br>';
    echo '<label for="email">メールアドレス:</label>';
    echo '<input type="email" id="email" name="email" required>';
    echo '<br>';
    echo '<label for="message">メッセージ:</label>';
    echo '<textarea id="message" name="message" required></textarea>';
    echo '<br>';
    echo '<input type="submit" value="送信">';
    echo '</form>';
}

// フッターのインクルード
include '../includes/footer.php';
?>