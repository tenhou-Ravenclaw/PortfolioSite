export default function Footer() {
  return (
    <footer className="neo-footer">
      <div className="neo-footer__links">
        <a href="https://x.com/tenhou_0126" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
          X
        </a>
        <a href="https://github.com/tenhou-Ravenclaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/彩翔-藤田-595a16352"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LINKEDIN
        </a>
      </div>
      <div className="neo-footer__copy">&copy; {new Date().getFullYear()} Tenhou Ravenclaw</div>
    </footer>
  );
}
