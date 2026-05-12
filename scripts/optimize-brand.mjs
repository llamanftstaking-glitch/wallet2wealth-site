#!/usr/bin/env node
// Converts brand PNGs to optimized WebP + smaller PNG fallbacks.
// Source PNGs in public/brand/ are kept (gitignored eventually); outputs sit alongside.

import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BRAND = path.resolve(__dirname, '..', 'public', 'brand')

const jobs = [
  // Logo for nav, hero, emails. 512x512 plenty, modern WebP.
  { in: 'logo-no-bg.png', outWebp: 'logo-no-bg.webp', outPng: 'logo-no-bg.png', size: 512, quality: 85 },
  // OG image stays PNG-friendly (Twitter/FB sometimes refuse WebP). Compress aggressively.
  { in: 'og.png', outWebp: 'og.webp', outPng: 'og.png', size: 1200, quality: 80 },
  // Cover for marketing visual.
  { in: 'cover.png', outWebp: 'cover.webp', outPng: 'cover.png', size: 1200, quality: 80 },
]

async function main() {
  for (const job of jobs) {
    const src = path.join(BRAND, job.in)
    const tmp = src + '.tmp'
    const webp = path.join(BRAND, job.outWebp)
    try {
      await fs.access(src)
    } catch {
      console.warn(`[skip] ${job.in} not found`)
      continue
    }
    // WebP at full quality, resized
    await sharp(src)
      .resize({ width: job.size, withoutEnlargement: true })
      .webp({ quality: job.quality, effort: 6 })
      .toFile(webp)
    const wstat = await fs.stat(webp)
    console.log(`[webp] ${job.outWebp}: ${(wstat.size / 1024).toFixed(0)} KB`)

    // PNG smaller (replace original)
    await sharp(src)
      .resize({ width: job.size, withoutEnlargement: true })
      .png({ compressionLevel: 9, quality: 90 })
      .toFile(tmp)
    await fs.rename(tmp, src)
    const pstat = await fs.stat(src)
    console.log(`[png ] ${job.outPng}: ${(pstat.size / 1024).toFixed(0)} KB`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
