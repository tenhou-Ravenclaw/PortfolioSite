<?php
// 問い合わせページのコードを記述

// ヘッダーのインクルード
include '../includes/header.php';

// データベース接続をインクルード
include '../includes/db.php';

echo '<h1>お問い合わせ</h1>';

// このアドレスからアンケートに飛ぶようにする
echo '<p>お問い合わせは<a href="https://docs.google.com/forms/d/e/1FAIpQLSeKLj-bnw1KYSRaDFFtJUsxJjD6c6JnkJQf_qIJrOVk2DSydA/viewform?usp=dialog" target="_blank">こちら</a>からお願いします。</p>';

// フッターのインクルード
include '../includes/footer.php';
?>