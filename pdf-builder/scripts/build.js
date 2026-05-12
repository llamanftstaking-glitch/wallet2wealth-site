const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const { marked } = require('marked');

const lang = (process.argv.find(a => a.startsWith('--lang=')) ?? '--lang=en').split('=')[1];
const ROOT = path.resolve(__dirname, '..');
const contentDir = path.join(ROOT, 'content', lang);
const cssPath = path.join(ROOT, 'design', 'styles', 'main.css');
const logoPath = path.join(ROOT, 'design', 'images', 'logo.png');
const outputDir = path.join(ROOT, 'output');
const outputPath = path.join(outputDir, `wallet-to-wealth-${lang}.pdf`);

const logoB64 = 'data:image/png;base64,' + fs.readFileSync(logoPath).toString('base64');

const blockchainSvgPath = path.join(ROOT, 'design', 'images', 'blockchain-diagram.svg');
const blockchainSvgB64 = 'data:image/svg+xml;base64,' + Buffer.from(fs.readFileSync(blockchainSvgPath, 'utf-8')).toString('base64');

// ── AI IMAGES ── (compress to JPEG via sips, then base64)
const W2W_IMGS_DIR = '/Users/rayquinones/Desktop/W2W';
function loadImg(filename) {
  const src = path.join(W2W_IMGS_DIR, filename);
  if (!fs.existsSync(src)) { console.warn(`⚠️  Missing image: ${filename}`); return null; }
  const tmp = path.join(os.tmpdir(), `w2w_${Buffer.from(filename).toString('hex').slice(0, 16)}.jpg`);
  try {
    execSync(`sips -s format jpeg -s formatOptions 70 --resampleWidth 1100 "${src}" --out "${tmp}" 2>/dev/null`);
    const b64 = 'data:image/jpeg;base64,' + fs.readFileSync(tmp).toString('base64');
    fs.unlinkSync(tmp);
    return b64;
  } catch (e) {
    console.warn(`⚠️  Compress failed: ${filename}`);
    return null;
  }
}
const IMGS = {
  'IMG_COVER': loadImg('pdf cover.png'),
  'IMG_02': loadImg('image 2 - section 1  .png'),
  'IMG_03': loadImg('image 3 - scam flow diagram.png'),
  'IMG_04': loadImg('IMAGE 04 — CRYPTO RED FLAGS GRID.png'),
  'IMG_05': loadImg('image 5- wallet set up.png'),
  'IMG_06': loadImg('IMAGE 06 — BANK VS WALLET DIAGRAM.png'),
  'IMG_07': loadImg('IMAGE 07 — SEED PHRASE SECURITY VISUAL.png'),
  'IMG_08': loadImg('IMAGE 08 — HOT WALLET VS COLD WALLET.png'),
  'IMG_09': loadImg('IMAGE 09 — WALLET ADDRESS FLOW.png'),
  'IMG_10': loadImg('IMAGE 10 — EXCHANGE VS SELF-CUSTODY.png'),
  'IMG_11': loadImg('IMAGE 11 — PHISHING ATTACK VISUAL.png'),
  'IMG_12': loadImg('IMAGE 12 — 2FA SECURITY VISUAL.png'),
  'IMG_13': loadImg('IMAGE 13 — FIRST BITCOIN PURCHASE.png'),
  'IMG_14': loadImg('IMAGE 14 — EXCHANGE TO WALLET FLOW.png'),
  'IMG_15': loadImg('IMAGE 15 — GAS FEES EXPLAINED.png'),
  'IMG_16': loadImg('IMAGE 16 — DCA GROWTH GRAPH.png'),
  'IMG_17': loadImg('IMAGE 17 — EMOTIONAL MARKET CYCLE.png'),
  'IMG_18': loadImg('IMAGE 18 — TRADER VS INVESTOR.png'),
  'IMG_19': loadImg('IMAGE 19 — HOW CRYPTO WORKS.png'),
  'IMG_20': loadImg('IMAGE 20 — BLOCKCHAIN VISUAL.png'),
  'IMG_21': loadImg('IMAGE 21 — NODE NETWORK VISUAL.png'),
  'IMG_22': loadImg('IMAGE 22 — SMART CONTRACT VISUAL.png'),
  'IMG_23': loadImg('IMAGE 23 — DEFI RISK VISUAL.png'),
  'IMG_24': loadImg('IMAGE 24 — MARKET EMOTION WHEEL.png'),
  'IMG_25': loadImg('IMAGE 25 — WHAT TO IGNORE.png'),
  'IMG_26': loadImg('IMAGE 26 — WHAT SUCCESS REALLY LOOKS LIKE.png'),
  'IMG_27': loadImg('IMAGE 27 — CRYPTO CRASH VISUAL.png'),
  'IMG_28': loadImg('IMAGE 28 — YEAR 1 JOURNEY ROADMAP.png'),
  'IMG_29': loadImg('IMAGE 29 — COMMUNITY VISUAL.png'),
  'IMG_30': loadImg('IMAGE 30 — CINEMATIC ENDING PAGE.png'),
};
console.log(`📸 Loaded ${Object.values(IMGS).filter(Boolean).length}/30 images`);

