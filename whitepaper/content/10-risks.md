# 9. Risks

Cineora is designed to be honest about what could go wrong. The risks below are categorized by where they originate. None are presented as unlikely; all are sized.

## 9.1 Regulatory

- **United States — securities classification.** The Howey test (*SEC v. W.J. Howey Co.*, 1946) remains the operative framework for whether an asset is an investment contract. $CINE is designed with utility-first parameters — protocol fee revenue accrues to the treasury rather than to holders via passive dividends, voting rights are conditional on engagement, and there is no central party promising returns — but jurisdictional interpretation is uncertain. The protocol maintains a conservative posture: no public marketing targeted at US persons for the token sale, engagement of US securities counsel before any US-facing offering, and ongoing dialogue with the SEC's Crypto Asset Working Group.
- **European Union — MiCA.** The Markets in Crypto-Assets Regulation (Regulation (EU) 2023/1114) requires authorization for asset-referenced tokens and e-money tokens. $CINE is not intended to be either, but the protocol commits to the disclosure obligations in MiCA Title II for any EU-facing offering, and to White Paper publication per Article 6.
- **Sanctions and AML.** The protocol implements OFAC sanctions screening at the wallet level via a Helius-maintained blocklist and reserves the right to geofence specific features in sanctioned jurisdictions.

## 9.2 Technical

- **Smart contract exploits.** Anchor programs are not strictly immutable — they retain an upgrade path controlled by Squads, which is itself a risk vector. Mitigation: the audit program, the bug bounty, the bounded upgrade authority, and the pause guardian described in Section 8.
- **Oracle manipulation.** Pyth and Switchboard price feeds are assumptions in Cinema-layer revenue accounting. The protocol commits to using **Pyth confidence intervals** and rejecting updates whose deviation exceeds a configured threshold, and to automatically rotating the oracle set on any deviation event.
- **Agent hallucination and drift.** Generative agents can produce content that diverges from canon or that violates content policy. Mitigation: the simulation-first execution mode, the bounded autonomy budget, the human co-signature requirement for high-impact actions, and the continuous red-team.
- **Cryptographic obsolescence.** Ed25519 and the SHA-2 family remain secure in 2026, but a 50-year horizon implies at least one cryptographic transition. The protocol commits to a public migration plan and to governance-controlled key rotation rather than silent reliance on the original primitives.

## 9.3 Market

- **Creator economy volatility.** Revenue tied to cultural adoption is inherently cyclical. The buyback-and-burn mechanism is sized to be deflationary in normal regimes and survivable in adverse ones, with the buyback leg redirectable to the treasury by Evolution-layer governance in stress scenarios.
- **AI commoditization.** If foundation model providers vertically integrate into the application layer, the residual capture rate for protocol platforms narrows. The protocol's moat is the on-chain civilization state, not the underlying model, which insulates it from this risk to a degree but not fully.
- **Concentration risk.** In a regime where a small number of worlds dominate cultural attention, the protocol becomes dependent on the continued relevance of those worlds. Mitigation: the world licensing network, the derivative treaty protocol, and the explicit funding of long-tail worlds via the Civilization Pool.

## 9.4 Existential — The Abundance Paradox

The deepest risk is the one the protocol exists to address. If AI generation continues to accelerate without a countervailing mechanism for cultural memory, even a successful protocol may find its audience migrating to whatever is newest. The response is not to compete on novelty but to **increase the cost of forgetting**: persistent worlds, inherited canon, custodians who care. The protocol does not claim to solve the abundance paradox. It claims only to provide one of its possible answers, on a 50-year horizon, with honest measurement of how well it is working.