import { AGENTS } from "@/lib/agents";
import { AgentGlyph } from "@/components/agents/AgentGlyph";
import { SectionReveal } from "@/components/ui/SectionReveal";

export const metadata = {
  title: "Agent Marketplace — Cineora",
  description:
    "The 16 agents that compose every civilization on Cineora — Director, Screenwriter, Cinematographer, Composer, and more.",
};

export default function AgentsPage() {
  return (
    <main className="relative min-h-screen pt-[68px]">
      <div className="shell py-[clamp(80px,12vh,140px)]">
        {/* Header */}
        <header className="max-w-[820px] mb-[clamp(64px,10vh,120px)]">
          <SectionReveal>
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>The agent mesh · 16 specialists</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={120}>
            <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.95] text-text">
              The mind of a civilization.
            </h1>
          </SectionReveal>

          <SectionReveal delay={240}>
            <p className="mt-6 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[58ch] font-light">
              Every civilization on Cineora is composed by a mesh of sixteen
              specialized agents. They hold the vision, write the story, score
              the silence, and remember the canon. This is the team.
            </p>
          </SectionReveal>
        </header>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-rule border border-rule">
          {AGENTS.map((agent, i) => (
            <SectionReveal key={agent.id} delay={(i % 6) * 60}>
              <article className="group relative h-full bg-bg p-8 md:p-10 transition-colors duration-500 hover:bg-bg-elevated">
                {/* Glyph */}
                <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <AgentGlyph kind={agent.glyph} size={44} />
                </div>

                {/* Number */}
                <div className="label text-text-faint mb-2">
                  {String(i + 1).padStart(2, "0")} / Agent
                </div>

                {/* Name */}
                <h2 className="font-display text-[28px] md:text-[32px] text-text leading-[1.1]">
                  {agent.name}
                </h2>

                {/* Role */}
                <p className="mt-2 label text-aurora">{agent.role}</p>

                {/* Description */}
                <p className="mt-5 text-text-muted text-[14px] md:text-[15px] leading-[1.7] font-light">
                  {agent.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 pt-5 border-t border-rule">
                  <div className="label text-text-faint mb-3">Capabilities</div>
                  <ul className="space-y-1.5">
                    {agent.capabilities.map((c) => (
                      <li
                        key={c}
                        className="text-text-muted text-[13px] flex items-start gap-2"
                      >
                        <span className="text-text-faint mt-1">·</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Footer note */}
        <footer className="mt-[clamp(64px,10vh,120px)] max-w-[820px]">
          <div className="hairline mb-8" />
          <p className="text-text-muted text-[15px] leading-[1.7] max-w-[60ch] font-light">
            Agents operate under the Director&apos;s coordination and submit every
            decision through the Lore agent for canon gating. Citizens interact
            with the mesh through the Community agent — never with raw
            individual agents — to keep the world&apos;s coherence intact.
          </p>
        </footer>
      </div>
    </main>
  );
}