const FILES = [
  '00-cover', '01-toc', '02-start-here', '02b-first-24-hours', '03-avoid',
  '03b-divider-keys',
  '04-wallet-setup', '05-security', '06-first-buy',
  '07-strategy', '07b-divider-patience', '08-fundamentals', '09-emotions',
  '09b-divider-confused',
  '10-glossary', '14-research', '15-w2w-standard',
  '16-beginner-wins', '18-safe-dangerous', '11-roadmap', '17-worksheets',
  '12-disclaimer', '13-cta',
];

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  m[1].split('\n').forEach(line => {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });
  return { meta, body: m[2] };
}

function processCallouts(md) {
  md = md.replace(/:::detective\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="callout detective"><span class="callout-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Real Talk</span>${marked.parse(inner.trim())}</div>`);
  md = md.replace(/:::action\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="callout action"><span class="callout-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>Do This Now</span>${marked.parse(inner.trim())}</div>`);
  md = md.replace(/:::warning\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="callout warning"><span class="callout-label"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Warning</span>${marked.parse(inner.trim())}</div>`);
  md = md.replace(/:::checklist\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="checklist"><span class="checklist-header-icon"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#00C9B1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>${marked.parse(inner.trim())}</div>`);
  md = md.replace(/:::quote\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="pull-quote"><div class="rule"></div>${marked.parse(inner.trim())}<div class="rule"></div></div>`);
  md = md.replace(/:::blockchain\n([\s\S]*?):::/g, (_, inner) =>
    `<div class="blockchain-diagram"><img src="${blockchainSvgB64}" style="width:100%;height:auto;display:block;" alt="Blockchain Diagram"/><p class="diagram-caption">${inner.trim()}</p></div>`);
  return md;
}

function logoImg(size = '28mm') {
  return `<img src="${logoB64}" style="height:${size};width:auto;display:block;" alt="W2W">`;
}

function renderPage(meta, body) {
  const type = meta.type || 'content';
  const html = marked.parse(processCallouts(body));

  if (type === 'cover') {
    return `<div class="page cover-page-clean">
  <img class="cover-full-img" src="{{IMG_COVER}}" alt=""/>
</div>`;
  }

  if (type === 'divider') {
    const accent = meta.accent === 'gold' ? '#C9A84C'
                 : meta.accent === 'blue' ? '#4DA8DA'
                 : '#00C9B1';
    const accentEnd = meta.accent === 'gold' ? '#E8C56D'
                    : meta.accent === 'blue' ? '#00C9B1'
                    : '#4DA8DA';
    return `<div class="page divider-page">
  <div class="divider-content">
    <div class="divider-line1">${meta.line1 || ''}</div>
    <div class="divider-line2" style="background:linear-gradient(90deg,${accent},${accentEnd});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${meta.line2 || ''}</div>
    <div class="divider-rule" style="background:${accent}"></div>
    <p class="divider-sub">${meta.sub || ''}</p>
  </div>
</div>`;
  }

  if (type === 'toc') {
    return `<div class="page toc-page">
  <div class="toc-logo">${logoImg('18mm')}</div>
  <h1 class="toc-heading">What's <span>Inside</span></h1>
  ${html}
</div>`;
  }

  if (type === 'section') {
    return `<div class="page section-opener">
  <svg class="section-corner-art" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;opacity:0.12;">
    <circle cx="0" cy="0" r="80" stroke="#4DA8DA" stroke-width="1" fill="none"/>
    <circle cx="0" cy="0" r="55" stroke="#00C9B1" stroke-width="0.5" fill="none"/>
    <circle cx="0" cy="0" r="30" stroke="#4DA8DA" stroke-width="0.5" fill="none"/>
  </svg>
  <div class="section-num">${meta.num || ''}</div>
  <div class="section-label">${meta.label || 'Section'}</div>
  <h1 class="section-title">${meta.title}</h1>
  <p class="section-sub">${meta.subtitle || ''}</p>
</div>
<div class="page content-page">
  <div class="page-header">
    <span class="page-header-label">${meta.title}</span>
    ${logoImg('9mm')}
  </div>
  ${html}
</div>`;
  }

  if (type === 'worksheet') {
    return `<div class="page worksheet-page">
  <div class="page-header">
    <span class="page-header-label">Printable Worksheets</span>
    ${logoImg('9mm')}
  </div>
  ${html}
</div>`;
  }

  if (type === 'disclaimer') {
    return `<div class="page disclaimer-page">
  ${html}
</div>`;
  }

  if (type === 'cta') {
    return `<div class="page cta-page">
  <div class="cta-logo">${logoImg('44mm')}</div>
  ${html}
</div>`;
  }

  return `<div class="page content-page">
  <div class="page-header">
    <span class="page-header-label">${meta.title || 'Wallet to Wealth'}</span>
    ${logoImg('9mm')}
  </div>
  ${html}
</div>`;
}

function applyImageTokens(body) {
  for (const [key, src] of Object.entries(IMGS)) {
    if (!src) continue;
    const token = `{{${key}}}`;
    // Replace src="{{KEY}}" used in content file img tags
    body = body.split(`src="${token}"`).join(`src="${src}"`);
    // Replace bare {{IMG_COVER}} token used in the cover template
    if (key === 'IMG_COVER') {
      body = body.split(token).join(`<img class="cover-bg-img" src="${src}" alt=""/>`);
    }
  }
  return body;
}

async function build() {
  const css = fs.readFileSync(cssPath, 'utf-8');
  let body = '';

  for (const file of FILES) {
    const p = path.join(contentDir, `${file}.md`);
    if (!fs.existsSync(p)) { console.warn(`⚠️  Missing: ${file}.md`); continue; }
    const { meta, body: md } = parseFrontmatter(fs.readFileSync(p, 'utf-8'));
    body += renderPage(meta, md);
  }

  body = applyImageTokens(body);

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>${body}</body>
</html>`;

  fs.mkdirSync(outputDir, { recursive: true });
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  console.log('📄 Rendering HTML...');
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 120000 });
  console.log('🖨️  Generating PDF...');
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', bottom: '8mm', left: '0', right: '0' },
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;padding:0 20mm 1.5mm;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:6.5pt;color:rgba(201,168,76,0.55);font-family:Arial,Helvetica,sans-serif;font-weight:700;letter-spacing:0.1em;">W2W</span>
      <span style="font-size:6.5pt;color:rgba(136,136,153,0.45);font-family:Arial,Helvetica,sans-serif;letter-spacing:0.06em;">wallet2wealth.com</span>
      <span style="font-size:6.5pt;color:rgba(201,168,76,0.55);font-family:Arial,Helvetica,sans-serif;font-weight:700;letter-spacing:0.1em;">PAGE <span class="pageNumber" style="font-size:6.5pt;"></span></span>
    </div>`,
  });
  await browser.close();
  console.log(`✅  PDF generated: ${outputPath}`);
}

build().catch(e => { console.error(e); process.exit(1); });
