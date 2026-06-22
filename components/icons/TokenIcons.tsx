/**
 * Custom monoline SVG icons for TokenUtility blocks.
 * All: stroke-only, currentColor, 48x48 viewBox, 1.5px stroke-width.
 */

type IconProps = { className?: string };

export function IconGovernance({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="13" />
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconAccess({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 40 V20 a16 16 0 0 1 32 0 V40" />
      <path d="M8 40 H40" />
      <path d="M19 40 V28 a5 5 0 0 1 10 0 V40" />
      <path d="M24 13 V8" />
      <circle cx="24" cy="5.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconSpiral({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 24 m -2 0 a 2 2 0 1 0 4 0 a 5 5 0 1 0 -10 0 a 9 9 0 1 0 18 0 a 13 13 0 1 0 -26 0" />
      <path d="M24 4 V8 M44 24 H40 M24 44 V40 M4 24 H8" />
    </svg>
  );
}

export function IconNodes({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="14" r="2.4" />
      <circle cx="38" cy="12" r="2.4" />
      <circle cx="14" cy="36" r="2.4" />
      <circle cx="36" cy="34" r="2.4" />
      <circle cx="24" cy="24" r="2.4" />
      <path d="M12.2 15.6 L21.8 22.4" />
      <path d="M35.8 13.6 L26.2 22.4" />
      <path d="M16 34.2 L22 25.8" />
      <path d="M34 32.4 L28 25.6" />
      <path d="M21 24 H27" strokeDasharray="2 2" />
    </svg>
  );
}
