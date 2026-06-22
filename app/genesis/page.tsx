import type { Metadata } from "next";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata: Metadata = {
  title: "Genesis Council — Cineora",
  description:
    "The people behind the first chapter of Cineora — founders, architects, and operators carrying the civilization forward.",
};

type CouncilMember = {
  role: string;
  title: string;
  bio: string;
  focus: string[];
  status: "active" | "forming";
};

const COUNCIL: CouncilMember[] = [
  {
    role: "Visionary",
    title: "The one who first heard the civilization",
    bio: "Holds the long-arc vision. Decides what Cineora is, what it isn't, and what it becomes when the founders step back. Sets the creative north star and arbitrates conflict between the architectural and the mythic.",
    focus: ["Long-arc vision", "Aesthetic arbitration", "Canon ethics"],
    status: "active",
  },
  {
    role: "Architect",
    title: "Builder of the system that holds the world",
    bio: "Designs the protocol, the agent mesh, the on-chain invariants. Translates the vision into something a civilization can actually run on. Lives in whitepapers, schemas, and the edges between smart contracts and story engines.",
    focus: ["Protocol design", "Agent mesh", "On-chain invariants"],
    status: "active",
  },
  {
    role: "Operator",
    title: "The one who keeps the lights on",
    bio: "Runs the day-to-day of the project. Treasury, partnerships, contributor coordination, community. Makes sure the civilization has runway and the team has what it needs to ship.",
    focus: ["Treasury", "Partnerships", "Contributor coordination"],
    status: "active",
  },
  {
    role: "Steward",
    title: "Guardian of the canon",
    bio: "Holds the integrity of the world across time. Reviews every chapter for continuity, ethical coherence, and the question: would the civilization recognize this as its own?",
    focus: ["Canon review", "Continuity audit", "Ethical coherence"],
    status: "forming",
  },
];

export default function GenesisPage() {
  return (
    <main className="relative min-h-screen pt-[68px]">
      <div className="shell py-[clamp(80px,12vh,140px)]">
        {/* Header */}
        <header className="max-w-[820px] mb-[clamp(64px,10vh,120px)]">
          <SectionReveal>
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>The Genesis Council · 2026</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.95] text-text">
              A civilization begins with a small, careful hand.
            </h1>
          </SectionReveal>

          <SectionReveal delay={240}>
            <p className="mt-6 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[58ch] font-light">
              Cineora is carried forward by a small council of operators.
              We build in public, ship in chapters, and hold ourselves to
              the standard of the civilization we&apos;re trying to bring into
              being.
            </p>
          </SectionReveal>
        </header>

        {/* Council grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-rule border border-rule">
          {COUNCIL.map((member, i) => (
            <SectionReveal key={member.role} delay={(i % 4) * 80}>
              <article className="group relative h-full bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                <div className="flex items-center justify-between mb-6">
                  <div className="label text-text-faint">
                    {String(i + 1).padStart(2, "0")} / Council seat
                  </div>
                  {member.status === "active" ? (
                    <span className="label text-aurora flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-aurora animate-pulse" />
                      Active
                    </span>
                  ) : (
                    <span className="label text-text-faint">Forming</span>
                  )}
                </div>

                <h2 className="font-display text-[32px] md:text-[40px] text-text leading-[1.05]">
                  The {member.role}
                </h2>

                <p className="mt-2 label text-aurora">{member.title}</p>

                <p className="mt-6 text-text-muted text-[15px] leading-[1.7] font-light">
                  {member.bio}
                </p>

                <div className="mt-8 pt-5 border-t border-rule">
                  <div className="label text-text-faint mb-3">Focus</div>
                  <ul className="space-y-1.5">
                    {member.focus.map((f) => (
                      <li
                        key={f}
                        className="text-text-muted text-[13px] flex items-start gap-2"
                      >
                        <span className="text-text-faint mt-1">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Build-in-public note */}
        <SectionReveal delay={400}>
          <footer className="mt-[clamp(64px,10vh,120px)] max-w-[820px]">
            <div className="hairline mb-8" />
            <p className="text-text-muted text-[15px] leading-[1.7] max-w-[60ch] font-light mb-6">
              The Council is intentionally small. As the civilization grows,
              additional seats open through the DAO — never through closed-door
              appointments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/allinoneacount1-dot/cineora"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cineora-outline group"
              >
                <span>Follow the build on GitHub</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="mailto:hello@cineora.xyz"
                className="label text-text-muted hover:text-aurora transition-colors"
              >
                Reach the council
              </a>
            </div>
          </footer>
        </SectionReveal>
      </div>
    </main>
  );
}
