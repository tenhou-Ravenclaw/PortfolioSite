export default function AboutPage() {
    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero">
                <h1 className="hero-title">About</h1>
                <p className="hero-sub">誠実さと美しさを大切に、「無理なく、無駄なく、美しく」生きる。</p>
            </section>
            <section className="section">
                <h2 className="section-title">プロフィール</h2>
                <p className="section-desc">
                    趣味はダーツと音楽鑑賞。好きな動物はフクロウ、好きな植物は桜、好きな自然は夜空。<br />
                    羽や月、星、幾何学模様に心惹かれます。
                </p>
            </section>
            <section className="section">
                <h2 className="section-title">価値観</h2>
                <p className="section-desc">
                    「無理なく、無駄なく、美しく」を信条に、誠実なものづくりを心がけています。
                </p>
            </section>
        </main>
    );
}
