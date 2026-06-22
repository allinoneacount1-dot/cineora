"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * Manifesto — cinematic fragment typography.
 * Three statements separated by hairlines, large display type.
 * Editorial pacing, no card grid, no scroll-jacking.
 */

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="relative w-full py-[clamp(140px,22vh,260px)] overflow-hidden"
    >
      <div className="shell">
        {/* Eyebrow */}
        <SectionReveal>
          <div className="label text-aurora mb-12 flex items-center gap-3">
            <span className="block w-8 h-px bg-aurora" />
            <span>Manifesto · The thesis</span>
          </div>
        </SectionReveal>

        {/* Statement 1 */}
        <SectionReveal delay={120}>
          <h2 className="font-display headline-section text-text max-w-[22ch]">
            Abundance has killed meaning.
          </h2>
        </SectionReveal>

        <SectionReveal delay={240}>
          <p className="mt-8 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[52ch] font-light">
            AI can generate a thousand films in an afternoon. It can compose
            symphonies, design characters, light entire worlds. The future
            does not need more content. The future needs worlds that{" "}
            <span className="text-text">outlive their creators</span>.
          </p>
        </SectionReveal>

        <div className="hairline mt-[clamp(64px,10vh,120px)] mb-[clamp(64px,10vh,120px)] max-w-[820px]" />

        {/* Statement 2 */}
        <SectionReveal delay={120}>
          <h2 className="font-display headline-section text-text max-w-[22ch]">
            A cinematic asset should not behave like a file.
          </h2>
        </SectionReveal>

        <SectionReveal delay={240}>
          <p className="mt-8 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[52ch] font-light">
            It should behave like a{" "}
            <span className="text-text">living organism</span> — persistent,
            ownable, evolvable, collaborative, economically alive. Stories
            should grow into civilizations. Civilizations should pass into
            inheritance.
          </p>
        </SectionReveal>

        <div className="hairline mt-[clamp(64px,10vh,120px)] mb-[clamp(64px,10vh,120px)] max-w-[820px]" />

        {/* Statement 3 — final, golden */}
        <SectionReveal delay={120}>
          <h2 className="font-display headline-section text-text max-w-[24ch]">
            <span className="text-gold">Imagination becomes ownership.</span>
            <br />
            Ownership becomes legacy.
            <br />
            Legacy becomes immortality.
          </h2>
        </SectionReveal>

        <SectionReveal delay={360}>
          <p className="mt-12 text-text-faint text-[15px] leading-[1.7] max-w-[48ch] font-light">
            Cineora is the protocol. The first layer of a new civilization,
            where stories are not consumed — they are inherited.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}