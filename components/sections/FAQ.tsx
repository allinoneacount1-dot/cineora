"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";

/**
 * FAQ — accordion of 8 editorial questions.
 *
 * Single column, prose-style max width.
 *   - Question in font-display (Tenor serif) at 18/22px
 *   - Aurora + / − icon on right
 *   - Hairline divider between rows
 *   - AnimatePresence height + opacity transition
 *   - Keyboard accessible (button + aria-expanded + aria-controls)
 */

type QA = { q: string; a: string };

const QUESTIONS: QA[] = [
  {
    q: "What is Cineora?",
    a: "A living cinematic civilization. Not a film studio, not a streaming platform, not a metaverse — a long-running, on-chain world that grows, remembers, and is inherited. Creators author Living Scenes; the Aurora Engine composes them into continuous cinema that an audience inhabits rather than watches.",
  },
  {
    q: "How do Living Scenes work?",
    a: "A Living Scene is an NFT with mutable on-chain state. Its content is derived from a PDA commitment, which means the visible world can evolve while remaining cryptographically tethered to its origin. The story isn't locked at mint — it breathes.",
  },
  {
    q: "What is the Aurora Engine?",
    a: "The rendering layer: R3F + Three.js + WebGPU fallback. It composes Living Scenes at 60 fps on reference hardware and streams the result to browser, mobile, and eventually spatial displays. It is not a generic game engine — it is purpose-built for narrative continuity.",
  },
  {
    q: "Who are the 16 agents?",
    a: "Director, Screenwriter, Cinematographer, Composer, Sound Designer, Editor, Production Designer, Colorist, Casting Director, Continuity Supervisor, Dialogue Coach, VFX Supervisor, Stunt Coordinator, Foley Artist, Archivist, and Critic. Each has a bounded autonomy budget and a defined role inside the Aurora Engine. Read the Agents page for full profiles.",
  },
  {
    q: "What is $CINE used for?",
    a: "$CINE is the protocol's energy layer. It is used for governance votes, agent evolution proposals, Civilization Pool deposits, and the licensing fees that move between worlds. It is not a passive income instrument. Holding $CINE means you can shape what the civilization becomes.",
  },
  {
    q: "How do creators earn?",
    a: "Through Royalty Streams — perpetual, on-chain, derived from each Living Scene's lineage. When derivative works are minted or licensed across the World Licensing Network, the original creators and their referenced scenes receive automated distributions via the cineora-royalty program.",
  },
  {
    q: "What is the Memory Chain?",
    a: "An append-only, content-addressed log of every meaningful state change across every civilization. Merkle-rooted to mainnet on a regular cadence. It is the reason a civilization can be inherited — the canonical history is preserved even if individual contributors go dormant.",
  },
  {
    q: "Can I join the Creator Council?",
    a: "The founding council of 50 is closed and has been selected. The World Builder public release in 2027 will open instantiation to anyone. Until then, joining the waitlist is the best way to be considered for early access.",
  },
];

export function FAQ() {
  // Allow only one panel open at a time — closes others
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const groupId = useId();

  return (
    <section
      id="faq"
      className="relative w-full py-section-md border-t border-rule"
    >
      <div className="shell">
        <div className="max-w-[820px] mb-16 md:mb-20">
          <SectionReveal>
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>04 / FAQ</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <h2 className="font-display headline-section text-text max-w-[14ch]">
              Questions, answered plainly.
            </h2>
          </SectionReveal>

          <SectionReveal delay={240}>
            <p className="mt-6 text-text-muted text-[17px] md:text-[19px] leading-[1.6] max-w-[52ch] font-light">
              If something here is wrong or missing, write to us. We update
              the whitepaper before the landing page.
            </p>
          </SectionReveal>
        </div>

        <SectionReveal delay={120}>
          <div
            className="max-w-[760px] border-t border-rule"
            role="list"
            aria-label="Frequently asked questions"
          >
            {QUESTIONS.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `${groupId}-panel-${i}`;
              const buttonId = `${groupId}-button-${i}`;
              return (
                <div
                  key={item.q}
                  role="listitem"
                  className="border-b border-rule"
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-start justify-between gap-6 py-7 md:py-8 text-left group/btn transition-colors duration-500 hover:text-aurora"
                    >
                      <span
                        className={`font-display text-[18px] md:text-[22px] leading-[1.35] tracking-display ${
                          isOpen ? "text-aurora" : "text-text"
                        } transition-colors duration-500`}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`shrink-0 mt-1 inline-flex items-center justify-center w-7 h-7 border rounded-full text-[16px] leading-none font-light ${
                          isOpen
                            ? "border-aurora text-aurora"
                            : "border-rule-strong text-text-muted group-hover/btn:border-aurora group-hover/btn:text-aurora"
                        } transition-colors duration-500`}
                      >
                        +
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pr-10 text-text-muted text-[15px] md:text-[16px] leading-[1.75] font-light max-w-[64ch]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal delay={200}>
          <p className="mt-12 label text-text-faint max-w-[60ch]">
            Long-form answers live in the whitepaper. This accordion is the
            short version.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
