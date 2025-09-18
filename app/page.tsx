export default function Home() {
  return (
    <main className="container" style={{ position: 'relative' }}>
      <div className="bg-geometry" />
      {/* Heroセクション */}
      <section className="hero">
        <h1 className="hero-title">Tenhou’s Portfolio Site</h1>
        <p className="hero-sub">誠実さと美しさを大切に。<br />趣味：ダーツ・音楽鑑賞／好きな動物：フクロウ／好きな植物：桜／好きな自然：夜空</p>

      </section>

      {/* Aboutセクション */}
      <section className="section">
        <h2 className="section-title">About</h2>
        <p className="section-desc">「無理なく、無駄なく、美しく」を信条に、誠実なものづくりを心がけています。<a href="/about" className="link">もっと見る</a></p>
      </section>

      {/* Worksセクション */}
      <section className="section">
        <h2 className="section-title">Works</h2>
        <p className="section-desc">美しさと機能性を両立した制作物・実績を紹介します。<a href="/works" className="link">もっと見る</a></p>
      </section>

      {/* Skillsセクション */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <p className="section-desc">幾何学的な思考と創造性を活かした技術・ツール。<a href="/skills" className="link">もっと見る</a></p>
      </section>

      {/* Contactセクション */}
      <section className="hero">
        <a href="/contact" className="contact-btn">Contact</a>
      </section>
    </main>
  );
}
