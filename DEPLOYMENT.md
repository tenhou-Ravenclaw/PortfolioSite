# デプロイメントガイド

## Vercelへのデプロイ

このプロジェクトはVercelへのデプロイを想定しています。

### 自動設定

Vercelにデプロイすると、環境変数 `VERCEL_URL` が自動的に設定されます。
このため、特別な設定なしでOpenGraphメタデータが正しく機能します。

### カスタムドメインを使用する場合

カスタムドメインを使用する場合は、Vercelの環境変数に以下を設定してください：

```
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

### ローカル開発

ローカル開発環境では `http://localhost:3000` が使用されます。

## ソーシャルメディア共有のテスト

デプロイ後、以下のツールでメタデータが正しく設定されているか確認できます：

- Twitter: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/

## 変更内容

このプロジェクトでは、共有時に "Create Next App" と表示される問題を修正しました：

1. README.mdを独自のポートフォリオ説明に更新
2. メタデータのURLを動的に設定（環境変数を使用）
3. 開発環境、Vercel環境、カスタムドメインの全てに対応
