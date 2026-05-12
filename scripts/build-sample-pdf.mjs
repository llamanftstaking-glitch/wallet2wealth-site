#!/usr/bin/env node
// Extracts the first N pages of each w2w-<lang>.pdf into sample-<lang>.pdf.
// Used to ship a free-chapter lead magnet without committing a separate asset.

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { PDFDocument } from 'pdf-lib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const PDFS_DIR = path.join(ROOT, 'pdfs')

const LANGS = ['en', 'es', 'it', 'fr', 'pt', 'ru']
const SAMPLE_PAGES = Number(process.env.SAMPLE_PAGES || 6)

async function main() {
  await fs.mkdir(PDFS_DIR, { recursive: true })
  for (const lang of LANGS) {
    const src = path.join(PDFS_DIR, `w2w-${lang}.pdf`)
    const out = path.join(PDFS_DIR, `sample-${lang}.pdf`)

    try {
      await fs.access(src)
    } catch {
      console.warn(`[sample] skip ${lang}: ${src} not found`)
      continue
    }

    const buf = await fs.readFile(src)
    const full = await PDFDocument.load(buf)
    const pageCount = full.getPageCount()
    const take = Math.min(SAMPLE_PAGES, pageCount)
    const sample = await PDFDocument.create()
    const pages = await sample.copyPages(full, Array.from({ length: take }, (_, i) => i))
    pages.forEach((p) => sample.addPage(p))
    sample.setTitle('Wallet to Wealth — Free Preview')
    sample.setSubject('Sample chapter')

    const bytes = await sample.save()
    await fs.writeFile(out, bytes)
    console.log(`[sample] ${lang}: ${take} pages → ${out}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
