# MARKETPLACE LAUNCH CHECKLIST

**Status:** Site live, webhooks deployed, 36 stamped PDFs ready.
**Goal:** Live on Gumroad + Whop today.

---

## ASSETS READY (all at `~/wallet2wealth/output/distribution/`)

| Platform   | EN file                                       | All 6 langs     |
| ---------- | --------------------------------------------- | --------------- |
| Gumroad    | `wallet-to-wealth-en-gumroad.pdf` (8.6MB)     | yes             |
| Whop       | `wallet-to-wealth-en-whop.pdf` (8.6MB)        | yes             |
| Amazon     | `wallet-to-wealth-en-amazon.pdf`              | yes (KDP later) |
| Apple/Kobo | `wallet-to-wealth-en-apple.pdf` / `-kobo.pdf` | yes (D2D later) |

Sample previews (existing, web-shipped, no stamp):

- `~/wallet2wealth-site/pdfs/sample-en.pdf` (and 5 other langs)

Brand assets:

- Cover: `~/wallet2wealth-site/public/brand/cover.png` (also `.webp`)
- Logo: `~/wallet2wealth-site/public/brand/logo.png`
- OG: `~/wallet2wealth-site/public/brand/og.png`

---

## GUMROAD SETUP (15 min)

### Step 1 — Account

- [ ] gumroad.com → Sign up with `hello@wallet2wealth.com`
- [ ] Verify email
- [ ] Add payout method (PayPal or bank — Stripe Connect auto-links)
- [ ] Username: `wallet2wealth`

### Step 2 — Create product

- [ ] Add product → Digital product
- [ ] **Title:** `Wallet to Wealth — Crypto for Real People (No BS Guide)`
- [ ] **Description:** paste from `marketing/gumroad-listing.md` (Description section)
- [ ] **Price:** $9.99
- [ ] **Cover image:** upload `cover.png` (or 3D mockup if you have it)
- [ ] **Sample preview:** upload `~/wallet2wealth-site/pdfs/sample-en.pdf`
- [ ] **Files (Content tab):** upload `wallet-to-wealth-en-gumroad.pdf` as main download. Add the 5 other-lang files as additional content (renamed: "Wallet to Wealth — Spanish", etc).
- [ ] **Tags:** crypto, bitcoin, ethereum, finance, education
- [ ] **Category:** Business & Money → Personal Finance
- [ ] **URL slug:** `wallet-to-wealth`

### Step 3 — Discount + Discovery

- [ ] Offer code → `LAUNCH50` → 50% off → expires 7 days from now
- [ ] Publish product
- [ ] Settings → Discover → ON (Gumroad marketplace listing)

### Step 4 — Affiliates

- [ ] Settings → Affiliates → ON
- [ ] Default commission: 30%
- [ ] Cookie window: 60 days

### Step 5 — Webhook (CRITICAL for funnel)

- [ ] Settings → Advanced → Ping URL
- [ ] **URL:** `https://wallet2wealth.com/api/gumroad-webhook?secret=85d40bb2600a29b571f4b298c07a1346db45bbfed0dda89c`
- [ ] Save → test ping (Gumroad sends a sample → expect 200)

### Step 6 — Final

- [ ] Buy your own product with the LAUNCH50 code as smoke test ($4.99, you can refund yourself)
- [ ] Verify TG admin chat got "New W2W order (GUMROAD)" ping
- [ ] Share the public URL: `gumroad.com/l/wallet-to-wealth`

---

## WHOP SETUP (20 min)

### Step 1 — Account

- [ ] whop.com → Sign up as seller, `hello@wallet2wealth.com`
- [ ] Verify
- [ ] Connect Stripe (use existing W2W Stripe account)
- [ ] Handle: `wallet2wealth` (or `gizer` if taken)

### Step 2 — Create company / storefront

