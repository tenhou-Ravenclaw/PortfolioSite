export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '2rem 0', maxWidth: 900, margin: '0 auto' }}>
      {/* Heroセクション */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#666', marginTop: 12 }}>フロントエンドエンジニア／デザイナー など肩書き</p>
      </section>

      {/* Aboutセクション */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>About</h2>
        <p style={{ color: '#444', marginTop: 8 }}>自己紹介や経歴のダイジェスト。<a href="/about" style={{ color: '#0070f3', textDecoration: 'underline' }}>もっと見る</a></p>
      </section>

      {/* Worksセクション */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Works</h2>
        <p style={{ color: '#444', marginTop: 8 }}>制作物・実績の一部を紹介。<a href="/works" style={{ color: '#0070f3', textDecoration: 'underline' }}>もっと見る</a></p>
      </section>

      {/* Skillsセクション */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skills</h2>
        <p style={{ color: '#444', marginTop: 8 }}>得意な技術やツール。<a href="/skills" style={{ color: '#0070f3', textDecoration: 'underline' }}>もっと見る</a></p>
      </section>

      {/* Contactセクション */}
      <section style={{ textAlign: 'center' }}>
        <a href="/contact" style={{ display: 'inline-block', padding: '0.75rem 2rem', background: '#0070f3', color: '#fff', borderRadius: 8, fontWeight: 'bold', textDecoration: 'none' }}>Contact</a>
      </section>
    </main>
  );
}
