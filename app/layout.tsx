import type { Metadata } from "next";
import { Geist, Geist_Mono, Varela_Round, Great_Vibes, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import GlobalNav from "./GlobalNav";
import OwlSplash from "./components/OwlSplash";
import ClickEffect from "./components/ClickEffect";

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
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const getBaseUrl = () => {
  if (process.env.VERCEL_ENV === 'production') return 'https://ten-hou.com';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: "Tenhou's Portfolio",
  description: "ぜひご覧ください！",
  icons: {
    icon: "/tenhouPortfolioIcon.png", // public配下のwebアイコンを指定
  },
  openGraph: {
    title: "Tenhou's Portfolio",
    description: "ぜひご覧ください！",
    type: "website",
    url: '/',
    siteName: "Tenhou's Portfolio",
    images: [
      {
        url: '/tenhouPortfolioIcon.png',
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
    images: ['/tenhouPortfolioIcon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} ${greatVibes.variable} ${notoSansJp.variable} antialiased`}
      >
        <OwlSplash />
        <ClickEffect />
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
