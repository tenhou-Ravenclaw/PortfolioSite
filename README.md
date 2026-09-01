# Tenhou Portfolio Site

Next.js (App Router) + TypeScript で構築された個人ポートフォリオサイト。Groqを使ったAIチャットボットや、活動・イベント履歴、スキルの可視化などを含む。

## 必要環境

- Node.js 20 以上
- npm

## セットアップ

```bash
git clone <このリポジトリ>
cd PortfolioSite
npm install
cp .env.example .env.local
```

`.env.local` に必要な環境変数を設定する（詳細は `.env.example` を参照）。

| 変数 | 必須 | 用途 |
| --- | --- | --- |
| `GROQ_API_KEY` | 必須 | AIチャットボット（`app/api/chat`）がGroq APIを呼び出すために使用。未設定の場合チャットAPIは503を返す。 |
| `OWNER_NAME` | 任意 | AIチャットの回答文脈に含める本名。 |
| `OWNER_NAME_KANA` | 任意 | `OWNER_NAME` のふりがな。`OWNER_NAME` 未設定時は無視される。 |

秘密値そのものはコミットしない（`.env*` は `.gitignore` 対象、`.env.example` のみ例外）。

## 開発

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できる。

## 検証

```bash
npm run lint       # ESLint
npm run typecheck  # next typegen でルート型を再生成してから tsc --noEmit
npm test           # vitest
npm run build      # 本番ビルド（Turbopack）
```

`npm run typecheck` は毎回 `next typegen` でルート型を再生成してから型チェックするため、`dev`/`build` で残った古い `.next` 生成物の影響を受けずに安定して実行できる。

## 本番起動

```bash
npm run build
npm run start
```

## デプロイ

[Vercel](https://vercel.com) にデプロイしている。`main` ブランチへのマージで本番反映される。
