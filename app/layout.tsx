import type { Metadata, Viewport } from "next";
import { Inter, Tenor_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
  display: "swap",
});

const jet = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jet",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CINEORA — A Living Cinematic Civilization",
  description:
    "A living cinematic civilization built to outlive its creators. Where imagination becomes ownership.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "CINEORA — A Living Cinematic Civilization",
    description: "Where imagination becomes ownership.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F2C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${tenor.variable} ${jet.variable}`}
    >
      <body className="grain vignette antialiased">{children}</body>
    </html>
  );
}
