"use client";

import { useEffect, useState } from "react";
import { LogomarkC } from "@/components/icons/LogomarkC";

const NAV_LINKS = [
  { label: "Civilization", href: "#civilization" },
  { label: "Engine", href: "#engine" },
  { label: "Token", href: "#token" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ease-cineora ${
        scrolled
          ? "backdrop-blur-0 bg-[rgba(10,15,44,0.55)] border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between h-[68px]">
        <a href="#top" className="flex items-center gap-2.5 group">
          <LogomarkC size={22} />
          <span className="font-display text-[17px] tracking-display text-text">
            Cineora
          </span>
          <span className="label text-text-faint hidden sm:inline-block ml-1">
            Genesis
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label text-text-muted hover:text-aurora transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#enter" className="btn-ghost">
          Enter
        </a>
      </div>
    </header>
  );
}
