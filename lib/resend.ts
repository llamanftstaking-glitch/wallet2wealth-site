import 'server-only'
import { Resend } from 'resend'

const API_KEY = process.env.RESEND_API_KEY || ''
const FROM = process.env.EMAIL_FROM || 'Wallet to Wealth <hello@wallet2wealth.com>'

let cached: Resend | null = null

export function getResend(): Resend {
  if (cached) return cached
  if (!API_KEY) {
    throw new Error('Resend not configured. Set RESEND_API_KEY.')
  }
  cached = new Resend(API_KEY)
  return cached
}

type SendArgs = {
  to: string
  subject: string
  html: string
  text?: string
  tag?: string
}

export async function sendEmail({ to, subject, html, text, tag }: SendArgs) {
  const client = getResend()
  return client.emails.send({
    from: FROM,
    to,
    subject,
    html,
    text,
    tags: tag ? [{ name: 'flow', value: tag }] : undefined,
  })
}

export const EMAIL_FROM = FROM
