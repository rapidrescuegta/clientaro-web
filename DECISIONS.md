# LOCKED DECISIONS — Clientaro Marketing

Single source of truth for **settled, operator-confirmed facts** that must NOT be
re-asked. If something here answers your question, ACT on it — do not re-confirm
just because your session reset. This file is auto-injected into every agent
spawn.

---
## Auto-captured 2026-10-26 (operator-confirmed)
- Stripe API verified: all Clientaro prices are USD currency (Starter `price_1UU0NMLYsvBC5oGdW5khjmyC` 2900 cents, Pro `price_1UU0NMLYsvBC5oGds91VUfNu` 5900 cents)
- Fix `app/blog/posts.ts` lines 79, 97, 102, 184, 197, 219 (Canadian pillar) from "priced in CAD" to "billed in USD"
- Leave competitor CAD mentions at lines 114, 124, 128, 135 untouched
- `aria-crm` plan-limits.ts declares `priceUsd` as the source of truth
