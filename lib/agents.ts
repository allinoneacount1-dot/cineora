/**
 * 16 AGENTS — the Agent Mesh of Cineora's Living Cinema Engine.
 * Each agent has a role + capability + custom SVG glyph.
 */

export type Agent = {
  id: string;
  name: string;
  role: string;
  description: string;
  capabilities: string[];
  glyph:
    | "director"
    | "screenwriter"
    | "cinematographer"
    | "composer"
    | "lore"
    | "narrative"
    | "actor"
    | "dialogue"
    | "vfx"
    | "community"
    | "economy"
    | "governance"
    | "archivist"
    | "memory"
    | "world-architect"
    | "outreach";
};

export const AGENTS: Agent[] = [
  {
    id: "director",
    name: "Director",
    role: "Creative authority for a world",
    description:
      "Holds the creative vision. Coordinates the agent mesh, arbitrates aesthetic conflicts, and signs off on canon-level decisions inside a civilization.",
    capabilities: ["Vision arbitration", "Agent orchestration", "Canon signing"],
    glyph: "director",
  },
  {
    id: "screenwriter",
    name: "Screenwriter",
    role: "Narrative structure & arc",
    description:
      "Builds the structural spine of every cinematic chapter — three-act arcs, branching forks, scene sequencing. Lives close to the Lore and Narrative agents.",
    capabilities: ["Arc design", "Plot forking", "Beat sheets"],
    glyph: "screenwriter",
  },
  {
    id: "cinematographer",
    name: "Cinematographer",
    role: "Camera, light, frame",
    description:
      "Translates narrative intent into camera language. Owns shot composition, lens choice, light direction, and the cinematic grammar of every scene.",
    capabilities: ["Shot composition", "Lighting design", "Camera motion"],
    glyph: "cinematographer",
  },
  {
    id: "composer",
    name: "Composer",
    role: "Score, ambience, sound design",
    description:
      "Authors the sonic identity of a civilization. Scores for emotion, ambience for immersion, sound design for verisimilitude. Adapts to narrative tempo.",
    capabilities: ["Adaptive scoring", "Ambience layering", "Sound design"],
    glyph: "composer",
  },
  {
    id: "lore",
    name: "Lore",
    role: "Continuity & canon keeper",
    description:
      "Maintains the canon of a civilization. Resolves contradictions, encodes canonical history, and gates narrative additions against established fact.",
    capabilities: ["Canon gating", "World bible", "Continuity resolution"],
    glyph: "lore",
  },
  {
    id: "narrative",
    name: "Narrative",
    role: "Branching story mechanics",
    description:
      "Owns the branching tree of a world's story. Generates forks, resolves convergences, and tracks which path any given citizen is on.",
    capabilities: ["Story forking", "Path tracking", "Convergence logic"],
    glyph: "narrative",
  },
  {
    id: "actor",
    name: "Actor",
    role: "Character embodiment",
    description:
      "Embodies characters with consistent voice, motivation, and emotional range. Drives dialogue scenes and supports character-driven arcs.",
    capabilities: ["Voice consistency", "Emotional range", "Character motivation"],
    glyph: "actor",
  },
  {
    id: "dialogue",
    name: "Dialogue",
    role: "Conversation & voice",
    description:
      "Composes spoken lines in-character. Honors each character's voice, rhythm, and vocabulary. Handles multi-party conversation branching.",
    capabilities: ["In-character lines", "Conversation trees", "Subtext"],
    glyph: "dialogue",
  },
  {
    id: "vfx",
    name: "VFX",
    role: "Visual effects & atmosphere",
    description:
      "Generates environmental effects — weather, atmosphere, magical systems, sci-fi phenomena. Anchors the world's physics in visible behavior.",
    capabilities: ["Atmosphere", "Physics-coded VFX", "Environmental effects"],
    glyph: "vfx",
  },
  {
    id: "community",
    name: "Community",
    role: "Audience interaction layer",
    description:
      "Bridges the citizens with the world. Aggregates proposals, surfaces feedback, and routes contributions to the appropriate agents.",
    capabilities: ["Proposal routing", "Feedback synthesis", "Citizen onboarding"],
    glyph: "community",
  },
  {
    id: "economy",
    name: "Economy",
    role: "World treasury & flow",
    description:
      "Manages the in-world economy. Routes creator royalties, treasury flows, and citizen earnings. Ensures economic invariants hold across all actions.",
    capabilities: ["Royalty routing", "Treasury invariants", "Earnings flows"],
    glyph: "economy",
  },
  {
    id: "governance",
    name: "Governance",
    role: "DAO & proposal execution",
    description:
      "Executes governance decisions from the Creator DAO. Implements voting outcomes, applies parameter changes, and logs every constitutional action.",
    capabilities: ["DAO execution", "Parameter updates", "Constitutional logs"],
    glyph: "governance",
  },
  {
    id: "archivist",
    name: "Archivist",
    role: "Long-term persistence",
    description:
      "Ensures that no part of a civilization is lost. Indexes every scene, dialogue, character decision, and audience contribution across the world's full lifespan.",
    capabilities: ["Full-history indexing", "Retrieval APIs", "Lossless backup"],
    glyph: "archivist",
  },
  {
    id: "memory",
    name: "Memory",
    role: "Cross-chapter continuity",
    description:
      "Reads and writes the world's Memory log. Maintains narrative continuity across chapters and ensures that no scene contradicts any prior canonical event.",
    capabilities: ["Memory log I/O", "Continuity enforcement", "Canon queries"],
    glyph: "memory",
  },
  {
    id: "world-architect",
    name: "World Architect",
    role: "Top-level world structure",
    description:
      "Designs the underlying architecture of a world — its geography, factions, history, and metaphysics. Sets the boundaries inside which other agents operate.",
    capabilities: ["World design", "Faction systems", "Metaphysics encoding"],
    glyph: "world-architect",
  },
  {
    id: "outreach",
    name: "Outreach",
    role: "External narrative ambassador",
    description:
      "Speaks on behalf of the civilization to the outside world. Generates trailers, lore drops, and PR artifacts. Earns the next citizen's first hour.",
    capabilities: ["Trailer generation", "Lore drops", "PR artifact authoring"],
    glyph: "outreach",
  },
];