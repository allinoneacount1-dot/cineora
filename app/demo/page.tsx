"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LivingCinemaScene = dynamic(
  () =>
    import("@/components/demo/LivingCinemaScene").then((m) => m.LivingCinemaScene),
  { ssr: false }
);

export default function DemoPage() {
  const [hintVisible, setHintVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-[200vh]">
      {/* Interactive WebGL canvas (fixed, full-viewport) */}
      <LivingCinemaScene />

      {/* UI overlay */}
      <div className="relative z-10">
        {/* Top header */}
        <section className="min-h-screen flex flex-col justify-center shell">
          <div className="max-w-[820px]">
            <div className="label text-aurora mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-aurora" />
              <span>Interactive demo · Living Cinema Engine</span>
            </div>

            <h1 className="font-display text-[clamp(48px,7vw,96px)] leading-[0.95] text-text">
              Move. Scroll. <span className="text-gold">Watch.</span>
            </h1>

            <p className="mt-6 text-text-muted text-[18px] md:text-[20px] leading-[1.65] max-w-[58ch] font-light">
              A live preview of the Living Cinema Engine. Three thousand world
              fragments orbit a single point of light. Move your cursor to look
              around. Scroll to travel through.
            </p>

            {hintVisible && (
              <div
                className="mt-12 label text-aurora animate-pulse"
                aria-live="polite"
              >
                ↓ scroll to descend
              </div>
            )}
          </div>
        </section>

        {/* Middle: depth zone */}
        <section className="min-h-screen flex flex-col justify-center shell">
          <div className="max-w-[820px]">
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.05] text-text">
              Three thousand particles.
              <br />
              One coherent world.
            </h2>
            <p className="mt-6 text-text-muted text-[17px] leading-[1.7] max-w-[58ch] font-light">
              Every point in this scene is a fragment of a civilization —
              character memory, scene data, dialogue line, world object. The
              Living Cinema Engine keeps them in continuous orbit around the
              civilization&apos;s center. They never reset. They never drift away.
            </p>
          </div>
        </section>

        {/* Bottom: closing */}
        <section className="min-h-screen flex flex-col justify-end shell pb-[clamp(80px,12vh,140px)]">
          <div className="max-w-[820px]">
            <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-[1.05] text-text">
              This is what persistence looks like.
            </h2>
            <p className="mt-6 text-text-muted text-[17px] leading-[1.7] max-w-[58ch] font-light">
              Continue reading the whitepaper to understand how this engine
              anchors a civilization on Solana, or enter the civilization to see
              the agents that compose it.
            </p>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <a
                href="/whitepaper"
                className="btn-cineora group"
              >
                <span>Read the whitepaper</span>
              </a>
              <a
                href="/agents"
                className="label text-text-faint hover:text-aurora transition-colors duration-500"
              >
                Enter the civilization →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}