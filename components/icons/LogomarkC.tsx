/**
 * Custom SVG logomark — a "C" formed from two concentric rings
 * with an aurora highlight on the upper arc.
 * Used in nav and footer.
 */
export function LogomarkC({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cineora-c-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="55%" stopColor="#F6F8FF" />
          <stop offset="100%" stopColor="#00F5FF" />
        </linearGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="rgba(246,248,255,0.18)"
        strokeWidth="1"
      />
      <path
        d="M 17.5 8 A 7 7 0 1 0 17.5 16"
        stroke="url(#cineora-c-grad)"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="12" cy="12" r="1.1" fill="#FFD700" />
    </svg>
  );
}
