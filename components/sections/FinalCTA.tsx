"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight } from "@/components/icons/ArrowRight";

export function FinalCTA() {
  return (
    <section
      id="enter"
      className="relative w-full py-[clamp(160px,24vh,260px)] border-t border-rule overflow-hidden"
    >
      {/* Faint aurora glow at top */}
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.10), transparent 70%)",
        }}
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
                href="#whitepaper"
                className="label text-text-muted hover:text-text transition-colors"
              >
                Read the genesis brief
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={420}>
            <p className="mt-16 label text-text-faint">
              CINEORA · Genesis · Phase 0 Prototype
            </p>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
