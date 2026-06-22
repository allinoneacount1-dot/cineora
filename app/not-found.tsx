import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Aurora glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-aurora/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-ethereal-purple/5 blur-[100px]" />
      </div>

      <div className="max-w-[640px] w-full text-center">
        <p className="label text-aurora mb-6">Error 404 / Lost in the void</p>
        <h1 className="font-display text-[clamp(64px,12vw,140px)] leading-[0.95] text-text">
          This page
          <br />
          <span className="text-aurora italic">doesn&apos;t exist</span>{" "}
          <span className="text-text-faint">yet.</span>
        </h1>
        <p className="mt-8 text-text-muted text-[15px] leading-[1.7] max-w-[480px] mx-auto">
          Every civilization has unmapped territory. You&apos;ve wandered into one of ours.
          Return to the capital, or chart a new path from the navigation above.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="btn-cineora group"
            aria-label="Return to landing"
          >
            <span>Return to the capital</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/agents"
            className="btn-cineora-outline group"
            aria-label="Browse the agents"
          >
            <span>Meet the agents</span>
          </Link>
        </div>

        <div className="mt-20 hairline" />

        <p className="mt-6 label text-text-faint">
          Cineora — A Living Cinematic Civilization
        </p>
      </div>
    </main>
  );
}
