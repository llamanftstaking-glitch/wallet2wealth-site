import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { SUPPORTED_LANGS, type SupportedLang } from '@/lib/pocketbase'

export const runtime = 'nodejs'

const PDFS_DIR = path.join(process.cwd(), 'pdfs')

async function readSample(lang: SupportedLang) {
  for (const candidate of [`sample-${lang}.pdf`, 'sample-en.pdf']) {
    const p = path.join(PDFS_DIR, candidate)
    try {
      const buf = await fs.readFile(p)
      const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
      return { data: new Blob([ab], { type: 'application/pdf' }), lang }
    } catch {
      // try next
    }
  }
  return null
}

export async function GET(_req: Request, ctx: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await ctx.params
  const lang = (SUPPORTED_LANGS.includes(raw as SupportedLang) ? raw : 'en') as SupportedLang

  const file = await readSample(lang)
  if (!file) {
    return NextResponse.json({ error: 'Sample missing on server' }, { status: 503 })
  }

  return new NextResponse(file.data, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-length': String(file.data.size),
      'content-disposition': `inline; filename="wallet-to-wealth-sample-${lang}.pdf"`,
      'cache-control': 'public, max-age=3600',
    },
  })
}
