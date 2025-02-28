<?php
// データベース接続情報
$host = "mysql_container"; // DockerのMySQLサービス名
$username = "user";
$password = "password";
$database = "portfolio_blog";

// MySQLに接続
$conn = new mysqli($host, $username, $password, $database);

// 接続エラーの確認
if ($conn->connect_error) {
    die("データベース接続失敗: " . $conn->connect_error);
}

// 文字コード設定（日本語対応）
$conn->set_charset("utf8mb4");
?>
