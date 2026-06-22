# 7. Security

Security at Cineora is treated as a continuous engineering discipline, not a launch-day deliverable. The program below is structured to make security properties measurable rather than aspirational.

## 7.1 Audit Program

Before mainnet, the Anchor program set (`cineora-core`, `cineora-living-scene`, `cineora-royalty`, `cineora-legacy`) is engaged with three independent firms on a **rotating lead auditor** model:

- **Trail of Bits** — lead auditor on `cineora-core` and `cineora-legacy`.
- **OtterSec** — lead auditor on `cineora-living-scene` and Metaplex Core extensions, given their prior work on Metaplex.
- **Neodyme** — lead auditor on `cineora-royalty` and on the integration with Squads v4 and Realms.

Each audit is preceded by a four-week **threat-modeling sprint** and a **fuzzing campaign** using **Trident** (Anchor's fuzzing harness). Findings are tracked to closure in a public repository; no critical or high-severity issue ships to mainnet. Re-audits are scheduled every twelve months for any program that has been upgraded.

## 7.2 Bug Bounty

A standing bug bounty is hosted on **Cantina** with the following tiered rewards:

- **Critical:** up to **USD 500,000**
- **High:** up to **USD 100,000**
- **Medium:** up to **USD 25,000**
- **Low / Informational:** up to **USD 2,500**

Scope explicitly includes the Anchor program set, the Realms configurations, the Squads multisig configuration, the off-chain indexing layer, and the agent tool interfaces. Agent behavior itself is out of scope for bounty but in scope for the responsible disclosure program described in Section 7.3.

## 7.3 Agent Safety

Agent actions are gated by three controls operating in combination:

1. A **bounded autonomy budget** per agent, configurable per world via governance. No agent may exceed its budget in a single epoch without human co-signature.
2. A **simulation-first execution mode** that requires human co-signature for any action that would move more than a configured $CINE threshold or alter canonical Memory entries.
3. A **continuous red-team** that exercises the agent mesh against adversarial prompts and attempts to exfiltrate signing keys. Findings are reported through the same disclosure channel as the bug bounty.

## 7.4 Incident Response Framework

Incidents are classified **SEV-1** through **SEV-4** and follow a four-phase protocol: (1) **Detect and Triage** within 30 minutes of detection, (2) **Contain** via the Squads guardian powers (program pause, oracle rotation), (3) **Eradicate and Patch**, (4) **Postmortem and Disclosure** with a public report within 14 days for SEV-1 and SEV-2 incidents. A **watchtower service** runs against Helius webhooks and Pyth deviation alerts to ensure detection latency is bounded.

## 7.5 Disaster Recovery

All program authority is held by Squads multisig with members in at least three independent jurisdictions. State commitments are mirrored on **Arweave** for permanent archival of critical world state, and a quarterly **chaos drill** exercises end-to-end recovery from a simulated key compromise. Recovery runbooks are public and version-controlled.