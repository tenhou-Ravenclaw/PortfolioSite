import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNav from "./GlobalNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

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
    url: siteUrl,
    siteName: "Tenhou's Portfolio",
    images: [
      {
        url: `${siteUrl}/tenhouPortfolioIcon.png`,
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
    images: [`${siteUrl}/tenhouPortfolioIcon.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageUrl = `${siteUrl}/tenhouPortfolioIcon.png`;
  
  return (
    <html lang="ja">
      <head>
        {/* LINE対応のための追加メタタグ */}
        <meta property="og:title" content="Tenhou's Portfolio" />
        <meta property="og:description" content="ぜひご覧ください！" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tenhou's Portfolio" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card (念のため) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenhou's Portfolio" />
        <meta name="twitter:description" content="ぜひご覧ください！" />
        <meta name="twitter:image" content={imageUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
