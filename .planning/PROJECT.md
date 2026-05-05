# Wallet to Wealth — Sales Site

## What This Is

A high-converting single-page sales website for the "Wallet to Wealth" crypto education PDF. The site's sole purpose is to compel visitors to buy the PDF ($2.99) via Stripe checkout. Target audience: crypto-curious beginners who want actionable guidance without jargon.

## Core Value

A visitor lands and buys — every design and copy decision serves this single conversion goal.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with W2W logo, headline, and primary CTA
- [ ] "What's inside" section showing PDF chapter highlights
- [ ] Social proof / credibility signals
- [ ] Stripe checkout integration for $2.99 purchase
- [ ] PDF delivery via email after purchase
- [ ] FAQ section addressing objections
- [ ] Mobile-first responsive design
- [ ] W2W brand colors: cyan #5BC8FF, teal #4DEEEA, lavender #B8A9FF, navy dark bg
- [ ] Deploy-ready for Replit

### Out of Scope

- User accounts / dashboard — overkill for $2.99 PDF
- Blog or content pages — distraction from conversion
- Multi-language — Phase 2
- Gold color usage — brand decision, NO gold

## Context

- Logo provided: W2W glassmorphism-style 3D letters in cyan/lavender/teal
- PDF pipeline exists at ~/wallet2wealth (Puppeteer build)
- User's other projects use Next.js (isla-bonita, mc-hair-salon, oscar, anime-wear-items)
- Urgency: revenue needed quickly — ship fast, no over-engineering
- Price point: $2.99 (impulse buy range)
- Stripe for checkout, Replit for hosting

## Constraints

- **Tech Stack**: Next.js 15, Tailwind CSS, Stripe (consistent with user's ecosystem)
- **Timeline**: Ship as fast as possible — YOLO mode
- **Colors**: Logo palette only — NO gold
- **Deploy**: Replit

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Stripe checkout | User selected — custom checkout control | — Pending |
| Single page | Conversion focus, no distractions | — Pending |
| Replit deploy | User preference | — Pending |
| No auth/accounts | Overkill for $2.99 PDF impulse buy | — Pending |

---
*Last updated: 2026-05-05 after initialization*
