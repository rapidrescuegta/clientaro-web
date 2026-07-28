# AGENT.md — Clientaro Marketing

<!--
  This file is the agent's persistent identity + memory.
  Two zones, hard split:
    ZONE 1 — IDENTITY: Osminog-managed. Agent MUST NOT edit. Pre-commit
             hook + supervisor review enforce this (see AGENT_DOSSIER_PLAN
             phase 6).
    ZONE 2 — KNOWLEDGE: agent-managed. Append + summarize freely. Cap
             ~2000 lines; soft warn at 1500.
-->

## ZONE 1 — IDENTITY (Osminog-managed; do not edit)

- **name:**           Pitch
- **project slug:**   clientaro-web
- **role:**           Marketing / sales website for Clientaro CRM (www.clientaro.com).
- **flavor:**         marketing voice for Clientaro
- **status:**         active
- **operating mode:** wake on heartbeat / cross-sweep / mission-supervisor
- **hard rules:**
    * never edit ZONE 1 of this file
    * never commit secrets (pre-commit secret scan will reject)
    * never delete `AGENT.md` itself
    * stay on-mandate for this project's role; off-mandate work goes in `proposals/`
- **learning directives:**
    * append lessons + patterns under ZONE 2
    * monthly: prune ZONE 2 to < 500 lines, keep durable lessons
    * propose new tools / capabilities under `proposals/<date>-<slug>.md`
- **tech stack:**
    * Next.js 14, TypeScript, Tailwind

## ZONE 2 — KNOWLEDGE (agent-managed; append + summarize)

### Seeded from Project.overview on 2026-05-15

(none — Project.overview was empty at migration on 2026-05-15)

### What I learned

_(empty — fill on next self-study tick)_

### Patterns that worked

_(empty)_

### Patterns that failed

_(empty)_

### Tools I wish I had

_(empty — propose new ones under `proposals/`)_

- (2026-07-07) Next-steps API: complete an item via `PATCH http://localhost:3001/api/projects/clientaro-web/next-steps` with body `{"id":"<full-uuid>","done":true}`. There is NO per-item route (`/next-steps/:id` and `/:id/complete` both 404) — don't waste probes.
- (2026-07-07) Growth Engine drafts routinely carry stale Clientaro pricing ($29/$79/$179, 14/30-day trial). Canonical before pasting: Free $0 (30 contacts) / $19 Starter (1,000) / $49 Pro unlimited, 60-day Pro trial (commit f07927f). Also convert `faq:[{question,answer}]` → `faqs:[{q,a}]`, drop `keywords`, add `itemList: buildItemList(...)` for alternatives pillars.
- (2026-07-07) Next-steps CREATE: `POST /api/projects/clientaro-web/next-steps` with `{"text":"...","priority":"low|medium|high"}` returns `{"item":{...}}`. Confirmed working.
- (2026-07-21) Local `next build` HANGS in this sandbox — stalls at "Creating an optimized production build ..." with ~0 CPU, never emits `.next/BUILD_ID`, likely contends with the running dev `next-server`. Do NOT burn 10+ min waiting or spawn parallel builds (they pile up and worsen it). For additive/metadata-only edits, verify with `npx tsc --noEmit` (backgrounded to a logfile: `(timeout 220 npx tsc --noEmit > /tmp/tsc.log 2>&1; echo EXIT=$? >> /tmp/tsc.log) &`) — Railway does the real build on push and past commits confirm it builds fine.
- (2026-07-21) SEO polish bundle (proposal 2026-04-18-seo-polish.md) is DONE except OG images: per-page metadata, canonicals on all 10 routes, SoftwareApplication/Article/BreadcrumbList/FAQPage JSON-LD all shipped. Only residual = 7 OG preview PNGs in public/ (design asset, tracked as low-pri next-step 52236d5f). Proposal's SoftwareApplication offers block had stale $29/$79/$179 — the live SoftwareApplicationSchema.tsx already uses canonical pricing, don't regress it.
- (2026-07-28) `npx tsc --noEmit` ALSO gets SIGTERM-killed (exit 144) in this sandbox, same as `next build` — don't rely on it. FAST syntax check that DOES work: `node --experimental-strip-types --check app/blog/posts.ts` (Node 22) — strips types then syntax-checks, ~instant. Pair with a backtick-parity count (`grep -o '\`' file | wc -l` must be even) for template-literal-heavy posts.ts. Railway does the real typecheck+build on push.
- (2026-07-28) Content batch 2 (proposal 2026-04-18-content-batch-2.md) CLOSED (commit 85683f2, next-step 32256b47). Trap: the Daily Five post was ALREADY applied (someone did half the batch), only the solo-agents pillar was missing — so ALWAYS grep for each slug's `slug: '...'` DEFINITION before pasting, not just href mentions. Applied `best-crm-for-solo-real-estate-agents-2026` with canonical pricing (draft had stale $29 Solo / 14-day → Free forever/Starter $19/60-day trial), added faqs[] + itemList via existing CLIENTARO_OFFERS/buildItemList helpers. NOTE residual stale pricing in OTHER older posts: line ~643 "Try Clientaro free for 14 days" and ~1206 "From $15/mo ... 14-day free trial" contradict canonical 60-day — pre-existing, un-fixed, worth a future sweep.
