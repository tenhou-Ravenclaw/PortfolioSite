export default function SkillsPage() {
    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero">
                <h1 className="hero-title">Skills</h1>
                <p className="hero-sub">幾何学的な思考と創造性を活かしたスキル</p>
            </section>
            <section className="section">
                <h2 className="section-title">得意分野</h2>
                <p className="section-desc">
                    フロントエンド開発、UI/UXデザイン、React/Next.js、CSS設計など。<br />
                    美しさと使いやすさを両立する設計を心がけています。
                </p>
            </section>
        </main>
    );
}
