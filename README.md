# Wallet to Wealth

Crypto-beginner education site. $2.99 PDF tripwire with free-chapter lead magnet.

- **Frontend**: Next.js 16 + Tailwind, 6 languages (EN/ES/IT/FR/PT/RU)
- **Backend**: PocketBase (SQLite) for subscribers, orders, downloads
- **Payments**: Stripe Checkout ($2.99 one-time)
- **Email**: Resend (multilingual receipts + sample-chapter drip)
- **Pixels**: Meta, TikTok, GA4, GTM, PostHog (env-gated)

## Local development

```bash
pnpm install
bash pocketbase/download.sh
pnpm pb:migrate
pnpm dev
```

- http://localhost:3333 — landing
- http://localhost:8090/_/ — PocketBase admin (create superuser first boot)

## Environment

Copy `.env.template` → `.env` and fill in:

- `POCKETBASE_ADMIN_EMAIL`, `POCKETBASE_ADMIN_PASSWORD`
- `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`,
  `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `RESEND_API_KEY`, `EMAIL_FROM`
- Pixel IDs (optional)

## PDFs

Drop language files into `pdfs/`:

```
pdfs/w2w-en.pdf  w2w-es.pdf  w2w-it.pdf  w2w-fr.pdf  w2w-pt.pdf  w2w-ru.pdf
```

Then build samples: `node scripts/build-sample-pdf.mjs`.

PDFs are gitignored — upload them to the Replit VM volume.

## Deploy (Replit Reserved VM)

1. Push this repo to GitHub.
2. Import into Replit, choose Reserved VM.
3. Add all env vars to Secrets.
4. Replit build runs: install → download PocketBase → migrate → build.
5. Run command: `pnpm start` (spawns Next + PocketBase).
6. Bind `wallet2wealth.com` to the Replit deployment.
7. Configure Stripe webhook → `https://wallet2wealth.com/api/stripe-webhook`
   (event: `checkout.session.completed`).

## Routes

- `/` — landing
- `/buy` — Stripe checkout
- `/thanks` — success + download
- `POST /api/checkout` — Stripe session
- `POST /api/stripe-webhook` — order + download token + email
- `GET /api/download/[token]` — gated PDF (14 days)
- `POST /api/lead` — email capture + sample drip
- `GET /api/sample/[lang]` — sample PDF
