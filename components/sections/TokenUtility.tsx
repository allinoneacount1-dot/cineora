"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import {
  IconGovernance,
  IconAccess,
  IconSpiral,
  IconNodes,
} from "@/components/icons/TokenIcons";

/**
 * TokenUtility — 4 utility blocks for $CINE.
 * NO investment framing. NO fake stats. NO market cap. NO supply number.
 * Each block: monoline SVG icon + title + 1-line description.
 *
 * Layout: NOT a uniform 3-4-card grid. Asymmetric layout:
 *   - Item 1 (Governance) full-width lead
 *   - Items 2-4 in a 3-column grid below
 * Different radius per block (none, 2, none, 2).
 */

export function TokenUtility() {
  return (
    <section
      id="token"
      className="relative w-full py-[clamp(120px,18vh,200px)] border-t border-rule"
    >
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="label text-gold mb-6">02 / $CINE Token</div>
            </SectionReveal>
            <SectionReveal delay={120}>
              <h2 className="font-display headline-section text-text max-w-[14ch]">
                What $CINE does.
              </h2>
            </SectionReveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <SectionReveal delay={220}>
              <p className="text-text-muted text-[17px] leading-[1.65] font-light mt-2 lg:mt-12">
                $CINE is the working token of the civilization. It governs
                how the world is shaped and who gets to step inside.
              </p>
            </SectionReveal>
          </div>
        </div>

        {/* Lead block — Governance */}
        <SectionReveal delay={100}>
          <UtilityBlock
            tag="01"
            title="Governance"
            description="Holders direct how the civilization evolves. New worlds, characters, and chapters begin where the community chooses."
            icon={<IconGovernance className="w-12 h-12" />}
            variant="lead"
          />
        </SectionReveal>

        {/* 3-column grid — Access / Agent Evolution / Protocol Participation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule mt-px">
          <SectionReveal delay={200}>
            <UtilityBlock
              tag="02"
              title="Access"
              description="Hold $CINE to enter the Genesis Layer and the worlds that grow from it. The threshold is low; the door stays open."
              icon={<IconAccess className="w-12 h-12" />}
              variant="cell"
            />
          </SectionReveal>

          <SectionReveal delay={280}>
            <UtilityBlock
              tag="03"
              title="Agent Evolution"
              description="$CINE powers the agents that live inside CINEORA. Characters learn, remember, and grow as the world does."
              icon={<IconSpiral className="w-12 h-12" />}
              variant="cell-mid"
            />
          </SectionReveal>

          <SectionReveal delay={360}>
            <UtilityBlock
              tag="04"
              title="Protocol Participation"
              description="Take part in the protocol that runs beneath the cinema. Builders, archivists, and storytellers shape it together."
              icon={<IconNodes className="w-12 h-12" />}
              variant="cell-end"
            />
          </SectionReveal>
        </div>

        <SectionReveal delay={500}>
          <p className="mt-10 label text-text-faint">
            Utility in plain language. No supply number is published here on
            purpose.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function UtilityBlock({
  tag,
  title,
  description,
  icon,
  variant,
}: {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "lead" | "cell" | "cell-mid" | "cell-end";
}) {
  // Intentional radius asymmetry — anti-uniform-radius rule
  const radiusMap: Record<string, string> = {
    lead: "rounded-none",
    cell: "rounded-none",
    "cell-mid": "rounded-[2px]",
    "cell-end": "rounded-none",
  };
  const radius = radiusMap[variant];

  const padding =
    variant === "lead"
      ? "p-10 md:p-14"
      : "p-8 md:p-10";

  const minHeight = variant === "lead" ? "min-h-[260px]" : "min-h-[280px]";

  return (
    <article
      className={`group relative bg-bg-elevated ${padding} ${minHeight} ${radius} flex flex-col justify-between transition-colors duration-700 hover:bg-[#101642]`}
    >
      <div className="flex items-start justify-between mb-10">
        <div className="text-text-muted transition-colors duration-500 group-hover:text-gold">
          {icon}
        </div>
        <span className="label text-text-faint">{tag}</span>
      </div>

      <div>
        <h3 className="font-display text-[26px] md:text-[30px] text-text leading-tight">
          {title}
        </h3>
        <p className="mt-4 text-text-muted text-[15px] leading-[1.65] font-light max-w-[36ch]">
          {description}
        </p>
      </div>

      {/* hover accent — purple hairline from bottom, very subtle */}
      <span
        className="absolute inset-x-10 bottom-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: "rgba(155, 77, 255, 0.6)" }}
      />
    </article>
  );
}
