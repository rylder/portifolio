import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rylder Oliveira",
  description: "Rylder Oliveira - Software Developer",
  authors: {
    name: "Rylder Oliveira",
    url: "https://www.github.com/rylder",
  },
  keywords: [
    "software developer",
    "developer",
    "android",
    "mobile",
    "kotlin",
    "react",
    "web",
    "frontend",
    "react native",
    "android native",
    "desenvolvedor",
    "desenvolvedor de software",
    "desenvolvedor mobile",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
