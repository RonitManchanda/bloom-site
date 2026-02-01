import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bloom — The match that moves you forward",
  description:
    "Bloom is a mentorship matchmaking platform built on mutual opt-in, market relevance, and high trust. Find real career-changing relationships.",
  keywords: [
    "mentorship",
    "career growth",
    "professional development",
    "mentor matching",
    "career guidance",
  ],
  authors: [{ name: "Bloom" }],
  openGraph: {
    title: "Bloom — The match that moves you forward",
    description:
      "Mentorship matchmaking built on mutual opt-in and trust. Find real career-changing relationships.",
    type: "website",
    locale: "en_US",
    siteName: "Bloom",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom — The match that moves you forward",
    description: "Mentorship matchmaking built on mutual opt-in and trust.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#FFFBF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen bg-[--color-cream] text-[--color-ink] antialiased">
        {children}
      </body>
    </html>
  );
}
