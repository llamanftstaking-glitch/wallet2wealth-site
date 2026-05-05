# Roadmap — Wallet to Wealth Sales Site

## Overview

**3 phases** | **17 requirements** | Revenue-first build order

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Foundation + UI | Full landing page live with all sections | HERO-01..03, CONTENT-01..05, DESIGN-01..04 | Visitor sees complete page, all sections render, mobile works |
| 2 | Stripe Checkout | Visitor can pay $2.99 and get confirmation | PAY-01..03 | End-to-end purchase flow works in test mode |
| 3 | Deploy | Site live on Replit with real Stripe keys | DEPLOY-01..02 | URL accessible, real purchase completes |

---

## Phase 1: Foundation + UI

**Goal:** Complete, beautiful landing page that compels purchase

**Requirements:** HERO-01, HERO-02, HERO-03, CONTENT-01, CONTENT-02, CONTENT-03, CONTENT-04, CONTENT-05, DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04

**Success criteria:**
1. Hero section loads with logo, headline, price, and CTA button
2. All 5 content sections render with proper W2W brand colors
3. Page is fully responsive on mobile (375px) and desktop (1440px)
4. Animations and glow effects match logo aesthetic

**UI hint**: yes

---

## Phase 2: Stripe Checkout

**Goal:** Working payment flow — visitor pays $2.99, gets success page

**Requirements:** PAY-01, PAY-02, PAY-03

**Success criteria:**
1. Clicking "Buy Now" creates Stripe checkout session and redirects
2. Successful test payment shows success page with download instructions
3. Cancelled checkout returns to landing page cleanly

---

## Phase 3: Deploy to Replit

**Goal:** Live URL, real Stripe keys, ready to sell

**Requirements:** DEPLOY-01, DEPLOY-02

**Success criteria:**
1. Site runs on Replit with no build errors
2. Stripe live key works — real $2.99 purchase completes
3. `.env.example` documents all required environment variables
