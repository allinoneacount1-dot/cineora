"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * Roadmap — vertical timeline of the four protocol phases.
 * Source: whitepaper/content/09-roadmap.md
 *
 * Layout:
 *   - Heading + subtitle
 *   - Vertical timeline with 4 phase cards
 *   - Alternating left/right on desktop (md+), all-left on mobile
 *   - Aurora-glow vertical line through timeline center
 *   - Phase 1 = active (gold border accent)
 *   - Phases 2–3 = upcoming (default)
 *   - Phase 4 = distant future (muted, faint)
 *   - Top 3 deliverables shown, full list expandable via framer-motion
 */

type Phase = {
  quarter: string;
  name: string;
  objective: string;
  deliverables: string[];
  exitCriterion: string;
  /** "active" | "upcoming" | "future" */
  state: "active" | "upcoming" | "future";
};

const PHASES: Phase[] = [
  {
    quarter: "Q3–Q4 2026",
    name: "Phase 1 — Genesis",
    objective:
      "Ship a working on-chain civilization with one canonical world.",
    deliverables: [
      "Anchor program set deployed to mainnet (cineora-core, cineora-living-scene, cineora-royalty, cineora-legacy)",
      "Living Scene NFT spec v1 with mutable on-chain state",
      "Aurora Engine v1 rendering at 60 fps on reference hardware",
      "Three-agent mesh (Director, Screenwriter, Cinematographer)",
      "Closed Creator Council of 50 founding creators",
      "Three independent audits (Trail of Bits, OtterSec, Neodyme)",
    ],
    exitCriterion:
      "50 active worlds, 10,000 verified wallet holders, zero SEV-1 incidents over 90 days.",
    state: "active",
  },
  {
    quarter: "2027",
    name: "Phase 2 — Aurora",
    objective: "Full agent mesh and the Memory Chain.",
    deliverables: [
      "All sixteen agents operational with bounded autonomy budgets",
      "Memory Chain v1 with content-addressed append-only logs",
      "World Builder public release — instantiate worlds without code",
      "Reputation Token contract and decay schedule",
      "World Licensing Network v1 — inter-world treaty protocol",
    ],
    exitCriterion:
      "5,000 active worlds, 250,000 MAU, 100+ licensed derivatives.",
    state: "upcoming",
  },
  {
    quarter: "2028",
    name: "Phase 3 — Cinema",
    objective: "Distribution at population scale.",
    deliverables: [
      "Virtual Cinema rooms (sync + async viewing)",
      "Cinematic Commerce with two major payment rails",
      "Mobile-first R3F viewer (iOS, Android) with WebGPU",
      "Civilization Analytics dashboard (privacy-preserving)",
      "First academic partnership for peer-reviewed study",
    ],
    exitCriterion:
      "1,000,000 MAU, 50,000 creators, USD 25M annual protocol revenue.",
    state: "upcoming",
  },
  {
    quarter: "2029+",
    name: "Phase 4 — Civilization",
    objective: "Cross-reality reach and story inheritance.",
    deliverables: [
      "Cross-Reality Portal reference implementation (browser ↔ headset ↔ spatial)",
      "Story Inheritance System v1 — dormancy detection, custodian rotation",
      "Civilization Pool fully funded by Evolution proposals",
      "First Legacy Constitutions tested across 36-month creator absence",
    ],
    exitCriterion:
      "10+ civilizations operating continuously for 36+ months under original Legacy Constitution.",
    state: "future",
  },
];

export function Roadmap() {
  return (
    <section
      id="roadmap"
      className="relative w-full py-section-md border-t border-rule overflow-hidden"
    >
      {/* Faint aurora glow behind timeline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[18%] h-[60%] pointer-events-none bg-[radial-gradient(ellipse_at_50%_30%,theme(colors.aurora/8),transparent_65%)]"
      />

      <div className="shell relative">
        {/* Heading */}
        <div className="max-w-[820px] mb-20 md:mb-28">
          <SectionReveal>
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>03 / Roadmap</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <h2 className="font-display headline-section text-text">
              Roadmap
            </h2>
          </SectionReveal>

          <SectionReveal delay={240}>
            <p className="mt-6 text-text-muted text-[17px] md:text-[19px] leading-[1.6] max-w-[52ch] font-light">
              Phases, quarters, deliverables. Not &ldquo;soon.&rdquo;
            </p>
          </SectionReveal>
        </div>

        {/* Timeline */}
        <ol className="relative">
          {/* Vertical spine — desktop center / mobile left */}
          <span
            aria-hidden
            className="pointer-events-none absolute md:left-1/2 left-[14px] top-0 bottom-0 -translate-x-px md:-translate-x-1/2 w-px bg-rule-strong"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute md:left-1/2 left-[14px] top-0 bottom-0 -translate-x-px md:-translate-x-1/2 w-px aurora-glow opacity-50"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(0,245,255,0.5) 12%, rgba(0,245,255,0.5) 88%, transparent 100%)",
            }}
          />

          <div className="space-y-16 md:space-y-24">
            {PHASES.map((phase, i) => (
              <PhaseRow key={phase.name} phase={phase} index={i} />
            ))}
          </div>
        </ol>

        <SectionReveal delay={200}>
          <p className="mt-20 label text-text-faint max-w-[60ch]">
            Quarters, not promises. Each phase ends at the metric named in its
            exit criterion, not on a slide.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

