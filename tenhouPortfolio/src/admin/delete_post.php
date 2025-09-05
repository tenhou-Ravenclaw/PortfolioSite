<?php
// データベース接続
include '../includes/db.php';

// POSTリクエストの確認
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['post_id'])) {
    // 投稿IDを取得
    $post_id = intval($_POST['post_id']);
    
    // SQLインジェクション対策のため、プリペアドステートメントを使用
    $stmt = $conn->prepare("DELETE FROM posts WHERE id = ?");
    $stmt->bind_param("i", $post_id);
    
    // 削除を実行
    if ($stmt->execute()) {
        // 削除成功時は管理画面にリダイレクト
        header("Location: dashboard.php?message=deleted");
    } else {
        // エラー時はエラーメッセージと共にリダイレクト
        header("Location: dashboard.php?error=delete_failed");
    }
    
    $stmt->close();
} else {
    // 不正なアクセスの場合は管理画面にリダイレクト
    header("Location: dashboard.php");
}

$conn->close();
?> 