"use client";

/**
 * PageReveal — initial-load sequence for Cineora.
 *
 * Sequence (~1.8s total):
 *   0.0s  aurora gradient panel covers viewport
 *   0.2s  logo glyph scales 0.6 → 1.0 + opacity 0 → 1 (600ms)
 *   0.8s  brand text "CINEORA" typewriter-fades in (400ms)
 *   1.2s  panel slides up off-screen (800ms) revealing page
 *   2.0s  overlay unmounted
 *
 * Skipped entirely if:
 *   - prefers-reduced-motion is set, OR
 *   - sessionStorage has the `cineora-revealed` key
 *     (only shown once per browser session)
 *
 * While the reveal is active it sets `data-revealing="true"` on
 * <html>; on completion it sets `data-revealing="done"`. Pages can
 * coordinate styling (e.g. opacity-0 wrappers) against this attr.
 */

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "cineora-revealed";
const TOTAL_MS = 2000;

export function PageReveal() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState<boolean | null>(null);

  // Decide once on mount whether to play the reveal.
  useEffect(() => {
    if (typeof window === "undefined") return;

    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage may be unavailable (privacy modes, iframe
      // sandboxes). Treat that as "not seen" — reveal plays.
      alreadySeen = false;
    }

    const skip = reduce || alreadySeen;
    setShow(!skip);

    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (skip) {
        root.setAttribute("data-revealing", "done");
      } else {
        root.setAttribute("data-revealing", "true");
      }
    }

    if (!skip) {
      // Mark as seen so it won't replay this session.
      try {
        window.sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, [reduce]);

  // Hide overlay once the slide-up completes.
  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => {
      setShow(false);
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-revealing", "done");
      }
    }, TOTAL_MS);
    return () => window.clearTimeout(t);
  }, [show]);

  // Don't render anything until the decision is made (avoids SSR/CSR
  // hydration mismatch — server can render the panel, but we skip if
  // the user prefers reduced motion or has already seen it).
  if (show === null) return null;
  if (!show) return null;

  // Orchestrated variants.
  const overlay = {
    initial: { y: "0%" },
    animate: { y: "-100%" },
    exit: { y: "-100%", opacity: 0 },
  };

  const glyph = {
    initial: { scale: 0.6, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const word = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.8,
      },
    },
  };

  const letter = {
    initial: { opacity: 0, y: 6, filter: "blur(6px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const brand = "CINEORA";

  return (
    <AnimatePresence>
      <motion.div
        key="page-reveal-overlay"
        className="pr-overlay"
        initial={{ y: "0%" }}
        animate={overlay.animate}
        exit={overlay.exit}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] as const }}
        aria-hidden="true"
      >
        <div className="pr-aurora" />
        <div className="pr-content">
          <motion.div
            className="pr-glyph"
            variants={glyph}
            initial="initial"
            animate="animate"
          >
            <GlyphMark />
          </motion.div>

          <motion.h1
            className="pr-brand"
            variants={word}
            initial="initial"
            animate="animate"
          >
            {brand.split("").map((ch, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="pr-letter"
              >
                {ch}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            className="pr-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
          >
            <span className="label">Aurora Genesis · 2026</span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/**
 * Inline geometric glyph — 3 stacked triangles forming an A-shape.
 * Aurora gradient stroke + center dot, sized to 64px.
 */
function GlyphMark() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className="pr-glyph-svg"
    >
      <defs>
        <linearGradient id="pr-glyph-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="55%" stopColor="#F6F8FF" />
          <stop offset="100%" stopColor="#00F5FF" />
        </linearGradient>
      </defs>
      {/* Outer triangle */}
      <path
        d="M32 6 L58 56 L6 56 Z"
        stroke="url(#pr-glyph-grad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner crossbar */}
      <path
        d="M18 38 L46 38"
        stroke="url(#pr-glyph-grad)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      {/* Apex accent */}
      <circle cx="32" cy="6" r="1.8" fill="#00F5FF" />
    </svg>
  );
}

export default PageReveal;