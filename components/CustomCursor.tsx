"use client";

/**
 * CustomCursor — desktop-only custom cursor with smooth lerp follow.
 *
 * Mounts an outer ring + inner dot that trail the mouse pointer with a
 * damped lerp. On devices with a fine pointer we hide the native cursor
 * globally (via `custom-cursor-active` class on <html>) and let these
 * divs take over.
 *
 * Hover scaling:
 *   - Interactive elements (a, button, [role="button"], input, textarea,
 *     [data-cursor-hover])   → outer scales up, inner dot shrinks to 0.
 *   - [data-cursor-label]     → outer grows larger and shows the label
 *                               text from the attribute as a caption.
 *
 * SSR-safe: returns null on the server, mounts on first effect.
 * Respects prefers-reduced-motion: instant follow, no lerp, no scaling.
 */

import { useEffect, useRef, useState } from "react";

type CursorState = {
  x: number;
  y: number;
};

const LERP_FACTOR = 0.18; // smoothing per frame for non-reduced motion
const IDLE_FADE_MS = 100; // delay before showing to avoid flash on load

export function CustomCursor() {
  const targetRef = useRef<CursorState>({ x: 0, y: 0 });
  const currentRef = useRef<CursorState>({ x: 0, y: 0 });

  const outerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect fine pointer + reduced motion on mount (client only).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fineMq = window.matchMedia("(pointer: fine)");
    const hoverMq = window.matchMedia("(hover: hover)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => {
      const ok = fineMq.matches && hoverMq.matches;
      setEnabled(ok);
      setReducedMotion(reduceMq.matches);
    };

    evaluate();

    // Add listeners (Safari fallback included).
    const onChange = () => evaluate();
    [fineMq, hoverMq, reduceMq].forEach((mq) => {
      if (mq.addEventListener) {
        mq.addEventListener("change", onChange);
      } else {
        mq.addListener(onChange);
      }
    });

    return () => {
      [fineMq, hoverMq, reduceMq].forEach((mq) => {
        if (mq.removeEventListener) {
          mq.removeEventListener("change", onChange);
        } else {
          mq.removeListener(onChange);
        }
      });
    };
  }, []);

  // Toggle the global cursor-hiding class on <html>.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("custom-cursor-active");
    } else {
      root.classList.remove("custom-cursor-active");
    }
    return () => {
      root.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  // Mouse handlers + RAF loop.
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const onMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;

      const t = e.target as Element | null;
      if (t && t.closest) {
        const labelled = t.closest("[data-cursor-label]") as HTMLElement | null;
        const interactive = t.closest(
          'a, button, [role="button"], input, textarea, [data-cursor-hover]'
        ) as HTMLElement | null;
        if (labelled) {
          const lbl = labelled.getAttribute("data-cursor-label");
          setLabel(lbl && lbl.length > 0 ? lbl : null);
        } else {
          setLabel(null);
        }
        setHover(Boolean(interactive));
      }

      // Fade in on first real movement.
      setVisible((v) => (v ? v : true));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    let rafId = 0;
    const tick = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;

      if (reducedMotion) {
        cur.x = tgt.x;
        cur.y = tgt.y;
      } else {
        cur.x += (tgt.x - cur.x) * LERP_FACTOR;
        cur.y += (tgt.y - cur.y) * LERP_FACTOR;
      }

      const outer = outerRef.current;
      const inner = innerRef.current;

      if (outer) {
        outer.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      }
      if (inner) {
        // When hovering an interactive, the inner dot collapses to 0 — set
        // its translate via a custom prop so the CSS scale(0) takes effect
        // at the cursor position. In the non-hover state we still want to
        // position it at the cursor.
        if (hover) {
          inner.style.setProperty("--x", `${cur.x}px`);
          inner.style.setProperty("--y", `${cur.y}px`);
          inner.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) scale(0)`;
        } else {
          inner.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
        }
      }

      rafId = window.requestAnimationFrame(tick);
    };
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled, hover, reducedMotion]);

  // SSR + non-fine-pointer: render nothing.
  if (!enabled) return null;

  const outerClass = [
    "cc-outer",
    visible ? "is-visible" : "",
    hover ? "is-hover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const innerClass = ["cc-inner", visible ? "is-visible" : "", hover ? "is-hover" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div
        ref={outerRef}
        className={outerClass}
        aria-hidden="true"
        data-cursor-root
        style={{ transitionDelay: visible ? "0ms" : `${IDLE_FADE_MS}ms` }}
      >
        {label && (
          <span
            className="cc-label"
            aria-hidden="true"
          >
            {label}
          </span>
        )}
      </div>
      <div
        ref={innerRef}
        className={innerClass}
        aria-hidden="true"
        data-cursor-root
        style={{ transitionDelay: visible ? "0ms" : `${IDLE_FADE_MS}ms` }}
      />
    </>
  );
}

export default CustomCursor;