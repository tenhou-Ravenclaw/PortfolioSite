import Link from "next/link";
import OwlGlyph from "./OwlGlyph";

type HeroSectionProps = {
  featuredBadges: string[];
};

const accountLinks = [
  { label: "Portfolio", href: "/", caption: "tenhou.journey" },
  { label: "GitHub", href: "https://github.com/tenhou-Ravenclaw", caption: "@tenhou" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/彩翔-藤田-595a16352", caption: "Fujita Ayato" },
  { label: "X", href: "https://x.com/tenhou_0126", caption: "@tenhou_0126" },
];

const HeroSection = ({ featuredBadges }: HeroSectionProps) => {
  return (
    <section className="hero-v2">
      <div className="hero-v2__visual">
        <OwlGlyph />
        <span className="halftone-band" aria-hidden="true" />
      </div>
      <div className="hero-v2__info">
        <span className="hero-v2__label">Portfolio</span>
        <div className="hero-v2__name-jp">藤田 彩翔</div>
        <div className="hero-v2__name-en">Ayato Fujita</div>
        <div className="hero-v2__role">Soft / Hard Engineer ・ Product Manager</div>
        <div className="hero-v2__badges">
          {featuredBadges.map((badge) => (
            <span className="hero-v2__badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <p className="hero-v2__quote">
          Do it with ease, without noise, and with elegance.  
          モダンなプロダクトとヒト・モノづくりを繋ぐハイブリッドエンジニアです。
        </p>
        <div className="hero-v2__accounts">
          {accountLinks.map((account) => (
            <Link key={account.label} href={account.href} target="_blank" className="qr-badge">
              <span className="qr-badge__label">{account.label}</span>
              <div className="qr-badge__code" aria-hidden="true" />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                {account.caption}
              </span>
            </Link>
          ))}
        </div>
        <div className="hero-v2__contact">
          <Link
            href="https://forms.gle/mgff1SAhDBBkF4AG8"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-v2__cta"
          >
            Contact
          </Link>
          <div style={{ fontSize: "0.9rem", color: "var(--color-ink)", fontWeight: 600 }}>
            近畿大学情報学部 実世界コンピューティングコース / Osaka, Japan
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

