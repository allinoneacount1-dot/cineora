import type { Metadata, Viewport } from "next";
import { Inter, Tenor_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppWalletProvider } from "@/components/wallet/AppWalletProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navigation } from "@/components/sections/Navigation";

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
  metadataBase: new URL("https://cineora-mocha.vercel.app"),
  openGraph: {
    title: "CINEORA — A Living Cinematic Civilization",
    description: "Where imagination becomes ownership.",
    type: "website",
    images: ["/icon.svg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
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
      <body className="grain vignette antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgress />
        <AppWalletProvider>
          <Navigation />
          {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}