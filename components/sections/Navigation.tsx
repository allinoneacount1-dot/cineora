"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogomarkC } from "@/components/icons/LogomarkC";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { ConnectWallet } from "@/components/wallet/ConnectWallet";

const NAV_LINKS = [
  { label: "Civilization", href: "/#civilization" },
  { label: "Whitepaper", href: "/whitepaper" },
  { label: "Agents", href: "/agents" },
  { label: "Demo", href: "/demo" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ease-cineora ${
        scrolled || !isHome
          ? "backdrop-blur-0 bg-[rgba(10,15,44,0.7)] border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between h-[68px]">
        {/* Brand mark — Home link */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogomarkC size={22} />
          <span className="font-display text-[17px] tracking-display text-text">
            Cineora
          </span>
          <span className="label text-text-faint hidden sm:inline-block ml-1">
            Genesis
          </span>
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) => {
            const active =
              (l.href.startsWith("/#") && isHome) || l.href === pathname;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`label transition-colors duration-500 ${
                  active
                    ? "text-aurora"
                    : "text-text-muted hover:text-aurora"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Home icon + Connect Wallet */}
        <div className="flex items-center gap-3">
          {!isHome && (
            <Link
              href="/"
              aria-label="Home"
              className="hidden md:flex items-center justify-center w-9 h-9 border border-rule text-text-muted hover:text-aurora hover:border-aurora transition-colors duration-500"
            >
              <HomeIcon size={14} />
            </Link>
          )}
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}