function PhaseRow({ phase, index }: { phase: Phase; index: number }) {
  // Alternate sides on desktop: even index → right, odd index → left
  const isLeft = index % 2 === 1;

  const stateClasses = {
    active:
      "border-gold/55 hover:border-gold/80 shadow-[0_0_0_1px_rgba(255,215,0,0.08)]",
    upcoming: "border-rule-strong hover:border-rule-strong/80",
    future: "border-rule opacity-70 hover:opacity-95",
  }[phase.state];

  const stateLabel = {
    active: { text: "Active", color: "text-gold" },
    upcoming: { text: "Upcoming", color: "text-aurora" },
    future: { text: "Distant", color: "text-text-faint" },
  }[phase.state];

  return (
    <li className="relative md:grid md:grid-cols-12 md:gap-10 items-start">
      {/* Node on the spine */}
      <span
        aria-hidden
        className={`absolute md:left-1/2 left-[14px] top-3 -translate-x-1/2 w-3 h-3 rounded-full border ${
          phase.state === "active"
            ? "bg-gold border-gold aurora-glow"
            : phase.state === "upcoming"
              ? "bg-aurora/80 border-aurora"
              : "bg-bg border-rule-strong"
        }`}
      />

      {/* Spacer column (desktop only) */}
      <div
        className={`hidden md:block md:col-span-5 ${
          isLeft ? "order-3" : "order-1"
        }`}
      />

      {/* Card */}
      <div
        className={`pl-10 md:pl-0 md:col-span-7 ${
          isLeft ? "md:order-1 md:pr-12 lg:pr-16 md:text-right" : "md:order-3 md:pl-12 lg:pl-16"
        }`}
      >
        <PhaseCard
          phase={phase}
          stateClasses={stateClasses}
          stateLabel={stateLabel}
          align={isLeft ? "right" : "left"}
        />
      </div>
    </li>
  );
}

function PhaseCard({
  phase,
  stateClasses,
  stateLabel,
  align,
}: {
  phase: Phase;
  stateClasses: string;
  stateLabel: { text: string; color: string };
  align: "left" | "right";
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = phase.deliverables.slice(0, 3);
  const hidden = phase.deliverables.slice(3);
  const hasMore = hidden.length > 0;

  return (
    <article
      className={`group bg-bg-elevated border ${stateClasses} rounded-[2px] p-7 md:p-9 transition-colors duration-700 hover:bg-elevated-hover`}
    >
      {/* Meta row */}
      <div
        className={`flex items-center justify-between gap-4 mb-6 ${
          align === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        <span className={`label ${stateLabel.color}`}>{phase.quarter}</span>
        <span className="label text-text-faint">{stateLabel.text}</span>
      </div>

      {/* Phase name */}
      <h3
        className={`font-display text-display-md md:text-display-md-lg text-text leading-[1.05] ${
          align === "right" ? "md:text-right" : ""
        }`}
      >
        {phase.name}
      </h3>

      {/* Objective */}
      <p
        className={`mt-5 text-text-muted text-[16px] md:text-[17px] leading-[1.6] font-light max-w-[44ch] ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        <span className="text-text-faint label mr-2">Objective</span>
        <br />
        {phase.objective}
      </p>

      {/* Hairline */}
      <div className="hairline mt-7 mb-6" />

      {/* Deliverables */}
      <div className={align === "right" ? "md:text-right" : ""}>
        <div className={`label text-text-faint mb-3`}>
          Top deliverables
        </div>
        <ul
          className={`space-y-2.5 text-text-muted text-[14.5px] leading-[1.6] font-light ${
            align === "right" ? "md:text-right" : ""
          }`}
        >
          {visible.map((d) => (
            <li key={d} className={align === "right" ? "md:list-none" : ""}>
              {align === "right" ? (
                <span>{d}</span>
              ) : (
                <span className="flex gap-3">
                  <span className="text-text-faint select-none">·</span>
                  <span>{d}</span>
                </span>
              )}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {expanded && hasMore && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`overflow-hidden space-y-2.5 text-text-muted text-[14.5px] leading-[1.6] font-light ${
                align === "right" ? "md:text-right" : ""
              }`}
            >
              {hidden.map((d) => (
                <li
                  key={d}
                  className={`pt-2.5 ${
                    align === "right" ? "md:list-none" : ""
                  }`}
                >
                  {align === "right" ? (
                    <span>{d}</span>
                  ) : (
                    <span className="flex gap-3">
                      <span className="text-text-faint select-none">·</span>
                      <span>{d}</span>
                    </span>
                  )}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={`mt-5 label text-aurora hover:text-text transition-colors duration-500 inline-flex items-center gap-2 ${
              align === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <span>{expanded ? "Show less" : `Show all ${phase.deliverables.length}`}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
              aria-hidden
            >
              ↓
            </motion.span>
          </button>
        )}
      </div>

      {/* Exit criterion */}
      <div className="hairline mt-7 mb-5" />
      <p
        className={`text-text-faint text-[13.5px] leading-[1.65] font-light italic max-w-[48ch] ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        <span className="label not-italic text-text-faint mr-2">
          Exit criterion
        </span>
        <br />
        {phase.exitCriterion}
      </p>
    </article>
  );
}
