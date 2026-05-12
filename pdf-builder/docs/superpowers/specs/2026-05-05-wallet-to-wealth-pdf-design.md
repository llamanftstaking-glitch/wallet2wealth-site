# Wallet to Wealth PDF — Design Spec
**Date:** 2026-05-05  
**Product:** "From Wallet to Wealth: The Ultimate Cryptocurrency Handbook"  
**Price:** $2.99  
**Domain:** wallet2wealth.com  
**Goal:** High-volume, worldwide digital product. Volume play — mass distribution, community-driven growth.

---

## Product Overview

A 40–60 page professional crypto education PDF. Looks like a $97 product, sells for $2.99. Gap between perceived value and price = viral word of mouth + impulse buy conversion.

**Languages:** English first. Spanish, Portuguese (Brazil), and additional languages via translation pipeline.

**Distribution:** Own site (wallet2wealth.com) + Whop + Gumroad + all platforms.

**Community:** Telegram + Discord (bridged). PDF purchase = community access.

---

## Content Structure

10 chapters + intro + conclusion (~4–5 pages each = ~50 pages total).

| Chapter | Title |
|---------|-------|
| Intro | Welcome to the Cryptoverse |
| 1 | Crypto Foundations |
| 2 | Setting Up Your Digital Wallet |
| 3 | Buying and Selling Cryptocurrency |
| 4 | Investing Wisely |
| 5 | Storing and Securing Your Assets |
| 6 | Navigating the Cryptocurrency Market |
| 7 | Crypto Regulations and Taxes |
| 8 | Advanced Strategies for Success |
| 9 | Overcoming Challenges |
| 10 | The Future of Cryptocurrency |
| Outro | Your Journey from Wallet to Wealth |

**Recurring elements per chapter:**
- Short intro paragraph (tone: engaging, accessible, street credibility)
- Key sections with bullet points + explanations
- `🔍 Blockchain Detective` — story-style callout (real scam/win case study)
- `⚡ W2W Action Step` — one concrete action reader takes right now
- 1 SVG diagram or chart per chapter

---

## Technical Architecture

### Stack
- **Content:** Markdown files per chapter per language
- **Template:** Single `HTML/CSS` layout file
- **PDF generation:** `Puppeteer` (Node.js) — renders HTML → PDF at print quality
- **Typography:** Google Fonts (Space Grotesk + Inter)
- **Diagrams:** Inline SVG
- **Images:** AI-generated chapter hero images (Midjourney/DALL-E prompts included)

### Project Structure
```
wallet2wealth/
├── content/
│   ├── en/
│   │   ├── intro.md
│   │   ├── chapter-01.md
│   │   ├── chapter-02.md
│   │   └── ... (through chapter-10 + outro)
│   ├── es/           ← Spanish (Phase 2)
│   └── pt/           ← Portuguese BR (Phase 2)
├── design/
│   ├── template.html ← master layout
│   ├── styles/
│   │   └── main.css
│   └── images/       ← chapter hero images + logo
├── scripts/
│   └── build.js      ← Puppeteer PDF renderer
├── output/
│   └── wallet-to-wealth-en.pdf
└── package.json
```

### Build Command
```bash
node scripts/build.js --lang en
# outputs: output/wallet-to-wealth-en.pdf
```

---

## Visual Design

### Color Palette — "Wealth in the Dark"
| Role | Value |
|------|-------|
| Page background | `#0A0A0F` |
| Section background | `#1A1A2E` |
| Gold accent | `#C9A84C` |
| Body text | `#F0F0F0` |
| Headlines | `#FFFFFF` |
| Muted text | `#888899` |

### Typography
| Use | Font | Weight |
|-----|------|--------|
| Chapter titles | Space Grotesk | 700 |
| Section headers | Space Grotesk | 600 |
| Body copy | Inter | 400 |
| Callout text | Inter | 500 |
| Chapter numbers | Space Grotesk | 800, oversized, 15% opacity gold watermark |

### Page Layout
- **Cover page:** Full bleed dark background, W2W logo (placeholder until logo ready), subtitle, author name
- **Chapter opener:** Full-width AI hero image (dark-toned, crypto-themed), chapter number watermark, chapter title overlay
- **Content pages:** Two-column-aware layout, generous margins (print-ready), page numbers bottom center in gold
- **Callout boxes:**
  - `🔍 Blockchain Detective` — navy `#1A1A2E` bg, gold left border, italic story text
  - `⚡ W2W Action Step` — gold border box, bold CTA text
- **Pull quotes:** Large gold italic text, centered, with thin gold rule above/below
- **Diagrams:** Dark background SVG, gold + white labels

---

## Content Tone

- Accessible, not academic
- Street credibility — feels like advice from someone who's been in the space
- Not preachy, not overly cautious
- Encourages action (each chapter ends with a step)
- "Blockchain Detective" sections make it entertaining

---

## Multi-Language Pipeline (Phase 2)

1. Write full English content
2. Run AI translation (Claude API) per language
3. Same HTML template, swap content files
4. One build command per language: `node scripts/build.js --lang es`

---

## Success Criteria

- PDF opens and looks premium on any device/reader
- Renders correctly at A4 + US Letter sizes
- All 10 chapters + intro/outro complete (no placeholder content)
- Page count: 40–60 pages
- Build command produces clean PDF in under 30 seconds
- Logo placeholder ready for swap once logo is delivered
