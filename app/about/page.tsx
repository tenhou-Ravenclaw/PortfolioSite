export default function AboutPage() {
    return (
        <main className="container" style={{ position: 'relative' }}>
            <div className="bg-geometry" />
            <section className="hero hero--sub">
                <h1 className="hero-title">About</h1>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="card-qr" />
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">プロフィール</h2>
                    <p className="section-desc">
                        フルスタック(を目指している)エンジニア。<br />
                        フクロウが大好き。<br />
                        近畿大学情報学部実世界コンピューティングコースに在学中。<br />
                        プログラミングは大学入学と同時に始めた。<br />
                        Webアプリケーション開発を中心にハードウェアやサーバーなど、幅広く学んでいる。<br />
                        最近のマイブームはキーボード設計。頑張って作業効率を上げている。
                    </p>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-barcode card-barcode--thin" />
                </div>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="vertical-label">
                        <span>略歴</span>
                    </div>
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">略歴</h2>
                    <p className="section-desc">
                        近畿大学 情報学部 実世界コンピューティングコース 2年。<br/>
                        入学直後より医学部、文芸学部、経営学部と連携し小児向けアプリ開発を行う「KDIX.Connect」を立ち上げ、プロダクトマネージャーとして活動。<br />
                        2024年11月には近畿大学情報学部内で学生団体「HackSphere」を立ち上げ、代表を務める。<br/>
                        2025年3月よりWebエンジニアとして長期インターンに従事。<br />
                        現在イベント運営やプロダクト管理の傍ら「すべての技術に精通するプログラムマネージャー」を目指し、日々学習を進めている。
                    </p>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-dotgrid" />
                </div>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="card-barcode" />
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">経歴</h2>
                    <p className="section-desc">
                        岐阜県出身。2006年生まれ。<br />
                        2024年3月に鶯谷高等学校を卒業。<br />
                        2024年4月に近畿大学情報学部情報に入学。同時にKDIX.Connectを設立し、代表を務める。<br />
                        2024年11月に学生団体 HackSphere を設立し、代表を務める。<br />
                        2025年3月、株式会社スマレジに長期インターンシップとして入社。<br />
                        2025年5月、GDG Greater Kwansai のオーガナイザーに就任。<br />
                        2025年8月、Alpha+ Project PgMコースに生徒として参加。<br />
                        2025年10月、株式会社パワーエックスに長期インターンシップとして入社。<br />
                        
                    </p>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-qr" />
                </div>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="vertical-label">
                        <span>価値観</span>
                    </div>
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Bridge the Gap</h3>
                            <p>ハードウェアとソフトウェア、人と技術。異なる領域を繋ぐ「架け橋」として、新しい価値を生み出します。</p>
                        </div>
                        <div className="value-item">
                            <h3>Playful Engineering</h3>
                            <p>「楽しむこと」こそが最大の原動力。遊び心を忘れず、触れる人の心を動かすプロダクトを作ります。</p>
                        </div>
                        <div className="value-item">
                            <h3>Owl&apos;s Wisdom</h3>
                            <p>知恵の象徴であるフクロウのように、常に学び続け、深い洞察と広い視野で課題に向き合います。</p>
                        </div>
                    </div>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-dotgrid" />
                </div>
            </section>
            <section className="section section-card">
                <div className="section-card__decor section-card__decor--left" aria-hidden="true">
                    <div className="vertical-label">
                        <span>趣味</span>
                    </div>
                </div>
                <div className="section-card__content">
                    <h2 className="section-title">趣味</h2>
                    <p className="section-desc">
                        ダーツ、音楽鑑賞、読書、映画鑑賞、旅行、カフェ巡り、写真撮影、プログラミング
                    </p>
                </div>
                <div className="section-card__decor section-card__decor--right" aria-hidden="true">
                    <div className="card-barcode card-barcode--thin" />
                </div>
            </section>

        </main>
    );
}
