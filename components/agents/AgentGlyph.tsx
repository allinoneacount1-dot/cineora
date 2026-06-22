/**
 * AgentGlyph — 16 custom SVG marks for the Agent Mesh.
 * Monoline, aurora + gold accents, no Lucide. Each glyph reflects the agent's domain.
 */

type Props = { kind: string; size?: number; active?: boolean };

const STROKE = "#F6F8FF";
const ACCENT = "#00F5FF";
const GOLD = "#FFD700";
const PURPLE = "#9B4DFF";

export function AgentGlyph({ kind, size = 48, active = false }: Props) {
  const s = active ? ACCENT : STROKE;
  const o = active ? 1 : 0.4;

  switch (kind) {
    case "director":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Clapperboard */}
          <rect x="8" y="20" width="32" height="20" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M8 20 L14 14 L18 18 L24 12 L28 16 L34 10 L40 16 L40 20" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinejoin="round" />
          <circle cx="24" cy="30" r="2" fill={GOLD} />
        </svg>
      );
    case "screenwriter":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Scroll with quill */}
          <path d="M10 14 H32 V34 H10 a4 4 0 0 1 -4 -4 V18 a4 4 0 0 1 4 -4 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M14 20 H28 M14 24 H26 M14 28 H24" stroke={s} strokeOpacity={o * 0.6} strokeWidth="1" strokeLinecap="round" />
          <path d="M34 8 L40 14 L28 26 L22 26 L22 20 Z" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M22 26 L20 30" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "cinematographer":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Camera with reel */}
          <rect x="8" y="18" width="22" height="16" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M30 24 L38 20 L38 32 L30 28 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinejoin="round" />
          <circle cx="14" cy="22" r="2" fill="none" stroke={ACCENT} strokeWidth="1" />
          <circle cx="20" cy="22" r="2" fill="none" stroke={s} strokeOpacity={o * 0.6} strokeWidth="1" />
          <circle cx="14" cy="28" r="2" fill="none" stroke={s} strokeOpacity={o * 0.6} strokeWidth="1" />
          <circle cx="20" cy="28" r="2" fill="none" stroke={s} strokeOpacity={o * 0.6} strokeWidth="1" />
        </svg>
      );
    case "composer":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Music note with wave */}
          <ellipse cx="14" cy="34" rx="5" ry="3.5" transform="rotate(-20 14 34)" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M19 32 V14" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M19 14 Q28 16 28 22" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinecap="round" />
          <ellipse cx="28" cy="34" rx="5" ry="3.5" transform="rotate(-20 28 34)" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <path d="M33 32 V16" stroke={ACCENT} strokeWidth="1.2" />
          <path d="M33 16 Q42 18 42 24" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "lore":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Book with ribbon */}
          <path d="M8 12 H22 V36 H8 a2 2 0 0 1 -2 -2 V14 a2 2 0 0 1 2 -2 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M40 12 H26 V36 H40 a2 2 0 0 0 2 -2 V14 a2 2 0 0 0 -2 -2 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M22 12 V36 M26 12 V36" stroke={s} strokeOpacity={o * 0.6} strokeWidth="1" />
          <path d="M14 12 V36" stroke={GOLD} strokeWidth="1.2" />
          <circle cx="14" cy="38" r="1.5" fill={GOLD} />
        </svg>
      );
    case "narrative":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Branching path */}
          <circle cx="10" cy="24" r="2" fill={GOLD} />
          <path d="M12 24 L20 24" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <circle cx="24" cy="24" r="2" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M26 24 L36 14 M26 24 L36 24 M26 24 L36 34" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <circle cx="38" cy="14" r="2" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="38" cy="24" r="2" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="38" cy="34" r="2" fill="none" stroke={ACCENT} strokeWidth="1.2" />
        </svg>
      );
    case "actor":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Theater masks (single, dual-tone) */}
          <path d="M14 10 C8 10 6 16 6 22 C6 30 12 38 18 38 C20 38 22 36 24 34 V12 C22 10 18 10 14 10 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M16 22 L20 22" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinecap="round" />
          <path d="M14 28 Q18 32 22 28" fill="none" stroke={ACCENT} strokeWidth="1" strokeLinecap="round" />
          <circle cx="14" cy="20" r="1" fill={GOLD} />
        </svg>
      );
    case "dialogue":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Speech bubbles */}
          <path d="M8 12 H30 V24 H18 L12 30 V24 H8 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinejoin="round" />
          <path d="M18 24 H38 V36 H32 L28 40 V36 H18 Z" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeLinejoin="round" />
          <circle cx="14" cy="18" r="1" fill={s} fillOpacity={o} />
          <circle cx="20" cy="18" r="1" fill={s} fillOpacity={o} />
          <circle cx="26" cy="18" r="1" fill={s} fillOpacity={o} />
        </svg>
      );
    case "vfx":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Sparkle cluster */}
          <path d="M24 8 L26 18 L36 20 L26 22 L24 32 L22 22 L12 20 L22 18 Z" fill="none" stroke={ACCENT} strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M14 32 L15 36 L19 37 L15 38 L14 42 L13 38 L9 37 L13 36 Z" fill={PURPLE} fillOpacity="0.6" />
          <path d="M36 30 L36.7 32.3 L39 33 L36.7 33.7 L36 36 L35.3 33.7 L33 33 L35.3 32.3 Z" fill={GOLD} fillOpacity="0.7" />
        </svg>
      );
    case "community":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Connected nodes */}
          <circle cx="14" cy="14" r="2.5" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <circle cx="34" cy="14" r="2.5" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <circle cx="24" cy="28" r="2.5" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="10" cy="36" r="2.5" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <circle cx="38" cy="36" r="2.5" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M14 14 L24 28 M34 14 L24 28 M24 28 L10 36 M24 28 L38 36" stroke={s} strokeOpacity={o * 0.7} strokeWidth="0.8" />
        </svg>
      );
    case "economy":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Coin stack */}
          <ellipse cx="24" cy="36" rx="14" ry="4" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M10 36 V32 M38 36 V32" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <ellipse cx="24" cy="32" rx="14" ry="4" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M10 32 V28 M38 32 V28" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <ellipse cx="24" cy="28" rx="14" ry="4" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M10 28 V24 M38 28 V24" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <ellipse cx="24" cy="24" rx="14" ry="4" fill="none" stroke={GOLD} strokeWidth="1.2" />
          <text x="24" y="27" fontFamily="serif" fontSize="6" fill={GOLD} textAnchor="middle">C</text>
        </svg>
      );
    case "governance":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Greek pillar */}
          <path d="M10 12 H38 V16 H10 Z M12 16 V32 M20 16 V32 M28 16 V32 M36 16 V32 M10 32 H38 V36 H10 Z M18 12 V8 H30 V12" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="2" fill={GOLD} />
          <path d="M24 20 V28 M20 24 H28" stroke={GOLD} strokeWidth="0.8" />
        </svg>
      );
    case "archivist":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Filing cabinet */}
          <rect x="10" y="10" width="28" height="32" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <path d="M10 20 H38 M10 30 H38" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <rect x="22" y="13" width="6" height="2" fill={ACCENT} />
          <rect x="22" y="23" width="6" height="2" fill={ACCENT} />
          <rect x="22" y="33" width="6" height="2" fill={GOLD} />
        </svg>
      );
    case "memory":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Chain links */}
          <rect x="6" y="18" width="14" height="12" rx="2" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <rect x="28" y="18" width="14" height="12" rx="2" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" />
          <rect x="18" y="14" width="12" height="20" rx="2" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <circle cx="24" cy="24" r="1.5" fill={GOLD} />
        </svg>
      );
    case "world-architect":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Blueprint grid + compass */}
          <rect x="8" y="8" width="32" height="32" fill="none" stroke={s} strokeOpacity={o * 0.5} strokeWidth="0.8" />
          <path d="M8 16 H40 M8 24 H40 M8 32 H40 M16 8 V40 M24 8 V40 M32 8 V40" stroke={s} strokeOpacity={o * 0.3} strokeWidth="0.6" />
          <circle cx="24" cy="24" r="4" fill="none" stroke={ACCENT} strokeWidth="1.2" />
          <path d="M24 16 V20 M24 28 V32 M16 24 H20 M28 24 H32" stroke={GOLD} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );
    case "outreach":
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
          {/* Megaphone with signal */}
          <path d="M8 22 L8 30 L18 30 L34 38 V14 L18 22 Z" fill="none" stroke={s} strokeOpacity={o} strokeWidth="1" strokeLinejoin="round" />
          <path d="M38 18 Q42 24 38 30" stroke={ACCENT} strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M42 14 Q48 24 42 34" stroke={ACCENT} strokeWidth="1.2" fill="none" strokeLinecap="round" strokeOpacity="0.6" />
          <circle cx="14" cy="26" r="1" fill={GOLD} />
        </svg>
      );
    default:
      return null;
  }
}