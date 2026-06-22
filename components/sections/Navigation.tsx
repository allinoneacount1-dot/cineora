"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogomarkC } from "@/components/icons/LogomarkC";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { ConnectWallet } from "@/components/wallet/ConnectWallet";

const NAV_LINKS = [
  { label: "Civilization", href: "/#civilization" },
  { label: "Whitepaper", href: "/whitepaper" },
  { label: "Agents", href: "/agents" },
  { label: "Showcase", href: "/demo" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open + Escape key handler
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";

  // Correct active-state logic: anchor links only active when hash matches on home,
  // page links active only when pathname equals href.
  const isActive = (href: string): boolean => {
    if (href.startsWith("/#")) {
      if (!isHome) return false;
      if (typeof window === "undefined") return false;
      return window.location.hash === href.slice(1);
    }
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-700 ease-cineora ${
          scrolled || !isHome
            ? "bg-overlay backdrop-blur-md border-b border-rule transition-colors duration-500"
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
              const active = isActive(l.href);
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

          {/* Right: Home icon + Connect Wallet + Mobile hamburger */}
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

            {/* Mobile menu toggle */}
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 border border-rule text-text-muted hover:text-aurora hover:border-aurora transition-colors duration-500"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Scrim */}
        <div
          className={`absolute inset-0 bg-bg-deeper/85 backdrop-blur-md transition-opacity duration-500 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Slide-in panel from right */}
        <div
          className={`absolute inset-y-0 right-0 w-[min(320px,80vw)] bg-bg-deeper border-l border-rule p-6 flex flex-col shadow-modal transform transition-transform duration-500 ease-cineora ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between mb-10">
            <span className="label text-text-faint">Menu</span>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                triggerRef.current?.focus();
              }}
              className="flex items-center justify-center w-10 h-10 border border-rule text-text-muted hover:text-aurora hover:border-aurora transition-colors duration-500"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`label py-3 transition-colors duration-500 border-b border-rule ${
                    active
                      ? "text-aurora"
                      : "text-text-muted hover:text-aurora"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            {!isHome && (
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="label py-3 transition-colors duration-500 border-b border-rule text-text-muted hover:text-aurora"
              >
                Home
              </Link>
            )}
          </nav>

          <div className="mt-auto pt-8 border-t border-rule">
            <p className="label text-text-faint mb-4">
              Wallet
            </p>
            <ConnectWallet />
          </div>
        </div>
      </div>
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 4 H14 M2 8 H14 M2 12 H14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 2 L12 12 M12 2 L2 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
