import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round, Great_Vibes, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import GlobalNav from "./GlobalNav";
import OwlSplash from "./components/OwlSplash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const varelaRound = Varela_Round({
  variable: "--font-varela",
  weight: "400",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin", "latin-ext", "japanese"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tenhou's Portfolio",
  description: "ぜひご覧ください！",
  icons: {
    icon: "/tenhouPortfolioIcon.png", // public配下のwebアイコンを指定
  },
  openGraph: {
    title: "Tenhou's Portfolio",
    description: "ぜひご覧ください！",
    type: "website",
    url: process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000',
    siteName: "Tenhou's Portfolio",
    images: [
      {
        url: process.env.NODE_ENV === 'production' ? 'https://your-domain.com/tenhouPortfolioIcon.png' : 'http://localhost:3000/tenhouPortfolioIcon.png',
        width: 1024,
        height: 1024,
        alt: "Tenhou's Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenhou's Portfolio",
    description: "ぜひご覧ください！",
    images: [process.env.NODE_ENV === 'production' ? 'https://your-domain.com/tenhouPortfolioIcon.png' : 'http://localhost:3000/tenhouPortfolioIcon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* LINE対応のための追加メタタグ */}
        <meta property="og:title" content="Tenhou's Portfolio" />
        <meta property="og:description" content="ぜひご覧ください！" />
        <meta property="og:image" content={process.env.NODE_ENV === 'production' ? 'https://your-domain.com/tenhouPortfolioIcon.png' : 'http://localhost:3000/tenhouPortfolioIcon.png'} />
        <meta property="og:url" content={process.env.NODE_ENV === 'production' ? 'https://your-domain.com' : 'http://localhost:3000'} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tenhou's Portfolio" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card (念のため) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenhou's Portfolio" />
        <meta name="twitter:description" content="ぜひご覧ください！" />
        <meta name="twitter:image" content={process.env.NODE_ENV === 'production' ? 'https://your-domain.com/tenhouPortfolioIcon.png' : 'http://localhost:3000/tenhouPortfolioIcon.png'} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} ${greatVibes.variable} ${notoSansJp.variable} antialiased`}
      >
        <OwlSplash />
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
