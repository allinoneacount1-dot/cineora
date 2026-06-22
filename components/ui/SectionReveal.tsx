"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SectionReveal — IntersectionObserver-driven fade + translateY.
 * Used for section heading + body reveal on scroll.
 * NOTE: uses a stable internal ref so the observer binds to the
 * same DOM node across renders (no Math.random in id).
 */
export function SectionReveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect prefers-reduced-motion on mount (SSR-safe — default false).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    // Older Safari uses addListener; modern browsers use addEventListener.
    if (mq.addEventListener) {
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
    mq.addListener(onChange);
    return () => mq.removeListener(onChange);
  }, []);

  useEffect(() => {
    // When reduced motion is preferred, show immediately and skip observer.
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible || reducedMotion ? 1 : 0,
        transform:
          reducedMotion || visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: reducedMotion
          ? "none"
          : `opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: reducedMotion ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
