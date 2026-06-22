"use client";

import dynamic from "next/dynamic";
import { StaggerHeadline } from "@/components/ui/StaggerHeadline";
import { ArrowRight } from "@/components/icons/ArrowRight";

const AuroraCanvas = dynamic(
  () =>
    import("@/components/canvas/AuroraCanvas").then((m) => m.AuroraCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* WebGL background */}
      <div className="absolute inset-0 z-0">
        <AuroraCanvas />
      </div>

      {/* Soft top vignette to make nav legible */}
      <div
        className="absolute inset-x-0 top-0 h-[180px] z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,9,36,0.85), transparent)",
        }}
      />
      {/* Bottom fade for content edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[260px] z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(6,9,36,0.9), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 shell pb-[clamp(56px,9vh,120px)] pt-[140px]">
        <div className="max-w-[1100px]">
          <div className="label text-text-faint mb-7 flex items-center gap-3">
            <span className="block w-8 h-px bg-rule-strong" />
            <span>Phase 0 · A living cinematic civilization</span>
          </div>

          <StaggerHeadline
            text="Where imagination becomes ownership."
            className="font-display headline-hero text-text"
          />

          <p
            className="mt-9 max-w-[58ch] text-text-muted text-[17px] md:text-[19px] leading-[1.55] font-light"
            style={{ animation: "fadeIn 1.4s ease-out 0.6s both" }}
          >
            A living cinematic civilization built to outlive its creators.
          </p>

          <div className="mt-12 flex items-center gap-7 flex-wrap">
            <a href="#enter" className="btn-cineora group">
              <span>Enter the civilization</span>
              <ArrowRight size={14} className="btn-cineora__arrow" />
            </a>

            <a
              href="#civilization"
              className="label text-text-faint hover:text-text-muted transition-colors"
            >
              Begin reading ↓
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
