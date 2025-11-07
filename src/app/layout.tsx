import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Detect if running in production (GitHub Pages)
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "N i P u N",
  description:
    "Personal portfolio of Nipun Thilakshana — Full-Stack Developer & Designer",
  icons: {
    icon: '/logo.png', // ✅ ensures correct logo path on GitHub Pages
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
