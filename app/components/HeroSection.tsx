import Link from "next/link";
import Image from "next/image";

type HeroSectionProps = {
  featuredBadges: string[];
};

type AccountLink = {
  label: string;
  href: string;
  caption: string;
  // ポートフォリオ用のローカルアイコン
  localIcon?: string;
  // それ以外はドメインから自動取得
  faviconDomain?: string;
};

const accountLinks: AccountLink[] = [
  {
    label: "Portfolio",
    href: "/",
    caption: "tenhou.journey",
    localIcon: "/tenhouPortfolioIcon.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/tenhou-Ravenclaw",
    caption: "@tenhou",
    faviconDomain: "github.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/彩翔-藤田-595a16352",
    caption: "Fujita Ayato",
    faviconDomain: "linkedin.com",
  },
  {
    label: "X",
    href: "https://x.com/tenhou_0126",
    caption: "@tenhou_0126",
    faviconDomain: "x.com",
  },
];

const resolveAccountIconSrc = (account: AccountLink) => {
  if (account.localIcon) return account.localIcon;
  if (account.faviconDomain) {
    // Google の favicon API から取得
    return `https://www.google.com/s2/favicons?sz=64&domain=${account.faviconDomain}`;
  }
  return null;
};

const HeroSection = ({ featuredBadges }: HeroSectionProps) => {
  return (
    <section className="hero-v2">
      <div className="hero-v2__visual">
        <Image
          src="/icon.JPG"
          alt="Tenhou icon"
          fill
          priority
          sizes="(min-width: 960px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
        />
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
          {accountLinks.map((account) => {
            const iconSrc = resolveAccountIconSrc(account);
            return (
              <Link key={account.label} href={account.href} target="_blank" className="qr-badge">
                <span className="qr-badge__label">{account.label}</span>
                <div className="qr-badge__code" aria-hidden="true">
                  {iconSrc && (
                    <Image
                      src={iconSrc}
                      alt={`${account.label} logo`}
                      width={48}
                      height={48}
                      style={{ width: 48, height: 48, display: "block" }}
                    />
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "rgba(15, 23, 42, 0.95)",
                  }}
                >
                  {account.caption}
                </span>
              </Link>
            );
          })}
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

