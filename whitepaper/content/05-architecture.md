# 4. Architecture — The Seven Civilization Layers

Cineora is structured as seven stacked layers, each of which corresponds to a distinct phase in the life of a cinematic world. A layer is not merely a software module; it is a contract between the protocol and the world about what the world is allowed to become. The seven layers are **Aurora, Genesis, Memory, Legacy, Cinema, Governance, and Evolution**, ordered from the outermost (rendered) to the innermost (the protocol itself).

## 4.1 Aurora — The Rendered Surface

**Purpose.** Aurora is what the audience sees. It is the visible, cinematic surface of a world: its palette, its light, its transitions, its texture. Aurora answers the question, *what does this civilization feel like?*

**Mechanic.** Every world on Cineora declares an **Aurora profile** — a signed bundle of shaders, color tokens, motion graphs, and audio beds drawn from the protocol's design system (Aurora Deep `#0A0F2C`, Aurora Glow `#00F5FF`, Golden Legacy `#FFD700`, Ethereal Purple `#9B4DFF`, Teal Grade `#00B4A8`, Cinematic Ember `#FF4D00`, Cosmic White `#F6F8FF`). Profiles are deterministic and hash-stable so that an Aurora can be audited and replicated across devices.

**Economic function.** Aurora profiles are minted as on-chain assets and may be licensed, remixed, and inherited. Royalty splits flow to the original artist, the world treasury, and the protocol treasury in fixed proportions, ensuring that visual authorship is a durable economic identity.

## 4.2 Genesis — The Creation Layer

**Purpose.** Genesis is where worlds are born. It houses the **World Builder**, **Character Genesis**, **Narrative Genome**, and the **Director** agent — the four primitives through which an empty canvas becomes a populated universe.

**Mechanic.** Genesis requires a creator to deposit $CINE into a world account as a **commitment bond**, which is released across the first year of the world's life in proportion to measured engagement. This discourages throwaway world launches and aligns long-term incentives between creator and audience.

**Economic function.** Genesis fees fund the agent mesh's compute and the protocol's grant program. Genesis royalties continue to accrue to the original creator across the lifetime of the world, including from derivative and inherited works, so that the act of world-creation remains a permanently rewarded act.

## 4.3 Memory — The Continuity Layer

**Purpose.** Memory is what prevents a world from resetting. It captures the canon of a civilization: lore entries, character histories, dialogue trees, scene mutations, and audience contributions that survived governance review.

**Mechanic.** Memory is implemented as a **content-addressed append-only log** per world, mirrored on-chain via Merkle roots and off-chain in user-controlled storage. Agents read from this log to maintain narrative continuity; they cannot silently rewrite it. Edits to canon require governance approval and are themselves recorded as new entries rather than destructive overwrites.

**Economic function.** Memory entries are individually mintable, can carry royalties to their authors, and are tradable as canonical artifacts. A particular dialogue line that became culturally significant can therefore acquire a measurable economic identity without the world itself being commodified.

## 4.4 Legacy — The Sovereignty Layer

**Purpose.** Legacy determines **who owns the world across generations**. It encodes inheritance rules, custodian rotation, dormancy recovery, and licensing terms for derivative works.

**Mechanic.** Every world declares a **Legacy Constitution**: a structured document specifying (a) the primary beneficiary, (b) successor rules in case of inactivity, (c) dormancy thresholds (default: 365 days without a creator-signed action), and (d) licensing defaults for derivative worlds. Legacy Constitutions are themselves versioned on-chain and governable, with the strictest amendment threshold in the protocol.

**Economic function.** Legacy assigns durable economic identity to a civilization. It is the layer that makes a 50-year horizon thinkable, because ownership survives its original creator and the world cannot be silently captured by platform decay or key loss.

## 4.5 Cinema — The Distribution Layer

**Purpose.** Cinema is the layer through which a world reaches an audience: **Virtual Cinema** rooms, **World Licensing Network** deals, **Audience Participation Layer** interactions, and **Cinematic Commerce** integrations.

**Mechanic.** Cinema supports both synchronous (live audience) and asynchronous (scene replay) viewing modes. Every viewership event writes a lightweight usage receipt on-chain, which is the basis for revenue distribution. Receipts are privacy-preserving: viewer identity is cryptographically separated from viewing record unless the viewer opts in to public attribution.

**Economic function.** Cinema is where the protocol earns. A configured share of every view, license, and commerce transaction flows to the world treasury and to $CINE holders via the buyback mechanism described in Section 6. Cinema is therefore the engine that funds every other layer.

## 4.6 Governance — The Coordination Layer

**Purpose.** Governance is how a world makes collective decisions about its own future: parameter changes, agent autonomy adjustments, canon edits, treasury allocations, and inter-world treaties.

**Mechanic.** Governance runs on **Realms** with delegated voting weighted by **Reputation Tokens** (non-transferable, earned by contribution) and by $CINE holdings. Proposal categories and thresholds are defined in Section 7. Every world has its own governance scope; cross-world treaties require both worlds to vote.

**Economic function.** Governance votes have explicit economic weight: a quorum is required to prevent voter apathy, and unsuccessful proposals cost a small slashing fee to prevent spam. Reputation decay ensures that governance weight tracks continued engagement rather than historical accumulation.

## 4.7 Evolution — The Meta Layer

**Purpose.** Evolution governs the **protocol itself**, not any single world. It decides when the agent mesh upgrades, when a new layer is added, when cryptographic primitives are rotated, and when the civilization's constitution is amended.

**Mechanic.** Evolution proposals require the highest quorum and longest review period in the protocol (see Section 7). Evolution proposals are public, time-locked, and reversible only by a supermajority. They are the only category that may modify the seven-layer architecture itself.

**Economic function.** Evolution proposals may themselves trigger emissions or burns, but only under explicit, capped formulas to prevent governance capture from manipulating the token supply. The Civilization Pool (Section 6) is the only economic resource Evolution may reallocate.