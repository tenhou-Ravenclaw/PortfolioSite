import Link from "next/link";
import Image from "next/image";

type HeroSectionProps = {
  featuredBadges: string[];
};

type AccountLink = {
  label: string;
  href: string;
  caption: string;
  localIcon?: string;
  faviconDomain?: string;
  svgIcon?: "mail";
  external?: boolean;
};

const MailIcon = () => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    style={{ display: "block" }}
    className="hero-contact-icon"
  >
    <defs>
      <linearGradient id="hero-mail-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary, #38bdf8)" />
        <stop offset="100%" stopColor="var(--color-accent, #6366f1)" />
      </linearGradient>
    </defs>
    <path
      d="M3 8l9 6 9-6v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"
      fill="url(#hero-mail-gradient)"
      fillOpacity="0.2"
      stroke="url(#hero-mail-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 8l9-5 9 5"
      fill="none"
      stroke="url(#hero-mail-gradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const accountLinks: AccountLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/彩翔-藤田-595a16352",
    caption: "Fujita Ayato",
    faviconDomain: "linkedin.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/tenhou-Ravenclaw",
    caption: "@tenhou",
    faviconDomain: "github.com",
  },
  {
    label: "X",
    href: "https://x.com/tenhou_0126",
    caption: "@tenhou_0126",
    faviconDomain: "x.com",
  },
  {
    label: "Contact me",
    href: "https://forms.gle/mgff1SAhDBBkF4AG8",
    caption: "お問い合わせ",
    svgIcon: "mail",
    external: true,
  },
];

const resolveAccountIconSrc = (account: AccountLink): string | null => {
  if (account.localIcon) return account.localIcon;
  if (account.faviconDomain) {
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
        <div className="hero-v2__role">Soft / Hard Engineer <br /> Product Manager</div>
        <div className="hero-v2__badges">
          {featuredBadges.map((badge) => (
            <span className="hero-v2__badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
        <p className="hero-v2__quote">
          Do it with ease, without noise, and with elegance.  <br />
          モダンなプロダクトとヒト・モノづくりを繋ぐハイブリッドエンジニアです。
        </p>
        <div className="hero-v2__accounts">
          {accountLinks.map((account) => {
            const iconSrc = resolveAccountIconSrc(account);
            const isSvgIcon = account.svgIcon === "mail";
            return (
              <Link
                key={account.label}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                className="qr-badge"
                aria-label={account.external ? `${account.label}（別サイトで開きます）` : undefined}
              >
                <span className="qr-badge__label">{account.label}</span>
                <div className="qr-badge__code" aria-hidden="true">
                  {isSvgIcon && <MailIcon />}
                  {!isSvgIcon && iconSrc && (
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
                    color: "var(--color-ink)",
                  }}
                >
                  {account.caption}
                </span>
                {account.external && (
                  <span className="qr-badge__external-note">外部サイトで開きます</span>
                )}
              </Link>
            );
          })}
        </div>
        <div className="hero-v2__contact">
          <div style={{ fontSize: "0.9rem", color: "var(--color-ink)", fontWeight: 600 }}>
            近畿大学情報学部 実世界コンピューティングコース / Osaka, Japan
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

