/**
 * ArrowRight — used inside CTAs.
 * Custom monoline SVG, 16x16 viewBox.
 */
export function ArrowRight({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 8 H13 M9 4 L13 8 L9 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
