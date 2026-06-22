"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * SevenLayers — editorial index of the seven civilization layers.
 * Each layer: number + name + tagline + custom SVG glyph.
 * Full-width editorial rows (not card grid), hairline dividers.
 * Inspired by Somnus v2 Night Watch pattern (custom SVG per entity).
 */

const LAYERS = [
  {
    n: "01",
    name: "Aurora",
    tagline: "Where the civilization becomes visible.",
    body: "The first light. The layer that renders every world, every scene, every memory into shared perception. A protocol for visual presence that never dims.",
    glyph: "aurora",
  },
  {
    n: "02",
    name: "Genesis",
    tagline: "Where new worlds are born.",
    body: "Genesis is the forge. Every civilization starts here — a single persistent world, owned by the people who step into it, shaped by the stories they tell.",
    glyph: "genesis",
  },
  {
    n: "03",
    name: "Memory",
    tagline: "Where stories are preserved without decay.",
    body: "Memory is the chain that remembers. Every chapter, every scene, every agent decision — indexed, retrievable, inheritable across generations of citizens.",
    glyph: "memory",
  },
  {
    n: "04",
    name: "Legacy",
    tagline: "Where inheritance is encoded into the protocol.",
    body: "Legacy answers a single question: what persists after the author leaves? Stories can be passed. Worlds can be inherited. Cinematic civilizations can outlive their creators.",
    glyph: "legacy",
  },
  {
    n: "05",
    name: "Cinema",
    tagline: "Where experiences are lived, not streamed.",
    body: "Cinema is the venue. Living scenes that change with the audience. Worlds that respond to the people inside them. The cinema is the civilization in motion.",
    glyph: "cinema",
  },
  {
    n: "06",
    name: "Governance",
    tagline: "Where communities decide what the world becomes.",
    body: "Governance is the constitution. A Creator DAO where citizens vote on canon, fork on disagreement, and co-author the laws of their own civilization.",
    glyph: "governance",
  },
  {
    n: "07",
    name: "Evolution",
    tagline: "Where the system adapts to its own future.",
    body: "Evolution is the meta-layer. Agents that learn, economies that rebalance, narratives that grow new branches. The civilization that improves by being inhabited.",
    glyph: "evolution",
  },
];

export function SevenLayers() {
  return (
    <section
      id="layers"
      className="relative w-full py-[clamp(120px,18vh,200px)] overflow-hidden"
    >
      <div className="shell">
        {/* Header */}
        <SectionReveal>
          <div className="label text-aurora mb-6 flex items-center gap-3">
            <span className="block w-8 h-px bg-aurora" />
            <span>The seven layers</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={120}>
          <h2 className="font-display headline-section text-text max-w-[18ch]">
            A civilization, rendered.
          </h2>
        </SectionReveal>

        <SectionReveal delay={240}>
          <p className="mt-8 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[52ch] font-light">
            Every layer carries one essential function. Together they form a
            persistent, ownable, evolving digital civilization — built to be
            inhabited, not consumed.
          </p>
        </SectionReveal>

        {/* Layer rows */}
        <div className="mt-[clamp(72px,12vh,140px)]">
          {LAYERS.map((layer, i) => (
            <SectionReveal key={layer.n} delay={i * 60}>
              <LayerRow layer={layer} />
              {i < LAYERS.length - 1 && (
                <div className="hairline mt-[clamp(48px,8vh,96px)] mb-[clamp(48px,8vh,96px)] max-w-[1100px]" />
              )}
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerRow({
  layer,
}: {
  layer: { n: string; name: string; tagline: string; body: string; glyph: string };
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
      {/* Glyph + number */}
      <div className="lg:col-span-3">
        <div className="flex items-start gap-5">
          <LayerGlyph kind={layer.glyph} />
          <div>
            <div className="label text-text-faint">{layer.n}</div>
            <div className="font-display text-[28px] md:text-[34px] text-text leading-none mt-3">
              {layer.name}
            </div>
          </div>
        </div>
      </div>

      {/* Tagline + body */}
      <div className="lg:col-span-9">
        <h3 className="font-display text-[22px] md:text-[26px] text-text leading-[1.25] max-w-[28ch]">
          {layer.tagline}
        </h3>
        <p className="mt-5 text-text-muted text-[16px] md:text-[17px] leading-[1.65] max-w-[58ch] font-light">
          {layer.body}
        </p>
      </div>
    </div>
  );
}

/**
 * LayerGlyph — minimal custom SVG per layer.
 * Monoline strokes, aurora + gold accent. No Lucide.
 */
function LayerGlyph({ kind }: { kind: string }) {
  const STROKE = "#F6F8FF";
  const ACCENT = "#00F5FF";
  const GOLD = "#FFD700";

  switch (kind) {
    case "aurora":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <path
            d="M 6 30 Q 14 10 24 22 T 42 30"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 6 36 Q 14 18 24 28 T 42 36"
            fill="none"
            stroke={ACCENT}
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle cx="24" cy="14" r="1.4" fill={GOLD} />
        </svg>
      );
    case "genesis":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke={STROKE}
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <circle
            cx="24"
            cy="24"
            r="12"
            fill="none"
            stroke={STROKE}
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <circle cx="24" cy="24" r="6" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="24" cy="24" r="1.5" fill={GOLD} />
        </svg>
      );
    case "memory":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          {[12, 18, 24, 30, 36].map((r) => (
            <circle
              key={r}
              cx="24"
              cy="24"
              r={r * 0.5}
              fill="none"
              stroke={STROKE}
              strokeOpacity={0.15 + (r - 12) * 0.05}
              strokeWidth="1"
            />
          ))}
          <path d="M 12 24 H 36" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" />
          <path d="M 24 12 V 36" stroke={ACCENT} strokeOpacity="0.5" strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "legacy":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <path
            d="M 24 8 V 40"
            stroke={STROKE}
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <circle cx="24" cy="14" r="3" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <path
            d="M 18 26 H 30 M 18 30 H 30 M 18 34 H 30"
            stroke={STROKE}
            strokeOpacity="0.5"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path d="M 20 40 L 24 36 L 28 40" fill="none" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "cinema":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <rect
            x="6"
            y="14"
            width="36"
            height="22"
            fill="none"
            stroke={STROKE}
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <path d="M 24 18 L 30 25 L 24 32 Z" fill={ACCENT} fillOpacity="0.4" />
          {[6, 14, 22, 30, 38].map((x) => (
            <line key={x} x1={x} y1="10" x2={x} y2="14" stroke={STROKE} strokeOpacity="0.3" strokeWidth="1" />
          ))}
          {[6, 14, 22, 30, 38].map((x) => (
            <line key={`b${x}`} x1={x} y1="36" x2={x} y2="40" stroke={STROKE} strokeOpacity="0.3" strokeWidth="1" />
          ))}
        </svg>
      );
    case "governance":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <polygon
            points="24,8 38,16 38,32 24,40 10,32 10,16"
            fill="none"
            stroke={STROKE}
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <polygon
            points="24,16 32,20 32,28 24,32 16,28 16,20"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.2"
          />
          <circle cx="24" cy="24" r="1.5" fill={GOLD} />
        </svg>
      );
    case "evolution":
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <path
            d="M 10 38 Q 18 30 18 22 Q 18 14 26 12 Q 34 10 38 18"
            fill="none"
            stroke={STROKE}
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M 10 38 Q 18 30 18 22 Q 18 14 26 12 Q 34 10 38 18"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="2 4"
          />
          <circle cx="38" cy="18" r="2" fill={GOLD} />
          <path d="M 36 16 L 38 14 L 40 16" fill="none" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}