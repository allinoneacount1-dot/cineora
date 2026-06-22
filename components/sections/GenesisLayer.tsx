"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * GenesisLayer — first civilization layer introduction.
 * Typography-driven scroll reveal.
 * Visual: custom SVG of layered concentric rings (3 stacked, slight tilt)
 * representing the Aurora Layer / Genesis Layer.
 */

export function GenesisLayer() {
  return (
    <section
      id="genesis"
      className="relative w-full py-[clamp(120px,18vh,200px)] overflow-hidden"
    >
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="label text-aurora mb-6">01 / Genesis Layer</div>
            </SectionReveal>

            <SectionReveal delay={120}>
              <h2 className="font-display headline-section text-text max-w-[14ch]">
                Civilization begins with a single layer.
              </h2>
            </SectionReveal>

            <SectionReveal delay={240}>
              <p className="mt-10 text-text-muted text-[18px] md:text-[20px] leading-[1.6] max-w-[52ch] font-light">
                CINEORA begins as one persistent world. It is built to be owned
                by the people who step into it, shaped by the stories they
                tell, and carried forward long after the first chapter
                closes.
              </p>
            </SectionReveal>

            <SectionReveal delay={360}>
              <p className="mt-7 text-text-faint text-[15px] leading-[1.7] max-w-[48ch] font-light">
                The Genesis Layer is the foundation. Persistent, ownable,
                evolvable. Every later world grows from it.
              </p>
            </SectionReveal>

            <SectionReveal delay={480}>
              <dl className="mt-14 grid grid-cols-3 gap-6 max-w-[520px]">
                <Stat label="Worlds" value="01" hint="Genesis" />
                <Stat label="Citizens" value="Open" hint="No gate" />
                <Stat label="Chapters" value="∞" hint="Unending" />
              </dl>
            </SectionReveal>
          </div>

          {/* Right — visual: layered concentric rings */}
          <div className="lg:col-span-5 relative h-[440px] md:h-[520px] flex items-center justify-center">
            <SectionReveal delay={200} y={40}>
              <LayeredRings />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="border-t border-rule pt-4">
      <div className="label text-text-faint mb-2">{label}</div>
      <div className="font-display text-[28px] md:text-[34px] text-text leading-none">
        {value}
      </div>
      <div className="label text-text-faint mt-2">{hint}</div>
    </div>
  );
}

/**
 * LayeredRings — custom SVG of 5 stacked concentric rings.
 * Slight skew + opacity ramp + faint aurora arc.
 * Stroke-only, monoline. No filled areas.
 */
function LayeredRings() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 500"
        className="w-[min(100%,480px)] h-auto"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ring-aura" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00F5FF" stopOpacity="0.0" />
            <stop offset="70%" stopColor="#00F5FF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#00F5FF" stopOpacity="0.6" />
          </radialGradient>
          <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#00F5FF" />
          </linearGradient>
        </defs>

        {/* Subtle aurora glow behind rings */}
        <circle cx="250" cy="250" r="240" fill="url(#ring-aura)" />

        {/* 5 concentric rings, slight perspective via ellipse ratios */}
        {[
          { rx: 230, ry: 230, op: 0.18, sw: 1 },
          { rx: 180, ry: 180, op: 0.25, sw: 1 },
          { rx: 130, ry: 130, op: 0.35, sw: 1.1 },
          { rx: 84, ry: 84, op: 0.55, sw: 1.2 },
          { rx: 42, ry: 42, op: 0.9, sw: 1.4 },
        ].map((r, i) => (
          <ellipse
            key={i}
            cx="250"
            cy="250"
            rx={r.rx}
            ry={r.ry}
            fill="none"
            stroke="#F6F8FF"
            strokeWidth={r.sw}
            strokeOpacity={r.op}
          />
        ))}

        {/* Crosshair markers at cardinal points */}
        {[0, 90, 180, 270].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x = 250 + Math.cos(rad) * 230;
          const y = 250 + Math.sin(rad) * 230;
          return (
            <g key={deg} stroke="#00F5FF" strokeWidth="1" opacity="0.6">
              <line x1={x - 4} y1={y} x2={x + 4} y2={y} />
              <line x1={x} y1={y - 4} x2={x} y2={y + 4} />
            </g>
          );
        })}

        {/* Aurora arc highlight on outer ring */}
        <path
          d="M 70 250 A 180 180 0 0 1 250 70"
          fill="none"
          stroke="url(#arc-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Center pulse */}
        <circle cx="250" cy="250" r="3" fill="#FFD700" />
        <circle
          cx="250"
          cy="250"
          r="10"
          fill="none"
          stroke="#FFD700"
          strokeWidth="0.8"
          opacity="0.5"
        />

        {/* Tick marks around outermost ring */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          const x1 = 250 + Math.cos(a) * 226;
          const y1 = 250 + Math.sin(a) * 226;
          const x2 = 250 + Math.cos(a) * 234;
          const y2 = 250 + Math.sin(a) * 234;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#F6F8FF"
              strokeOpacity={i % 9 === 0 ? 0.6 : 0.2}
              strokeWidth={i % 9 === 0 ? 1 : 0.6}
            />
          );
        })}
      </svg>
    </div>
  );
}
