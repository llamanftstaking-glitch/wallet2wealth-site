import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'
import { sendEmail } from '@/lib/resend'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TELEGRAM_INVITE = 'https://t.me/+srZIaodHoDZiMjA5'
const SITE = 'https://wallet2wealth.com'

// Gap (hours) until the NEXT touch, indexed by the step about to be sent.
// step 0 -> after sending touch 1, wait 72h for touch 2
// step 1 -> after sending touch 2, wait 72h for touch 3
// step 2 -> touch 3 is last; sequence done
const GAP_HOURS = [72, 72, 0]
const MAX_STEP = 3
const BATCH = 50

type SubRow = {
  id: string
  email: string
  lang: string | null
  seq_step: number
}

export async function POST(req: Request) {
  const secret = process.env.CRON_SECRET || ''
  if (!secret || req.headers.get('x-cron-secret') !== secret) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const sb = getSupabaseAdmin()
  const nowIso = new Date().toISOString()

  const { data: due, error } = await sb
    .from('subscribers')
    .select('id,email,lang,seq_step')
    .eq('consent', true)
    .lt('seq_step', MAX_STEP)
    .not('seq_next_at', 'is', null)
    .lte('seq_next_at', nowIso)
    .order('seq_next_at', { ascending: true })
    .limit(BATCH)
    .returns<SubRow[]>()

  if (error) {
    return NextResponse.json({ error: `query_failed: ${error.message}` }, { status: 500 })
  }

  const rows = due ?? []
  let sent = 0
  let failed = 0

  for (const sub of rows) {
    const step = sub.seq_step ?? 0
    if (step < 0 || step >= MAX_STEP) continue

    const tpl = TEMPLATES[step]
    try {
      await sendEmail({
        to: sub.email,
        subject: tpl.subject,
        tag: `nurture-${step + 1}`,
        html: tpl.html(),
        text: tpl.text(),
      })
      sent++
    } catch {
      failed++
      continue // leave row untouched; retried next run
    }

    const nextStep = step + 1
    const gapH = GAP_HOURS[step] ?? 0
    const nextAt =
      nextStep >= MAX_STEP || gapH === 0
        ? null
        : new Date(Date.now() + gapH * 3600_000).toISOString()

    await sb
      .from('subscribers')
      .update({
        seq_step: nextStep,
        seq_next_at: nextAt,
        seq_last_sent_at: nowIso,
      })
      .eq('id', sub.id)
  }

  return NextResponse.json({ ok: true, due: rows.length, sent, failed })
}

type Tpl = { subject: string; html: () => string; text: () => string }

function shell(inner: string) {
  return `<div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0A0E1A">${inner}<p style="line-height:1.5;color:#999;font-size:12px;margin-top:28px">Wallet to Wealth · You bought the guide, so you're on the early list. <a href="${SITE}" style="color:#999">wallet2wealth.com</a></p></div>`
}

function btn(href: string, label: string) {
  return `<p style="text-align:center;margin:24px 0"><a href="${href}" style="display:inline-block;background:#229ED9;color:#fff;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:10px;font-size:15px">${label}</a></p>`
}

const TEMPLATES: Tpl[] = [
  {
    subject: 'Did you open it yet? (+ your Phase 1 spot)',
    html: () =>
      shell(
        `<h1 style="font-size:21px;margin:0 0 12px">You're early — most people aren't.</h1>
         <p style="line-height:1.55;color:#333">You grabbed Wallet to Wealth. That alone puts you ahead of 99% of people still doom-scrolling crypto YouTube.</p>
         <p style="line-height:1.55;color:#333">Here's the part nobody tells you: every paid reader qualifies for the <strong>GIZER ($GZR) Phase 1 presale whitelist</strong>. Allocation details, chain selection, and timing drop in the private channel <strong>first</strong> — before anything public.</p>
         ${btn(TELEGRAM_INVITE, 'Lock my Phase 1 spot →')}
         <p style="line-height:1.55;color:#666;font-size:13px">Not financial advice. Whitelist ≠ guaranteed allocation.</p>`,
      ),
    text: () =>
      `You're early.\n\nYou grabbed Wallet to Wealth — ahead of 99% still doom-scrolling.\n\nEvery paid reader qualifies for the GIZER ($GZR) Phase 1 presale whitelist. Details drop in the private channel first.\n\nJoin: ${TELEGRAM_INVITE}\n\nNot financial advice. Whitelist != guaranteed allocation.`,
  },
  {
    subject: 'What Phase 1 buyers actually get',
    html: () =>
      shell(
        `<h1 style="font-size:21px;margin:0 0 12px">Phase 1 ≠ Phase 2.</h1>
         <p style="line-height:1.55;color:#333">GIZER ($GZR) launches in phases. Phase 1 is the smallest, earliest tranche — best entry, before any public listing or announcement.</p>
         <p style="line-height:1.55;color:#333">You already qualify. The only thing between you and the allocation drop is being in the room when it happens. It won't be announced anywhere public first.</p>
         ${btn(TELEGRAM_INVITE, 'Get in the room →')}
         <p style="line-height:1.55;color:#666;font-size:13px">Stealth launch. The channel is the source of truth — ignore links posted elsewhere.</p>`,
      ),
    text: () =>
      `Phase 1 != Phase 2.\n\nGIZER ($GZR) launches in phases. Phase 1 = smallest, earliest tranche, best entry, before any public listing.\n\nYou qualify. Be in the room when allocation drops — it won't be public first.\n\nJoin: ${TELEGRAM_INVITE}\n\nStealth launch. Channel is the source of truth.`,
  },
  {
    subject: 'Last call before the whitelist drop',
    html: () =>
      shell(
        `<h1 style="font-size:21px;margin:0 0 12px">Don't watch this one from the outside.</h1>
         <p style="line-height:1.55;color:#333">Allocation windows for the GIZER Phase 1 presale are being finalized. When they open, it's in the private channel — no email blast, no public post, no second chance for people who weren't there.</p>
         <p style="line-height:1.55;color:#333">You did the hard part: you're qualified. Take the 10 seconds to actually be in the room.</p>
         ${btn(TELEGRAM_INVITE, 'Join before it drops →')}
         <p style="line-height:1.55;color:#666;font-size:13px">Final reminder. Whitelist enrollment is not an allocation guarantee. Not financial advice.</p>`,
      ),
    text: () =>
      `Don't watch this from the outside.\n\nGIZER Phase 1 allocation windows are being finalized. When they open it's in the private channel — no blast, no public post.\n\nYou're qualified. Take 10 seconds to be in the room.\n\nJoin: ${TELEGRAM_INVITE}\n\nFinal reminder. Whitelist != allocation guarantee. Not financial advice.`,
  },
]

// Allow GET for easy cron/manual trigger with the same secret.
export async function GET(req: Request) {
  return POST(req)
}
