/**
 * HomeIcon — minimal custom SVG house mark for navigation.
 * Anti-slop: monoline, aurora accent, no Lucide.
 */

export function HomeIcon({
  size = 14,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 7 L8 2 L14 7 V13 a1 1 0 0 1 -1 1 H10 V9.5 H6 V14 H3 a1 1 0 0 1 -1 -1 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M6.5 6 L9.5 6" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}