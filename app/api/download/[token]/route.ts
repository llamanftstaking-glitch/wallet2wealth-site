import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { getPocketBaseAdmin, SUPPORTED_LANGS, type SupportedLang } from '@/lib/pocketbase'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const PDFS_DIR = path.join(process.cwd(), 'pdfs')

function pdfPathForLang(lang: SupportedLang) {
  return path.join(PDFS_DIR, `w2w-${lang}.pdf`)
}

async function fileExists(p: string) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

export async function GET(req: Request, ctx: { params: Promise<{ token: string }> }) {
  const { token } = await ctx.params
  if (!token || token.length < 16 || token.length > 128) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
  }

  const pb = await getPocketBaseAdmin()

  let dl
  try {
    dl = await pb.collection('downloads').getFirstListItem(`token = "${token}"`)
  } catch {
    return NextResponse.json({ error: 'Download not found' }, { status: 404 })
  }

  const expiresAt = new Date(dl.expires_at)
  if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
    return NextResponse.json({ error: 'This download link has expired' }, { status: 410 })
  }

  const lang = (SUPPORTED_LANGS.includes(dl.lang) ? dl.lang : 'en') as SupportedLang
  let p = pdfPathForLang(lang)
  if (!(await fileExists(p))) {
    // Fallback to English so paying customers always get something.
    p = pdfPathForLang('en')
    if (!(await fileExists(p))) {
      return NextResponse.json({ error: 'PDF asset missing on server' }, { status: 500 })
    }
  }

  const buffer = await fs.readFile(p)
  const ab = buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer
  const data = new Blob([ab], { type: 'application/pdf' })
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''

  try {
    await pb.collection('downloads').update(dl.id, {
      used_count: (dl.used_count ?? 0) + 1,
      last_used_at: new Date().toISOString(),
      last_ip: ip,
    })
  } catch {
    // non-fatal — never block a paying customer
  }

  return new NextResponse(data, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-length': String(data.size),
      'content-disposition': `attachment; filename="wallet-to-wealth-${lang}.pdf"`,
      'cache-control': 'private, no-store',
    },
  })
}
