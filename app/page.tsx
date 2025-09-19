import { awards } from "../data/awards";

export default function Home() {
  return (
    <>

      <main className="container" style={{ position: 'relative' }}>
        <div className="bg-geometry" />
        {/* Heroセクション */}
        <section className="hero">
          <h1 className="hero-title">Tenhou’s Portfolio Site</h1>
        </section>
        {/* Aboutセクション */}
        <section className="section">
          <h2 className="section-title">About</h2>
          <p className="section-desc"><a href="/about" className="link">もっと見る</a></p>
        </section>
        {/* Awardsセクション */}
        <section className="section" id="awards-section">
          <h2 className="section-title">Awards</h2>
          <ul style={{ margin: '0.5em 0 0 1.2em', padding: 0, color: '#555', fontSize: '1.05rem' }}>
            {awards.map((award, idx) => (
              <li key={idx}>
                <strong>{award.year} {award.title}</strong> {award.prize}
              </li>
            ))}
          </ul>
        </section>
        {/* Worksセクション */}
        <section className="section">
          <h2 className="section-title">Works</h2>
          <p className="section-desc"><a href="/works" className="link">もっと見る</a></p>
        </section>
        {/* Eventsセクション */}
        <section className="section">
          <h2 className="section-title">Events</h2>
          <p className="section-desc">
            <a href="/events" className="link">イベント参加履歴を見る</a>
          </p>
        </section>
        {/* Skillsセクション */}
        <section className="section" id="skills-section">
          <h2 className="section-title">Skills</h2>
          <p className="section-desc"></p>
        </section>
        {/* Contactセクション */}
        <section className="hero">
          <a
            href="https://forms.gle/mgff1SAhDBBkF4AG8"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Contact
          </a>
        </section>
      </main>
      {/* --- SNSフッター --- */}
      <footer style={{
        width: '100%',
        background: 'rgba(245,240,255,0.85)',
        color: '#444',
        textAlign: 'center',
        padding: '1.2rem 0 0.5rem 0',
        marginTop: '2rem',
        fontSize: '1rem',
        borderTop: '1px solid #e0d6f7',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
          {/* X（旧Twitter） */}
          <a href="https://x.com/tenhou_0126" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{ display: 'inline-block', width: 28, height: 28 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.66 3.84h-3.18l-4.13 5.6-4.13-5.6H3.34l5.98 8.1-6.32 8.66h3.18l4.47-6.12 4.47 6.12h3.18l-6.32-8.66 5.98-8.1z" fill="#444" /></svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/tenhou-Ravenclaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ display: 'inline-block', width: 28, height: 28 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" fill="#444" /></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/彩翔-藤田-595a16352" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ display: 'inline-block', width: 28, height: 28 }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" fill="#444" /></svg>
          </a>
        </div>
        <div style={{ fontSize: '0.95rem', color: '#888' }}>
          &copy; {new Date().getFullYear()} Tenhou Ravenclaw
        </div>
      </footer>
    </>
  );
}
