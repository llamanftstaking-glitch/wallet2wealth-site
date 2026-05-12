#!/usr/bin/env node
/**
 * Copy pdf-builder/output/wallet-to-wealth-<lang>.pdf → wallet2wealth-site/pdfs/w2w-<lang>.pdf
 * so the Next.js download API can serve them.
 */
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(ROOT, 'output')
const TARGET = path.resolve(ROOT, '..', 'pdfs')

const LANGS = ['en', 'es', 'it', 'fr', 'pt', 'ru']

fs.mkdirSync(TARGET, { recursive: true })

for (const lang of LANGS) {
  const src = path.join(OUT, `wallet-to-wealth-${lang}.pdf`)
  const dst = path.join(TARGET, `w2w-${lang}.pdf`)
  if (!fs.existsSync(src)) {
    console.log(`[skip] ${lang}: ${src} not found`)
    continue
  }
  fs.copyFileSync(src, dst)
  const size = fs.statSync(dst).size
  console.log(`[ok  ] ${lang}: ${(size / 1024 / 1024).toFixed(1)} MB`)
}
