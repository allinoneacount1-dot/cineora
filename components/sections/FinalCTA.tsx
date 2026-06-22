"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { ArrowRight } from "@/components/icons/ArrowRight";

export function FinalCTA() {
  return (
    <section
      id="enter"
      className="relative w-full py-[clamp(160px,24vh,260px)] border-t border-rule overflow-hidden"
    >
      {/* Faint aurora glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,theme(colors.aurora/10),transparent_70%)]"
      />

      <div className="shell relative">
        <div className="max-w-[1100px]">
          <SectionReveal>
            <div className="label text-text-faint mb-8 flex items-center gap-3">
              <span className="block w-8 h-px bg-rule-strong" />
              <span>The civilization is unfinished.</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={140}>
            <h2 className="font-display headline-section text-text max-w-[16ch]">
              Step inside before the first chapter closes.
            </h2>
          </SectionReveal>

          <SectionReveal delay={280}>
            <div className="mt-14 flex items-center gap-7 flex-wrap">
              <a href="#enter" className="btn-cineora group">
                <span>Enter the civilization</span>
                <ArrowRight size={14} className="btn-cineora__arrow" />
              </a>

              <a
                href="/whitepaper"
                className="label text-text-muted hover:text-text transition-colors duration-500"
              >
                Read the genesis brief
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={380}>
            <div className="mt-16 hairline" />
            <p className="mt-8 label text-aurora mb-3">
              Or, wait for the next dispatch
            </p>
            <p className="text-text-muted text-[14px] leading-[1.7] max-w-[44ch] mb-2">
              The civilization grows in chapters. Leave an address and you&apos;ll
              hear when the next one opens.
            </p>
            <WaitlistForm />
          </SectionReveal>

          <SectionReveal delay={520}>
            <p className="mt-20 label text-text-faint">
              CINEORA · Genesis · Phase 0 Prototype
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
