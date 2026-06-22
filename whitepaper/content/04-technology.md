# 3. Technology

Cineora's technical stack is deliberately conservative in its choices and ambitious in its composition. Each component is a mature, named system rather than a speculative dependency.

## 3.1 Cinematic Rendering — React Three Fiber, Three.js, WebGPU

The visual layer is built on **React Three Fiber (R3F)** with **three.js** as the underlying renderer and **WebGPU** as the GPU primitive where supported, falling back to WebGL2 on legacy devices. R3F provides a declarative scene graph that fits naturally with the protocol's component-based product surface, while three.js supplies the cinematic primitives: physically based materials, bloom, depth-of-field, anamorphic lens shaders, film grain, and volumetric lighting. The target frame rate is a hard **60 fps** on mid-range 2023-era hardware, validated by a continuous Playwright benchmark suite.

All cinematic transitions are implemented as **GSAP timelines** composed against deterministic state machines rather than ad-hoc CSS, which makes animations reproducible across sessions and re-runnable for agent previews.

## 3.2 On-Chain Programs — Anchor, Metaplex, Squads, Realms

Solana programs are authored in **Rust** using the **Anchor** framework. The protocol's program set includes:

- **cineora-core** — world account, scene account, character account, and PDA derivation logic.
- **cineora-living-scene** — Metaplex Core extensions that permit scenes to carry mutable on-chain state (atmosphere, time-of-day, lore pointers) rather than functioning as static metadata blobs. This is the substantive meaning of *Living Scene NFTs*.
- **cineora-royalty** — secondary royalty distribution engine with programmable splits for creators, collaborators, agents, and the treasury.
- **cineora-legacy** — inheritance, custodian rotation, and dormancy recovery for worlds whose original creator has been inactive for a configured period.

Treasury custody is provided by **Squads v4** multisig, and governance by **Realms DAO**. Both are battle-tested primitives rather than custom implementations.

## 3.3 Oracles and Indexing

Price and time references are sourced from **Pyth** (primary) with **Switchboard** as a fallback oracle for redundancy. World state is not stored on-chain in raw form; instead, on-chain accounts store **commitments** (cryptographic hashes) to off-chain scene state held in user-controlled storage (IPFS, Arweave, or self-hosted), with the off-chain blob addressable via the on-chain hash. This pattern keeps Solana rent costs bounded while preserving verifiability.

**Helius** provides the indexing layer. The protocol depends on the Helius **Digital Asset Standard (DAS) API** for fast asset lookup, transaction history enrichment, and webhook delivery into the agent mesh. Custom indexing is added only where DAS is insufficient.

## 3.4 AI Agent Mesh

Sixteen specialized agents (Director, Screenwriter, Cinematographer, Composer, Lore, Narrative, Actor, Dialogue, VFX, Community, Economy, Governance, Archivist, Memory, World Architect, and QA) operate inside a shared **agent mesh**. Each agent:

- exposes a typed tool interface;
- is bound to a configurable autonomy budget (the set of on-chain actions it may take without human co-signature);
- maintains an append-only memory log addressed by content hash; and
- has its own economic identity — a sub-account on the world treasury that earns and spends $CINE according to measurable contribution.

Agent execution happens **off-chain by default**, with only the resulting commitments and signatures recorded on-chain. This preserves throughput and keeps the user experience responsive.

## 3.5 State Compression and Rent Economics

Solana's **state compression** (introduced with cNFTs and generalized via Bubblegum-style Merkle trees) is used for high-volume scene metadata — particularly dialogue lines, ambient sounds, and crowd shaders — where per-account rent would be prohibitive. Owner authority over compressed assets remains cryptographically intact.

## 3.6 Off-Chain Stack

The serving tier runs on **Next.js** at the edge (Vercel), with **Postgres** for relational world data, **Redis** for ephemeral agent memory, and **vector stores** (Qdrant) for semantic retrieval across world lore. The intent is that no user-visible latency above **300 ms** is attributable to backend architecture.