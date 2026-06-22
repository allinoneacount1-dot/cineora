# 5. Economics — $CINE

The economic design of Cineora is governed by a single constraint: **a token economy that must remain functional across 10-, 25-, and 50-year horizons, not quarterly ones**. The parameters below are chosen to make that constraint legible.

## 5.1 Supply

`$CINE` has a **fixed maximum supply of 1,000,000,000 (one billion) tokens**, with no further minting authority beyond the emissions schedule defined below. The supply cap is enforced by a program-level invariant that rejects any transaction that would breach it.

## 5.2 Initial Allocation

At the Genesis event, $CINE is allocated as follows:

| Bucket | Share | Cliff | Vesting |
|---|---|---|---|
| World & Ecosystem Treasury | **35%** | 0 | Emitted per the schedule below |
| Community & Airdrop | **18%** | 6 months | 36 months linear |
| Core Team | **15%** | 12 months | 48 months linear |
| Ecosystem Grants | **12%** | 0 | Discretionary, capped per quarter |
| Public Sale | **8%** | 0 | Fully unlocked at TGE |
| Liquidity Provisioning | **7%** | 0 | Locked with market makers |
| Advisors | **3%** | 6 months | 24 months linear |
| Strategic Reserve | **2%** | 12 months | Governance-controlled |

The treasury allocation is the largest single bucket by design. It exists to fund the civilization, not to enrich early holders. No single allocation exceeds the treasury's, and team/advisor allocations together (18%) are smaller than the community bucket (18%) on their own.

## 5.3 Revenue Recycling — Burn and Buyback

The protocol applies a uniform **protocol fee of 5%** to all Cinema-layer transactions (viewership, licensing, commerce). This fee is split **50/50**:

- **50% burn** — sent to an incinerator address with no private key, permanently removing the tokens from supply.
- **50% buyback** — used to repurchase $CINE from the open market and route it back into the world treasury for grants and incentives.

This dual mechanism ensures that as the protocol earns, supply contracts. In adverse regimes the buyback leg may be temporarily redirected to the treasury at the discretion of Evolution-layer governance, but the burn leg is unconditional.

## 5.4 Emissions Schedule

Treasury and ecosystem grant tokens are released on a **four-year halving cycle**:

- **Years 1–4:** 5.5% of remaining treasury budget per year.
- **Years 5–8:** 2.75%.
- **Years 9–12:** 1.375%.
- **Years 13+:** emissions cease when the treasury is exhausted; thereafter, the protocol runs on revenue recycling alone.

This produces an asymptote rather than an infinite dilution curve. By Year 12, more than **70% of total supply** is in circulation, and the remaining 30% is reserved for extraordinary civilization-level events (catastrophic security response, foundational grant rounds, cross-protocol integrations).

## 5.5 Sustainability Across 10, 25, and 50 Years

- **10 years.** The protocol is emission-funded. Treasury grants dominate; buybacks are a modest tailwind. The risk surface is concentration: if the top worlds underperform, treasury burns faster than expected.
- **25 years.** Emissions have decayed by approximately **97%** versus Year 1. Revenue recycling is the primary funding source. World treasuries are self-sustaining from royalty flows. The protocol's defensibility is the on-chain civilization state, not new token issuance.
- **50 years.** The protocol operates as a closed economic loop. Buyback-and-burn is the principal supply-side lever. The circulating supply trends gently downward, with the deflation rate tied to cultural adoption rather than speculative volume. New $CINE enters circulation only via loss-recovery and forgotten-vault unlocks, both of which are governance-controlled.

## 5.6 Agent Economy

Each AI agent in the mesh has a sub-account on the world treasury that earns $CINE for measurable contribution — a render accepted by the Director, a dialogue line adopted into canon, a lore entry cited by another agent. Agents also spend $CINE: on inference compute, on memory reads, on tool calls to external services. The agent economy is a closed system per world, which makes per-world token velocity legible rather than smeared across the whole protocol.

## 5.7 Civilization Economy

A small fraction of every transaction — **0.5%** — accrues to the **Civilization Pool**, a protocol-wide fund governed by Evolution-layer proposals. This is what distinguishes a civilization protocol from a marketplace: a portion of every interaction is owned by the whole, and is available for cross-world initiatives (scholarships, archival grants, public-domain remixes). The pool's balance and disbursements are publicly reported on-chain each epoch.