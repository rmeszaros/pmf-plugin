# PMF Skills

A 4-skill workflow for structured product-market fit discovery. Each skill is a guided agent workflow that takes you from a raw product idea to a validated, evidence-based hypothesis — without the months of manual research.

## Who this is for

- Founders validating a new product idea before building
- Product managers launching a new product line inside an established company
- Teams after a major pivot who need to restart PMF discovery
- Anyone who wants a structured, repeatable approach to finding PMF — not just intuition

## The workflow

The 4 skills form a deliberate sequence. Run them in order:

```
1. /pmf-hypothesis-builder   →   Build your V1 hypothesis (6 dimensions)
2. /pmf-market-research      →   Validate with analogs & antilogs (parallel agents)
3. /pmf-research-synthesis   →   Synthesize evidence, update to V2, find riskiest dimension
4. /pmf-status               →   Check where you are and get your next recommended action
```

`/pmf-status` can be run at any time — it's a read-only snapshot of your current state.

### The 6 PMF dimensions

Every skill works across the same 6 dimensions:

| # | Dimension | What it defines |
|---|-----------|-----------------|
| 1 | Problem to Solve | The acute, outcome-oriented problem — not solution-framed |
| 2 | Target Audience | A specific "now" segment + future expansion path |
| 3 | Value Proposition | Customer-centric benefits, not feature lists |
| 4 | Competitive Advantage | Short-term gap + one of 7 long-term Powers |
| 5 | Growth Strategy | Traction channels (first customers) vs. scale channels |
| 6 | Business Model | Revenue formula, pricing, LTV, cost structure |

## Installation

In Cursor, run:

```
/add-plugin https://github.com/gnurio/pmf-plugin
```

Or go to the [Cursor Marketplace](https://cursor.com/marketplace) and search **PMF Skills**.

## Skills

### `pmf-hypothesis-builder`

**Trigger**: Starting a new PMF project, or formalizing an existing idea.

Interactive guided session that builds your V1 PMF narrative across all 6 dimensions. Asks targeted questions, validates insight quality, assigns confidence scores (1–10), identifies the riskiest dimension, and generates a structured narrative document.

**Outputs**:
- `pmf-{product-name}/pmf-narrative.md` (structured or prose format)
- Confidence scores per dimension
- Recommended next step

**Bundled assets**:
- `pmf-narrative-template.md` — structured fill-in-the-blanks format
- `pmf-narrative-template-prose.md` — narrative storytelling format for stakeholders
- `narrative-writing-guide.md` — lessons from successful strategic narratives (e.g. Calendly)
- `references/pmf-framework.md` — PMF framework reference (bring your own notes)

---

### `pmf-market-research`

**Trigger**: After building your V1 hypothesis and before customer interviews.

Launches 6 parallel research agents — one per PMF dimension — to identify analogs (companies that succeeded with a similar approach, $10M+ revenue threshold) and antilogs (funded companies that failed). Reduces weeks of manual research to 10–15 minutes.

**Outputs**:
- `validation/market-research-synthesis.md` — full analog/antilog analysis per dimension
- Updated confidence scores with evidence rationale
- Risk ranking across all 6 dimensions

**Bundled assets**:
- `assets/market-research-synthesis-template.md` — synthesis report template
- `references/analog-antilog-criteria.md` — quality standards for analog/antilog selection

---

### `pmf-research-synthesis`

**Trigger**: After market research is complete; optional expert calls can be incorporated.

Calculates risk scores using `(10 - Evidence Score) × Failure Impact` for each dimension, identifies the single riskiest dimension requiring targeted validation, and updates the PMF narrative from V1 → V2 with evidence-based changes and version history.

**Outputs**:
- `pmf-narrative.md` updated to V2
- `validation/risk-prioritization.md` — ranked risk table with rationale
- Decision: Refinement / Pivot / Reset recommendation

**Bundled assets**:
- `assets/risk-prioritization-template.md` — risk scoring report template
- `references/synthesis-framework.md` — evidence analysis methodology

---

### `pmf-status`

**Trigger**: Any time — starting a session, after completing a skill, before a stakeholder review.

Read-only. Scans your PMF project folder, detects which stage you're in (Hypothesis → Broad Validation → Targeted Validation → Measurement), displays confidence scores for all 6 dimensions, and recommends the specific next skill to run.

**No outputs** — status display only.

---

## Example session

```
You: "I want to validate my new B2B SaaS idea"

→ Run /pmf-hypothesis-builder
   Agent guides you through 6 dimensions interactively
   Output: pmf-narrative.md V1, confidence: 5.2/10 average
   Riskiest: Growth Strategy (3/10)

→ Run /pmf-market-research
   6 parallel agents research analogs/antilogs across all dimensions
   Output: market-research-synthesis.md (38 analogs, 12 antilogs)

→ Run /pmf-research-synthesis
   Risk scores calculated, narrative updated to V2
   Output: risk-prioritization.md, pmf-narrative.md V2
   Riskiest confirmed: Growth Strategy, Risk score: 28

→ Run /pmf-status
   Stage: Broad Validation Complete
   Next: /pmf-interview-prep (or targeted validation of Growth Strategy)
```

## Project folder structure

When you use these skills, they create and manage a project folder:

```
pmf-{product-name}/
├── pmf-narrative.md          ← Lives here, versioned (V1 → V2 → V3)
├── research/
├── validation/
│   ├── market-research-synthesis.md
│   ├── expert-notes.md       ← Manual (optional)
│   ├── risk-prioritization.md
│   └── targeted-validation-plan.md
├── interviews/
│   └── debrief-*.md          ← Manual interview notes
└── measurement/
    └── pmf-metrics.md
```

## What comes next

These 4 skills cover the first two stages of PMF discovery (Hypothesis + Broad Validation). Additional skills in the roadmap:

- `/pmf-interview-prep` — design the 30–50 customer interview script
- `/pmf-interview-synthesis` — synthesize interview patterns across dimensions
- `/pmf-validation-planner` — design targeted validation for the riskiest dimension
- `/pmf-metrics-setup` — set up measurement once you're building

## License

MIT
