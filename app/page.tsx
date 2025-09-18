export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-6 sm:p-12 space-y-16">
      {/* ホーム（自己紹介） */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">天鳳のポートフォリオ</h1>
        <p className="text-gray-600">Webエンジニア / フロントエンド・バックエンド</p>
        <p>
          React/Next.jsを中心に、UI/UXにこだわったWebアプリ開発が得意です。新しい技術やデザインにも積極的に挑戦しています。
        </p>
      </section>

      {/* イベント参加履歴 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">イベント参加履歴</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>2024年5月：Reactカンファレンス登壇</li>
          <li>2023年11月：Next.js Meetup 参加</li>
          <li>2023年7月：Web技術勉強会 主催</li>
        </ul>
      </section>

      {/* プロダクト */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">開発・関与プロダクト</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>ポートフォリオサイト（Next.js）</li>
          <li>業務用ダッシュボード（React/TypeScript）</li>
          <li>APIサーバー（Node.js/Express）</li>
        </ul>
      </section>

      {/* 問い合わせフォームへのリダイレクト */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">お問い合わせ</h2>
        <a
          href="https://forms.gle/your-form-url" // ←ここを実際のフォームURLに変更
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          問い合わせフォームへ
        </a>
      </section>
    </main>
  );
}
