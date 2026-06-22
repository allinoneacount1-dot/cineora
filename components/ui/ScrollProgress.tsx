"use client";

/**
 * ScrollProgress — thin aurora progress bar at the top of viewport.
 * Tracks full page scroll position.
 */

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left transition-transform duration-150 ease-out"
        style={{
          width: "100%",
          transform: `scaleX(${progress / 100})`,
          background:
            "linear-gradient(90deg, #FFD700 0%, #00F5FF 50%, #9B4DFF 100%)",
          boxShadow: "0 0 8px rgba(0, 245, 255, 0.4)",
        }}
      />
    </div>
  );
}