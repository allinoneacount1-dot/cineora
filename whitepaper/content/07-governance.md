# 6. Governance

Governance in Cineora is intentionally boring. It is built from two named, audited primitives — **Realms** for voting and **Squads v4** for treasury custody — and from a small set of explicit thresholds. The objective is to make decisions traceable, slow where they must be slow, and cheap where they can be cheap.

## 6.1 Structure

- **Creator DAO** — the protocol-wide governance body, deployed on Realms, with delegated voting. Membership is open to any wallet that has held $CINE for at least 30 days.
- **World Councils** — per-world governance bodies, each with its own Realms instance, governing parameters that affect only that world (Aurora profile changes, canon edits, agent autonomy budgets). Members are recruited by the world's Legacy Constitution.
- **Squads Treasury** — the protocol-level treasury, secured by a **7-of-11 multisig** with members distributed across at least three independent jurisdictions. Squads is the only account type that may move funds from the protocol treasury.

## 6.2 Voting Thresholds

| Proposal Category | Proposal Deposit | Quorum | Approval | Timelock |
|---|---|---|---|---|
| World parameter change | 1,000 $CINE | 4% of circulating supply | Simple majority | 24 hours |
| Canon edit | 5,000 $CINE | 6% | Supermajority (60%) | 48 hours |
| Agent autonomy adjustment | 10,000 $CINE | 8% | Supermajority (60%) | 72 hours |
| Treasury grant (≤ USD 250k) | 25,000 $CINE | 10% | Simple majority | 48 hours |
| Treasury grant (> USD 250k) | 100,000 $CINE | 15% | Supermajority (60%) | 7 days |
| Protocol upgrade (Evolution) | 250,000 $CINE | 20% | Supermajority (75%) | 14 days |

Failed proposals forfeit their deposit to the Civilization Pool, which prevents low-cost governance spam and recycles the cost into the public good.

## 6.3 Reputation and Delegation

Voting power is the **greater of** $CINE holdings or **Reputation Token** balance, with a per-account cap of **2%** to prevent single-actor dominance. Reputation Tokens are non-transferable, earned by verifiable contribution (agent submissions accepted into canon, world engagement, governance participation), and decay by **10% annually** to require continued engagement. Delegation is permitted and revocable at any time.

## 6.4 Proposal Categories

Proposals fall into four categories: **operational** (parameter tuning), **allocative** (treasury movements), **constitutional** (Legacy, governance, agent autonomy), and **evolutionary** (protocol-level). The category determines the threshold above; mis-categorized proposals are rejected automatically and the deposit returned.

## 6.5 Emergency Powers

The multisig may execute a narrow set of **guardian actions** — pausing a specific program in response to an active exploit, rotating an oracle, freezing a compromised wallet — without a vote. Every guardian action is **timelocked for 72 hours** before execution, is publicly logged with a written justification, and is automatically reversed unless ratified by a subsequent vote within 30 days. Guardian actions are restricted to a hardcoded allowlist; the multisig cannot move treasury funds under this power.