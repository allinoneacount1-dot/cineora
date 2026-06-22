"use client";

/**
 * MagneticButton — wraps a single child so it subtly follows the cursor
 * while hovered. Strength is clamped so the pull feels like a nudge
 * rather than a chase. Falls back to a plain passthrough on coarse
 * pointers (touch devices) or when prefers-reduced-motion is set.
 *
 * Props:
 *   - strength: 0–1, multiplier for pull distance (default 0.35)
 *   - as:       wrapper tag (default "div") — note: this is the outer
 *               tag, the inner motion.div holds the spring translation.
 *   - className, children: forwarded as usual
 *
 * Always emits `data-cursor-hover` on the wrapper so the CustomCursor
 * scales up while the button is being hovered.
 */

import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: keyof JSX.IntrinsicElements;
};

const MAX_PULL_PX = 16;

export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Detect fine pointer — on touch / coarse devices skip the effect.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const evaluate = () => setIsFinePointer(mq.matches);
    evaluate();
    if (mq.addEventListener) {
      mq.addEventListener("change", evaluate);
      return () => mq.removeEventListener("change", evaluate);
    }
    mq.addListener(evaluate);
    return () => mq.removeListener(evaluate);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.6 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  // No-op on touch / reduced motion: return a plain passthrough.
  const disable = reduce || !isFinePointer;

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (disable) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    x.set(clamp(dx, -MAX_PULL_PX, MAX_PULL_PX));
    y.set(clamp(dy, -MAX_PULL_PX, MAX_PULL_PX));
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Wrapper = motion[as as keyof typeof motion] as typeof motion.div;

  // If the child is a single React element, clone it so it sits inside
  // the magnetic wrapper without the caller needing to know the
  // underlying motion shape.
  const inner = isValidElement(children) ? (
    cloneElement(children as ReactElement, { "data-cursor-hover": true })
  ) : (
    <span data-cursor-hover="true">{children}</span>
  );

  return (
    <Wrapper
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={disable ? undefined : { x: sx, y: sy }}
    >
      {inner}
    </Wrapper>
  );
}

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v;
}

export default MagneticButton;