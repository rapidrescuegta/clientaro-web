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
- (2026-07-07) Growth Engine drafts routinely carry stale Clientaro pricing ($29/$79/$179, 14/30-day trial). ~~Canonical before pasting: Free $0 (30 contacts) / $19 Starter (1,000) / $49 Pro unlimited, 60-day Pro trial~~ — **SUPERSEDED 2026-10-24: canonical is now Free $0 (30 contacts) / Starter $29 (1,000) / Pro $59 (unlimited), 60-day Pro trial** (aria-crm commit a0d67ba; source of truth = aria-crm `src/lib/plan-limits.ts`). Always re-read plan-limits.ts before pasting pricing. Also convert `faq:[{question,answer}]` → `faqs:[{q,a}]`, drop `keywords`, add `itemList: buildItemList(...)` for alternatives pillars.
- (2026-07-07) Next-steps CREATE: `POST /api/projects/clientaro-web/next-steps` with `{"text":"...","priority":"low|medium|high"}` returns `{"item":{...}}`. Confirmed working.
- (2026-07-21) Local `next build` HANGS in this sandbox — stalls at "Creating an optimized production build ..." with ~0 CPU, never emits `.next/BUILD_ID`, likely contends with the running dev `next-server`. Do NOT burn 10+ min waiting or spawn parallel builds (they pile up and worsen it). For additive/metadata-only edits, verify with `npx tsc --noEmit` (backgrounded to a logfile: `(timeout 220 npx tsc --noEmit > /tmp/tsc.log 2>&1; echo EXIT=$? >> /tmp/tsc.log) &`) — Railway does the real build on push and past commits confirm it builds fine.
- (2026-07-21) SEO polish bundle (proposal 2026-04-18-seo-polish.md) is DONE except OG images: per-page metadata, canonicals on all 10 routes, SoftwareApplication/Article/BreadcrumbList/FAQPage JSON-LD all shipped. Only residual = 7 OG preview PNGs in public/ (design asset, tracked as low-pri next-step 52236d5f). Proposal's SoftwareApplication offers block had stale $29/$79/$179 — the live SoftwareApplicationSchema.tsx already uses canonical pricing, don't regress it.
- (2026-07-28) `npx tsc --noEmit` ALSO gets SIGTERM-killed (exit 144) in this sandbox, same as `next build` — don't rely on it. FAST syntax check that DOES work: `node --experimental-strip-types --check app/blog/posts.ts` (Node 22) — strips types then syntax-checks, ~instant. Pair with a backtick-parity count (`grep -o '\`' file | wc -l` must be even) for template-literal-heavy posts.ts. Railway does the real typecheck+build on push.
- (2026-07-28) Content batch 2 (proposal 2026-04-18-content-batch-2.md) CLOSED (commit 85683f2, next-step 32256b47). Trap: the Daily Five post was ALREADY applied (someone did half the batch), only the solo-agents pillar was missing — so ALWAYS grep for each slug's `slug: '...'` DEFINITION before pasting, not just href mentions. Applied `best-crm-for-solo-real-estate-agents-2026` with canonical pricing (draft had stale $29 Solo / 14-day → Free forever/Starter $19/60-day trial), added faqs[] + itemList via existing CLIENTARO_OFFERS/buildItemList helpers. NOTE residual stale pricing in OTHER older posts: line ~643 "Try Clientaro free for 14 days" and ~1206 "From $15/mo ... 14-day free trial" contradict canonical 60-day — pre-existing, un-fixed, worth a future sweep.
- (2026-08-04) OG preview images (last SEO-polish residual, next-step 52236d5f) CLOSED via commit 0cdac60. Did NOT hand-produce static PNGs — used Next.js's `opengraph-image.tsx` file convention (next/og ImageResponse, zero deps), same pattern already live at app/blog/[slug]/opengraph-image.tsx. Shared card = app/components/OgCard.tsx; root app/opengraph-image.tsx is the default/fallback (covers home + privacy/terms/newsletter), per-page cards for pricing/realestate/b2b/about/blog/contact. Generated URL is /opengraph-image (NOT /og-image.png — that file never existed; fixed the stale ref in SoftwareApplicationSchema.tsx). Checking .tsx in this sandbox: strip-types --check REJECTS .tsx (JSX); instead `node -e` with local `typescript` ts.transpileModule({jsx:ReactJSX}) validates JSX+syntax fast — Railway does the real build.
- (2026-10-24) PRICING SWEEP to $29/$59 (next-step 1d618a2e closed). Canonical source of truth = aria-crm `src/lib/plan-limits.ts` PLAN_LIMITS: Free $0 / 30 contacts / 50 SMS, Starter $29 / 1,000 / 500 SMS, Pro $59 / unlimited / 5,000 SMS, $0.02 SMS overage, every signup gets a 60-day Pro trial, Free = no card, no timer. The marketing site hardcodes pricing in SEVEN places — all must move together: `app/components/Pricing.tsx` (visible table, `monthly:` numbers), `app/components/SoftwareApplicationSchema.tsx` (JSON-LD OFFERS), `app/pricing/page.tsx` (metadata + FAQ copy), `app/pricing/opengraph-image.tsx` (alt + subtitle), `app/blog/posts.ts` (CLIENTARO_OFFERS constant + ~100 in-body price mentions), `app/components/CtaBanner.tsx`, `app/api/subscribe/route.ts` (drip email copy). Lesson: the NEXT-STEP TEXT listed only pricing/page.tsx — the real blast radius was the whole site. Always grep the whole app/ tree for the price tokens, not just the file named in the task.
- (2026-10-24) NEVER blanket-sed `$19`/`$49` in blog content — competitor prices use the SAME numbers (Wise Agent $49/mo flat, IXACT $49/mo, FUB $69/$499, Realvolve $94, LionDesk $39, Top Producer $40/$79, RealOffice360 $15, kvCORE $499). Replace only Clientaro-owned tokens: "$19/mo Starter", "Starter $19/mo", "Free / $19 / $49", "Clientaro Pro ($49/mo", "$49/mo Pro", etc. Then re-grep leftovers and hand-verify every remaining $49 is a competitor. Also re-check comparative claims that the number change falsifies ("half the price of LionDesk's $39", "matches Wise Agent's price") and budget-qualified lines ("under $50/month" listing Pro).
- (2026-10-26) RESOLVED (supersedes the 2026-10-24 "OPEN ISSUE: currency conflict" note): **Clientaro bills in USD.** Verified read-only against the Stripe API — `cd ~/aria-crm && set -a && . ./.env.local && curl -s "https://api.stripe.com/v1/prices?product=prod_U61jAOcTCgOPCd" -u "$STRIPE_SECRET_KEY:"` returns `currency: "usd"` for EVERY Clientaro price (Starter `price_1UU0NMLYsvBC5oGdW5khjmyC` 2900, Pro `price_1UU0NMLYsvBC5oGds91VUfNu` 5900, plus legacy per-seat/unlimited). aria-crm `plan-limits.ts` `priceUsd` agrees; site JSON-LD already emitted `priceCurrency: "USD"`. CAVEAT: the repo holds only a TEST-mode `STRIPE_SECRET_KEY` (sk_test) — zero live-mode price objects are visible from it, so live-billing currency cannot be confirmed from this sandbox; if a CAD plan is ever wanted, Giuseppe must create CAD Price objects in the dashboard. The Canadian pillar's CAD claims were false and have been corrected to USD.
- (2026-10-26) CAD→USD copy fix (Canadian pillar, slug canadian-real-estate-crm-2026) — 6 Clientaro-owned CAD claims corrected in `app/blog/posts.ts`: "priced in CAD" → "billed in USD"; "Pricing in CAD by default. No FX surprise on your annual." → "Flat monthly pricing — no per-agent seat fee…"; "want CAD pricing + CASL handled" → "want flat pricing + CASL handled"; CTA "CAD pricing," → "Flat monthly pricing,"; FAQ "priced in CAD" → "flat monthly pricing with no per-agent seat fee (billed in USD)"; intro "Currency in CAD by default." → "Currency clarity — pricing a deal in CAD and knowing exactly what currency your software bills you in." PLUS a new honest "Where it loses" bullet: "Billing is in USD, not CAD — Canadian agents should expect an FX line on the card. There is no CAD-denominated plan today." Competitor CAD mentions (FUB $95 CAD, Top Producer $108 CAD, $285+ CAD) were deliberately LEFT ALONE. Lesson: when correcting a currency claim, don't silently delete the currency topic — disclose it honestly in "where it loses", or the page loses credibility with exactly the audience it targets. Verified with `node --experimental-strip-types --check app/blog/posts.ts` + `NODE_ENV=development npx next dev -p 3005`, curl the slug, grep rendered HTML and JSON-LD `priceCurrency`.
- (2026-10-26) Correction to the 2026-07-28 note: the "residual stale 14-day trial pricing" is GONE — remaining `14-day` mentions in posts.ts (FUB "$15/mo (annual). 14-day free trial", Wise Agent 14-day, and a "no interaction in 14 days" CRM-rule example) are COMPETITOR FACTS or unrelated, and are correct. Do not "fix" them to 60-day.
- (2026-10-24) `next dev` in this sandbox 500s on every route with "Module parse failed: Unexpected character '@' (1:0) > @tailwind base;" — CAUSE: the shell exports `NODE_ENV=production`, so Next skips PostCSS/Tailwind processing. Fix: start the dev server with `NODE_ENV=development npx next dev -p 3005`. This gives a real page render for verification (curl the route, then parse the JSON-LD `<script type="application/ld+json">` blocks) without waiting on the hanging `next build`. Kill it with `fuser -k 3005/tcp` (do NOT `pkill -f "next dev ..."` — the pattern matches the agent's own shell and SIGTERMs it).
