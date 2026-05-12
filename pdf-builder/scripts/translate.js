#!/usr/bin/env node
/**
 * Translate content/en/*.md → content/{es,it,fr,pt,ru}/*.md using Claude.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/translate.js               # all langs
 *   ANTHROPIC_API_KEY=sk-... node scripts/translate.js --langs=es,it # subset
 *   node scripts/translate.js --force                                 # overwrite existing
 *   node scripts/translate.js --file=03-chapter-01.md                 # single file
 */

const fs = require('fs')
const path = require('path')
const Anthropic = require('@anthropic-ai/sdk').default || require('@anthropic-ai/sdk')

const ROOT = path.resolve(__dirname, '..')
const CONTENT = path.join(ROOT, 'content')

const ALL_LANGS = {
  es: { name: 'Spanish', register: 'Latin American Spanish, neutral, friendly' },
  it: { name: 'Italian', register: 'Standard Italian, conversational, modern' },
  fr: { name: 'French', register: 'Standard French (France), friendly, modern' },
  pt: { name: 'Portuguese', register: 'Brazilian Portuguese, friendly, modern' },
  ru: { name: 'Russian', register: 'Standard Russian, modern, friendly' },
}

function parseArgs() {
  const out = { langs: Object.keys(ALL_LANGS), force: false, file: null }
  for (const a of process.argv.slice(2)) {
    if (a.startsWith('--langs=')) out.langs = a.slice(8).split(',').filter(Boolean)
    else if (a === '--force') out.force = true
    else if (a.startsWith('--file=')) out.file = a.slice(7)
  }
  return out
}

const SYSTEM_PROMPT = (target, register) => `You are a professional translator localizing a beginner-friendly crypto education book ("Wallet to Wealth") from English to ${target}.

Rules:
- Output ${register}.
- Translate every sentence faithfully. Keep tone warm, clear, beginner-friendly.
- Preserve Markdown structure EXACTLY: headings, bullets, blockquotes, tables, code fences, frontmatter (do NOT translate frontmatter keys or values that look like ids/slugs).
- Preserve all callout markers (e.g. > [!NOTE], > [!WARNING]) and any literal tokens in ALL_CAPS_WITH_UNDERSCORES (image placeholders like {IMG_COVER}).
- Keep brand names as-is: Wallet to Wealth, Bitcoin, Ethereum, Coinbase, Kraken, Binance, MetaMask, Ledger, Trezor, etc.
- Keep numbers, currency symbols, and addresses unchanged.
- Do NOT add explanatory notes or English in parentheses.
- Output ONLY the translated Markdown — no preamble, no code fence wrapping the whole document.`

async function translateFile(client, lang, filename, source) {
  const meta = ALL_LANGS[lang]
  const res = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 16000,
    system: SYSTEM_PROMPT(meta.name, meta.register),
    messages: [
      {
        role: 'user',
        content: `Translate this Markdown file to ${meta.name}.\n\nFilename: ${filename}\n\n---BEGIN---\n${source}\n---END---`,
      },
    ],
  })
  const block = res.content.find((b) => b.type === 'text')
  if (!block || !block.text) throw new Error(`Empty response for ${filename} → ${lang}`)
  let out = block.text.trim()
  if (out.startsWith('```')) {
    out = out.replace(/^```[a-z]*\n?/i, '').replace(/```\s*$/i, '').trim()
  }
  return out
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Set ANTHROPIC_API_KEY env var.')
    process.exit(1)
  }
  const args = parseArgs()
  const invalid = args.langs.filter((l) => !ALL_LANGS[l])
  if (invalid.length) {
    console.error(`Unknown langs: ${invalid.join(', ')}. Allowed: ${Object.keys(ALL_LANGS).join(',')}`)
    process.exit(1)
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const enDir = path.join(CONTENT, 'en')
  const allFiles = fs.readdirSync(enDir).filter((f) => f.endsWith('.md')).sort()
  const files = args.file ? allFiles.filter((f) => f === args.file) : allFiles
  if (!files.length) {
    console.error('No files matched.')
    process.exit(1)
  }

  console.log(`Translating ${files.length} files × ${args.langs.length} langs = ${files.length * args.langs.length} jobs`)

  let done = 0
  for (const lang of args.langs) {
    const outDir = path.join(CONTENT, lang)
    fs.mkdirSync(outDir, { recursive: true })
    for (const fname of files) {
      const target = path.join(outDir, fname)
      if (!args.force && fs.existsSync(target) && fs.statSync(target).size > 0) {
        console.log(`[skip ] ${lang}/${fname}`)
        done++
        continue
      }
      const src = fs.readFileSync(path.join(enDir, fname), 'utf-8')
      process.stdout.write(`[${lang}] ${fname} … `)
      const t0 = Date.now()
      try {
        const translated = await translateFile(client, lang, fname, src)
        fs.writeFileSync(target, translated + '\n')
        console.log(`ok (${((Date.now() - t0) / 1000).toFixed(1)}s, ${translated.length}b)`)
      } catch (err) {
        console.log(`FAIL: ${err.message}`)
      }
      done++
    }
  }
  console.log(`\nDone. Translated ${done} jobs.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
