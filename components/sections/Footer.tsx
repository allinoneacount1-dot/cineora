"use client";

import { LogomarkC } from "@/components/icons/LogomarkC";

const COLUMNS = [
  {
    label: "Civilization",
    items: ["Aurora", "Genesis", "Memory", "Legacy"],
  },
  {
    label: "Engine",
    items: ["Living Cinema", "World Builder", "Character Genesis"],
  },
  {
    label: "Connect",
    items: ["X", "Discord", "GitHub", "Whitepaper"],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-rule bg-bg-deeper">
      <div className="shell py-[clamp(72px,10vh,120px)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <LogomarkC size={22} />
              <span className="font-display text-[18px] tracking-display text-text">
                Cineora
              </span>
            </div>
            <p className="mt-5 text-text-muted text-[15px] leading-[1.65] max-w-[36ch] font-light">
              A living cinematic civilization. Built in public. Carried
              forward by the people who step inside.
            </p>
          </div>

          {/* 3 link columns */}
          {COLUMNS.map((col) => (
            <div key={col.label} className="md:col-span-2">
              <div className="label text-text-faint mb-5">{col.label}</div>
              <ul className="space-y-3.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-text text-[14px] font-light hover:text-aurora transition-colors duration-500"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Spacer column */}
          <div className="md:col-span-1" />
        </div>

        {/* Bottom rule + copyright */}
        <div className="hairline mt-16 mb-7" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="label text-text-faint">
            © 2026 Cineora Foundation. All chapters reserved.
          </p>
          <p className="label text-text-faint">
            Phase 0 · Aurora Genesis · Local prototype
          </p>
        </div>
      </div>
    </footer>
  );
}
