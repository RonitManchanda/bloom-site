import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloom — The match that moves you forward",
  description:
    "Bloom is a mentorship matchmaking platform inspired by dating apps: mutual opt-in, market relevance, and high trust.",
  openGraph: {
    title: "Bloom",
    description: "The match that moves you forward.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-bloom-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}
