# Requirements — Wallet to Wealth Sales Site

## v1 Requirements

### Landing Page

- [ ] **HERO-01**: User sees W2W logo, power headline, and "Buy Now" CTA above the fold
- [ ] **HERO-02**: Hero has animated background using brand colors (cyan/teal/lavender)
- [ ] **HERO-03**: Price ($2.99) visible in hero section

### Content Sections

- [ ] **CONTENT-01**: "What's Inside" section shows 6-8 chapter highlights with icons
- [ ] **CONTENT-02**: "Who This Is For" section with 3 audience profiles
- [ ] **CONTENT-03**: Social proof section (download count, star rating, or testimonial quotes)
- [ ] **CONTENT-04**: FAQ section with 4-5 common objections answered
- [ ] **CONTENT-05**: Final CTA section before footer repeats the offer

### Checkout

- [ ] **PAY-01**: Stripe checkout session created via Next.js API route
- [ ] **PAY-02**: Success page shown after purchase with download instructions
- [ ] **PAY-03**: Cancel page returns user to landing page

### Design

- [ ] **DESIGN-01**: Mobile-first responsive layout
- [ ] **DESIGN-02**: W2W brand colors throughout (cyan #5BC8FF, teal #4DEEEA, lavender #B8A9FF, dark navy bg)
- [ ] **DESIGN-03**: Glassmorphism/glow visual style matching logo
- [ ] **DESIGN-04**: Smooth scroll and entrance animations

### Deploy

- [ ] **DEPLOY-01**: Replit-compatible configuration (no build-time env issues)
- [ ] **DEPLOY-02**: Environment variables documented for Stripe keys

## v2 Requirements (Deferred)

- Email delivery automation after purchase
- Affiliate/referral program
- Multi-language support
- Analytics dashboard

## Out of Scope

- User accounts — overkill for $2.99 PDF
- Blog/content pages — conversion distraction
- Gold color scheme — explicit brand decision

## Traceability

| REQ-ID | Phase |
|--------|-------|
| HERO-01 to HERO-03 | Phase 1 |
| CONTENT-01 to CONTENT-05 | Phase 1 |
| PAY-01 to PAY-03 | Phase 2 |
| DESIGN-01 to DESIGN-04 | Phase 1 |
| DEPLOY-01 to DEPLOY-02 | Phase 3 |
