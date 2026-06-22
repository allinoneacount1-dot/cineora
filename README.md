# CINEORA — Phase 0 Prototype

**A living cinematic civilization. Where imagination becomes ownership.**

This is the Phase 0 local prototype of the CINEORA website, locked to the **Aurora Genesis** archetype: a contemplative, cinematic dark aesthetic inspired by Dune, Interstellar, and Arrival opening sequences.

> Phase 0 = local build + visual validation. Not yet pushed to GitHub or deployed.

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (custom theme tokens, no UI library)
- **3D**: React Three Fiber + drei + postprocessing (custom GLSL shader)
- **Scroll**: Lenis smooth scroll
- **Motion**: Framer Motion + GSAP/ScrollTrigger-ready
- **Icons**: 100% custom monoline SVG (no Lucide/Phosphor)

## Design system

### Color tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0A0F2C` Aurora Deep | Page background |
| `--bg-elevated` | `#0F1438` | Cards / panels |
| `--text` | `#F6F8FF` Cosmic White | Body / headings |
| `--accent-aurora` | `#00F5FF` | Hero glow, selected state only |
| `--accent-gold` | `#FFD700` | Typography highlights, special CTA |
| `--accent-purple` | `#9B4DFF` | Hover/focus only — never base |
| `--accent-ember` | `#FF4D00` | Single CTA accent |
| `--border` | `rgba(246,248,255,0.08)` | Hairline rules |

### Typography

- **Display**: Tenor Sans (serif), weight 400, letter-spacing 0.02em
- **Body**: Inter, weight 300-400
- **Mono / Labels**: JetBrains Mono, uppercase, letter-spacing 0.15em, 11px

### Anti-slop rules enforced

- No purple-gradient-everywhere (purple appears only on hover, +1 spot)
- No glassmorphism (no `backdrop-filter` on cards)
- No uniform border-radius (intentional asymmetry: 0 / 2px / 0)
- No fake stats (no market cap, no TVL, no supply)
- No Lucide/Phosphor icons (custom monoline SVG only)
- No emoji in UI
- No em-dash spam in copy
- No generic SaaS card grid (asymmetric layout: lead block + 3-cell row)
- Hero is cinematic (WebGL aurora visible, typography dominant)

## Sections (6)

1. **Navigation** — minimal top nav, custom "C" logomark, 3 text links + ghost Enter
2. **Hero** — full-viewport WebGL aurora curtain + 2000-particle starfield + staggered serif headline
3. **GenesisLayer** — first civilization layer intro, custom concentric-rings SVG
4. **TokenUtility** — 4 utility blocks (Governance, Access, Agent Evolution, Protocol Participation)
5. **FinalCTA** — full-bleed closing line + Enter button
6. **Footer** — minimal 3-column + copyright monoline

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project layout

```
app/
  layout.tsx       # root layout, Google Fonts (Tenor / Inter / JetBrains)
  page.tsx         # composes all 6 sections
  globals.css      # design tokens, base layer, CTA primitives, Lenis CSS
components/
  SmoothScroll.tsx # Lenis smooth scroll, lerp 0.08
  canvas/
    AuroraCanvas.tsx   # R3F canvas + EffectComposer (Noise grain)
    AuroraShader.tsx   # Custom GLSL FBM aurora shader
    ParticleField.tsx  # 2000-point starfield
  ui/
    SectionReveal.tsx  # IO-driven scroll reveal
    StaggerHeadline.tsx# Per-character Framer Motion reveal
  icons/
    LogomarkC.tsx      # Custom "C" logomark
    ArrowRight.tsx     # Custom arrow for CTAs
    TokenIcons.tsx     # 4 monoline utility icons
  sections/
    Navigation.tsx
    Hero.tsx
    GenesisLayer.tsx
    TokenUtility.tsx
    FinalCTA.tsx
    Footer.tsx
tailwind.config.ts # color + typography tokens
next.config.mjs     # transpilePackages: ["three"]
```

## Next iteration (Phase 1 suggestions)

1. Real WebGL hero — current shader works but add subtle parallax layers (3 depth planes) and chromatic aberration in post.
2. Replace placeholder stats (`Worlds 01 / Citizens Open / Chapters ∞`) with a Timeline component showing 3 future phases.
3. Animate aurora shader intensity with scroll position (subtle, 5-10% gain over viewport height).
4. Add a "Memory" or "Engine" anchor section that the nav links to (currently `Civilization / Engine / Token` only fully resolve to existing sections).
5. Implement responsive typography tuning for tablet (current breakpoints hit at md=768 / lg=1024).
6. Add a real OG image generator (currently meta only).
7. Whitepaper route + document skeleton (currently anchor only).
8. Accessibility pass: ensure aurora canvas has `aria-hidden`, all decorative SVGs marked.
9. Color scheme dark mode (already on, but verify no light-mode flicker during SSR).

## Status

- [x] Local build runs (`npm run dev` boots cleanly on :3000)
- [x] All 6 sections compose
- [x] WebGL aurora shader renders
- [x] Particle starfield renders
- [x] Lenis smooth scroll active
- [x] Custom monoline SVG icons throughout
- [x] Anti-slop checklist passes
- [x] Git committed locally (Phase 0)
- [ ] **NOT pushed to GitHub yet** — awaiting Marco's visual approval
- [ ] **NOT deployed yet**
