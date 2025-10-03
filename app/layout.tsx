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

export const metadata: Metadata = {
  title: "Tenhou's Portfolio",
  description: "",
  icons: {
    icon: "/tenhouPortfolioIcon.png", // public配下のwebアイコンを指定
  },
  openGraph: {
    title: "Tenhou's Portfolio",
    description: "ぜひご覧ください！",
    type: "website",
    images: [
      {
        url: "/tenhouPortfolioIcon.png",
        width: 1024,
        height: 1024,
        alt: "Tenhou's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenhou's Portfolio",
    description: "ぜひご覧ください！",
    images: ["/tenhouPortfolioIcon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
