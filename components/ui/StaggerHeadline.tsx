"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Staggered character reveal for hero headline.
 * Plays once on mount. Respects prefers-reduced-motion.
 */
export function StaggerHeadline({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: reduce ? 0 : 24, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduce ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-visible"
          style={{ marginRight: "0.28em" }}
        >
          {Array.from(w).map((ch, j) => (
            <motion.span
              key={j}
              variants={child}
              className="inline-block"
              style={{ willChange: "transform, opacity, filter" }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
