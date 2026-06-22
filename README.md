# CINEORA

> **The Living Cinematic Civilization**
> Where imagination becomes ownership, ownership becomes legacy, and legacy becomes immortality.

Cineora is a protocol for transforming cinematic stories into persistent, ownable, evolvable digital civilizations — built on Solana, rendered with cinematic-grade motion, and governed by creators and communities.

This repository contains the public-facing website and the institutional whitepaper. Phase 0 (Aurora Genesis) is in progress.

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) + TypeScript | Server components, fast iteration, proven production posture |
| Styling | Tailwind CSS + custom design tokens | Aurora palette bridged to utility classes |
| Motion | React Three Fiber + Three.js + WebGPU (path) + GLSL shaders | Cinematic-grade rendering at 60fps |
| Smooth scroll | Lenis | Native-feeling scroll for cinematic pacing |
| UI animation | Framer Motion + GSAP | Staggered reveals, section choreography |
| Postprocessing | @react-three/postprocessing | Film grain, color grading, anamorphic feel |
| Icons | Custom SVG (no Lucide, no Phosphor) | Identity-owned mark and glyphs |

---

## Repository layout

```
cineora/
├── app/                          # Next.js App Router entry
│   ├── globals.css               # Aurora design tokens + base layer
│   ├── layout.tsx                # Fonts (Inter / Tenor Sans / JetBrains Mono)
│   └── page.tsx                  # Landing composition
├── components/
│   ├── canvas/                   # R3F: AuroraCanvas + AuroraShader + ParticleField
│   ├── icons/                    # Custom SVG: LogomarkC, TokenIcons, ArrowRight
│   ├── sections/                 # Hero · Manifesto · SevenLayers · GenesisLayer · TokenUtility · FinalCTA · Footer
│   ├── ui/                       # StaggerHeadline · SectionReveal
│   └── SmoothScroll.tsx          # Lenis wrapper
├── whitepaper/
│   └── content/                  # 12-section institutional whitepaper + index.json
├── MASTER_PROMPT.md              # Source-of-truth project brief
└── tailwind.config.ts            # Aurora color tokens + cinematic timing
```

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (smoke test)
```

Verified build size: ~52 kB page / ~139 kB First Load JS.

---

## Whitepaper

Located in `whitepaper/content/`. Twelve sections, ~6,000 words total, sourced from PwC, Goldman Sachs, Grand View Research, McKinsey, and Statista. Index + per-section summaries in `whitepaper/content/index.json`.

---

## Current phase

**Phase 0 — Aurora Genesis** (in progress)
- Landing skeleton: Hero · Manifesto · SevenLayers overview · GenesisLayer deep dive · TokenUtility · FinalCTA · Footer
- Whitepaper v1.0.0 draft complete

Up next: live interactive demo, agent marketplace, civilization dashboard, investor deck, HTML-rendered whitepaper.

---

## License

Project source — © 2026 Cineora Foundation. All chapters reserved.
Whitepaper content — institutional reference, no public license yet (forthcoming).