- [ ] Company name: `Wallet to Wealth`
- [ ] Bio: paste from `marketing/whop-listing.md` (Bio section)
- [ ] Banner: `cover.png` resized to 1500×500

### Step 3 — Add product (bundle)

- [ ] New product → "Access pass" or "Digital download" (depends on Whop's current UX)
- [ ] **Title:** `Wallet to Wealth — Phase 1 Bundle`
- [ ] **Price:** $14.99 one-time
- [ ] **Description:** paste long description from `whop-listing.md`
- [ ] **Cover:** 3D mockup or cover.png
- [ ] **Delivery:**
  - Upload `wallet-to-wealth-en-whop.pdf` as primary file
  - Upload 5 other langs
- [ ] **Community gate:** connect Telegram channel `https://t.me/+srZIaodHoDZiMjA5` — Whop will auto-invite buyers

### Step 4 — Webhook

- [ ] Dev portal → Webhooks → Create
- [ ] **URL:** `https://wallet2wealth.com/api/whop-webhook`
- [ ] Subscribe to: `membership.went_valid`, `payment.succeeded`
- [ ] Copy signing secret → paste into Server L `.env` as `WHOP_WEBHOOK_SECRET` (I do this for you, just paste the secret here once you have it)

### Step 5 — Discovery

- [ ] Settings → make storefront public
- [ ] Submit to Whop marketplace for review

---

## TRAFFIC PLAN (start same day product is live)

### Free organic — Day 1

- [ ] **Reddit:** post in r/CryptoCurrency, r/Bitcoin, r/CryptoMarkets, r/ethfinance — VALUE post first (a chapter excerpt), link in comment / bio
- [ ] **Twitter/X:** post a 7-tweet thread distilling one chapter → "full guide → [gumroad link]"
- [ ] **TikTok:** post one 30-second hook video → bio link → wallet2wealth.com
- [ ] **IG:** repost TikTok as Reel
- [ ] **YouTube Shorts:** repost same video
- [ ] **Telegram:** post in 3-5 crypto group chats you're already in

### Affiliate recruiting — Week 1

- [ ] DM 20 crypto micro-creators (5K–50K followers) on TikTok / X / IG
- [ ] Template: "Hey, just dropped a no-BS crypto guide. 30% affiliate commission, 60-day cookie, link: [gumroad affiliate signup URL]"

### Paid (optional, week 2)

- [ ] Meta ads: $5/day boost on best-performing TikTok video
- [ ] TikTok Spark Ads: same

---

## CHECKLIST WHEN BOTH LIVE

- [ ] Both Gumroad + Whop product URLs saved to `marketing/links.md`
- [ ] Gumroad webhook returning 200 in test
- [ ] Whop webhook returning 200 in test
- [ ] Test purchase on each → TG admin alert received → subscriber row in Supabase has `seq_next_at` set
- [ ] First real sale = celebrate + immediately retweet/repost the buyer's location/lang (anonymized)

---

## SECRETS / IDs

- `GUMROAD_WEBHOOK_SECRET`: `85d40bb2600a29b571f4b298c07a1346db45bbfed0dda89c` (in Server L env)
- `WHOP_WEBHOOK_SECRET`: **paste from Whop dev portal once webhook created**
- `CRON_SECRET`: `d40aac29e0e6062d0286c093c9ebdc75a21e08ce59789f97`
- TG buyer invite: `https://t.me/+srZIaodHoDZiMjA5`
- TG admin chat: `8761436815`

---

## IF SOMETHING BREAKS

- Stripe webhook: `tail -f /var/log/...` (Caddy logs) or check Stripe dashboard
- Gumroad webhook: Gumroad → Settings → Ping → "View recent pings" shows response code
- Whop webhook: Whop dev portal → Webhook → "Deliveries" tab
- Nurture stuck: `ssh root@74.208.191.181 'tail -30 /var/log/w2w-nurture.log'`
- DB column drift: re-run subscribers migration (see `project_w2w_deploy.md`)
