import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
});

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel CODJA — Frontend Developer",
  description: "21yo Frontend Developer from Benin 🇧🇯 building fast, modern web applications with React, Next.js and TypeScript.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Benin", "Joel CODJA", "Web Developer"],
  authors: [{ name: "Joel CODJA" }],
  creator: "Joel CODJA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.vercel.app",
    title: "Joel CODJA — Frontend Developer",
    description: "21yo Frontend Developer from Benin 🇧🇯 building fast, modern web applications with React, Next.js and TypeScript.",
    siteName: "Joel CODJA Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Joel CODJA — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel CODJA — Frontend Developer",
    description: "21yo Frontend Developer from Benin 🇧🇯 building fast, modern web applications with React, Next.js and TypeScript.",
    images: ["/me.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSerif.variable} ${dmMono.variable} font-sans antialiased bg-bg text-[#f0ede8] pb-20`}
      >
        {children}
      </body>
    </html>
  );
}