export default function ContactPage() {
    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero hero--sub">
                <h1 className="hero-title">Contact</h1>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="card-qr" />
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">お問い合わせ</h2>
                    <p className="section-desc">
                        お仕事のご相談、イベントのお誘い、その他お問い合わせはこちらのフォームからお願いします。
                    </p>
                    <div className="contact-form-embed">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLScMz8hMeGwqEDufwzbkMqZcfsOx5JHx8pUF3hgUCVzGK9QkFw/viewform?embedded=true"
                            width="100%"
                            height={1200}
                            loading="lazy"
                        >
                            読み込んでいます…
                        </iframe>
                    </div>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-barcode card-barcode--thin" />
                </div>
            </section>
        </main>
    );
}
