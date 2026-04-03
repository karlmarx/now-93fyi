import type { Metadata } from "next";
import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Now — Karl",
  description: "What I'm working on, building, and thinking about right now.",
  openGraph: {
    title: "Now — Karl",
    description: "What I'm working on, building, and thinking about right now.",
    url: "https://now.93.fyi",
    siteName: "now.93.fyi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${newsreader.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
