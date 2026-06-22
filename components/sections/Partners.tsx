"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * Partners & Foundation — honest representation.
 *
 * Tier 1 — Auditors & Security: real firms from whitepaper §8.
 * Tier 2 — Foundation / Built on: real, generic tech-stack primitives.
 *
 * NO fake publication logos, NO fake "As featured in" row.
 * Wordmarks are typographic (JetBrains Mono uppercase) — no fabricated SVG
 * marks, no mimicked brand assets.
 */

type Wordmark = {
  name: string;
  /** Optional role tag below the wordmark, e.g. "Security audit" */
  role?: string;
};

const AUDITS: Wordmark[] = [
  { name: "Trail of Bits", role: "Security audit" },
  { name: "OtterSec", role: "Security audit" },
  { name: "Neodyme", role: "Security audit" },
  { name: "Cantina", role: "Bug bounty" },
];

const FOUNDATION: Wordmark[] = [
  { name: "Next.js" },
  { name: "React" },
  { name: "R3F / Three.js" },
  { name: "wagmi / viem" },
  { name: "Lenis" },
  { name: "Tailwind CSS" },
  { name: "framer-motion" },
  { name: "Solidity / Anchor" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative w-full py-section-md border-t border-rule overflow-hidden"
    >
      {/* Very faint background gradient */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[30%] h-[40%] pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,theme(colors.purple/6),transparent_65%)]"
      />

      <div className="shell relative">
        {/* Heading */}
        <div className="max-w-[820px] mb-16 md:mb-20">
          <SectionReveal>
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>05 / Partners &amp; Foundation</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <h2 className="font-display headline-section text-text max-w-[18ch]">
              Partners &amp; Foundation
            </h2>
          </SectionReveal>

          <SectionReveal delay={240}>
            <p className="mt-6 text-text-muted text-[17px] md:text-[19px] leading-[1.6] max-w-[56ch] font-light">
              The auditors holding us accountable and the primitives holding
              us up.
            </p>
          </SectionReveal>
        </div>

        {/* Tier 1 — Audits */}
        <SectionReveal delay={140}>
          <div className="flex items-baseline justify-between gap-6 mb-7">
            <div className="label text-gold">Audits</div>
            <div className="hairline flex-1 max-w-[260px]" />
            <div className="label text-text-faint">Independent</div>
          </div>
          <WordmarkGrid items={AUDITS} accent="gold" />
        </SectionReveal>

        {/* Tier 2 — Foundation */}
        <SectionReveal delay={260}>
          <div className="flex items-baseline justify-between gap-6 mb-7 mt-20">
            <div className="label text-aurora">Foundation</div>
            <div className="hairline flex-1 max-w-[260px]" />
            <div className="label text-text-faint">Built on</div>
          </div>
          <WordmarkGrid items={FOUNDATION} accent="aurora" />
        </SectionReveal>

        {/* Footer line */}
        <SectionReveal delay={360}>
          <p className="mt-20 label text-text-faint max-w-[64ch]">
            Wordmarks shown typographically. Press logos are not displayed
            until coverage exists — we&apos;d rather show nothing than fake it.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function WordmarkGrid({
  items,
  accent,
}: {
  items: Wordmark[];
  accent: "gold" | "aurora";
}) {
  const hoverBorder =
    accent === "gold" ? "hover:border-gold/55" : "hover:border-aurora/55";
  const hoverText = accent === "gold" ? "group-hover:text-gold" : "group-hover:text-aurora";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
      {items.map((item) => (
        <div
          key={item.name}
          className={`group relative bg-bg-elevated min-h-[148px] md:min-h-[168px] flex flex-col items-center justify-center gap-2 px-6 py-8 border border-transparent transition-all duration-500 hover:bg-elevated-hover ${hoverBorder} hover:scale-[1.005]`}
        >
          {/* Wordmark — JetBrains Mono uppercase */}
          <span
            className={`font-mono text-[14px] md:text-[15px] tracking-[0.16em] uppercase text-text text-center transition-colors duration-500 ${hoverText}`}
          >
            {item.name}
          </span>
          {item.role && (
            <span className="label text-text-faint text-center">
              {item.role}
            </span>
          )}
          {/* Subtle accent corner — only on hover */}
          <span
            aria-hidden
            className={`pointer-events-none absolute top-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
              accent === "gold" ? "bg-gold" : "bg-aurora"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
