# 名刺コンセプト・モック指針

## 全体構造
1. **Hero Layer (100vh)**
   - 左 60% : `OwlGlyph` SVG＋淡い線画背景＋ライムのハーフトーン帯を斜めに走らせる。
   - 右 40% : `InfoColumn`（漢字氏名＋英字氏名＋肩書＋アカウント列＋「Do it with ease...」のスローガン）。
   - 背景は 0.5px のシアン線グリッド、角にバーコード・グローブ・Wi-Fi アイコンを絶対配置。
2. **Data Modules**
   - About/Awards/Works/Recent/Skills を `DataPanel` で統一。ヘッダに `◎ SECTION NAME`、右上にバーコード、左下に QR/ラベル。
   - パネル間はハーフトーン帯やラインを挟み、名刺のレイヤー感を再現。
3. **Footer**
   - 左端に QR 群、右端にサイン（`Ayato Fujita` のスクリプト体）を薄く重ねる。

## カラーパレット
| token | value | note |
| --- | --- | --- |
| `--color-bg` | `#FDFEFF` | 純白寄り |
| `--color-primary` | `#38BDFC` | 主要ライン |
| `--color-primary-ink` | `#0081FF` | テキスト／アクセント |
| `--color-lime` | `#C4FF58` | ハーフトーン帯 |
| `--color-ink` | `#0F2D5C` | 見出し文字色 |

## 構成要素モック
- **OwlGlyph**
  - `public/owl-card.svg` を置き、Hero 背景と About パネルのマスクで使う。
  - SVG 内の主要パスに `stroke="currentColor"` で配色切り替え。
- **QRBadge**
  - `width: 96px`, 斜体ラベル、中央に実際の QR（`<img>` or `canvas`）を埋め込み。
- **BarcodeRibbon**
  - `background-image: repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 4px);`
  - Hero/Panel の端を繋ぐラインとして活用。
- **HalftoneBand**
  - ライム→透明のグラデーションを `conic-gradient` で表現し、`mix-blend-mode: screen;` を指定。

## インタラクション
- Hero 右カラムのアカウントをホバーすると対応 QR が左側に光る。
- Recent Activities は横スクロールの `ActivityRail`。カード右上にロールピル＋バーコード短冊。
- Skills はクリックで右側に「Skill Console」が slide-in。詳細テキストとレベルゲージを表示。

## 実装順
1. `next/font` で `Varela Round`, `Great Vibes`, `Noto Sans JP` を読み込み。
2. `globals.css` に新トークンとユーティリティ（Halftone, Barcode, Grid）を追加。
3. `components/` に Hero/DataPanel/ActivityRail/SkillConsole/Badge を作成。
4. `app/page.tsx` を再構成し、既存ロジック（`recentActivities`/`featuredBadges`）を新コンポーネントへ受け渡す。
5. レスポンシブ調整（<768px は縦積み、デコレーションは縮小）。

