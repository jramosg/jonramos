// Renders every brand image the site serves: favicons, touch and
// manifest icons, and the Open Graph cards (home + local-business page,
// one per language). Re-run after changing copy, colours or the photo:
//
//   node scripts/brand/render.mjs
//
// Needs python3 with fontTools (static Archivo instances + the "JR"
// outline, see instance.py). Intermediate fonts go to scripts/brand/.fonts
// (git-ignored).

import { Resvg } from '@resvg/resvg-js';
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import wawoff2 from 'wawoff2';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const pub = join(root, 'public');
const fontsDir = join(here, '.fonts');

const C = {
  wall: '#163b57',
  onWall: '#f3f5f4',
  onWallMuted: '#bccfdd',
  sand: '#e9c46a',
};

/* ---------- fonts ---------- */

mkdirSync(fontsDir, { recursive: true });
const variable = join(fontsDir, 'archivo-latin.ttf');
writeFileSync(
  variable,
  await wawoff2.decompress(
    readFileSync(
      join(
        root,
        'node_modules/@fontsource-variable/archivo/files',
        'archivo-latin-standard-normal.woff2',
      ),
    ),
  ),
);
const meta = JSON.parse(
  execFileSync('python3', [join(here, 'instance.py'), variable, fontsDir], {
    encoding: 'utf8',
  }),
);

const render = (svg, width) =>
  new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: false, fontFiles: meta.fonts },
  })
    .render()
    .asPng();

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------- the mark: "JR" painted on the bay wall, sand line under */

function mark({ radius = 12, inset = 0 } = {}) {
  // `inset` shrinks the content toward the centre (maskable safe zone)
  const s = 64;
  const scale = (1 - inset * 2) * (30 / meta.capHeight);
  const w = meta.jr.advance * scale;
  const x = (s - w) / 2;
  const base = s / 2 + (30 * (1 - inset * 2)) / 2 - 2;
  const barW = w + 8 * (1 - inset * 2);
  const barH = 5 * (1 - inset * 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${C.wall}"/>
  <path transform="translate(${x.toFixed(2)} ${base.toFixed(2)}) scale(${scale.toFixed(5)})" fill="${C.onWall}" d="${meta.jr.d}"/>
  <rect x="${((s - barW) / 2).toFixed(2)}" y="${(base + 5 * (1 - inset * 2)).toFixed(2)}" width="${barW.toFixed(2)}" height="${barH.toFixed(2)}" fill="${C.sand}"/>
</svg>
`;
}

function ico(pngs) {
  // ICO container holding PNG images (supported everywhere that matters)
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + i * 16;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt8(0, e + 2);
    header.writeUInt8(0, e + 3);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...pngs.map((p) => p.data)]);
}

const svgIcon = mark();
writeFileSync(join(pub, 'favicon.svg'), svgIcon);
writeFileSync(join(pub, 'logo.svg'), svgIcon);
writeFileSync(join(pub, 'favicon-32.png'), render(svgIcon, 32));
writeFileSync(
  join(pub, 'favicon.ico'),
  ico([16, 32, 48].map((size) => ({ size, data: render(svgIcon, size) }))),
);
// iOS rounds the corners itself and dislikes transparency
writeFileSync(
  join(pub, 'apple-touch-icon.png'),
  render(mark({ radius: 0 }), 180),
);
writeFileSync(join(pub, 'icon-192.png'), render(svgIcon, 192));
writeFileSync(join(pub, 'icon-512.png'), render(svgIcon, 512));
writeFileSync(
  join(pub, 'icon-maskable-512.png'),
  render(mark({ radius: 0, inset: 0.12 }), 512),
);

/* ---------- Open Graph cards (1200x630) ---------- */

const photo = (
  await sharp(join(root, 'src/assets/jonramos.webp'))
    .resize(420, 616, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 88 })
    .toBuffer()
).toString('base64');

const paint = (text, x, y, size, fill = C.onWall) =>
  `<text x="${x}" y="${y}" font-family="Archivo Paint" font-size="${size}" fill="${fill}">${esc(text)}</text>`;
const plain = (text, x, y, size, fill, bold = false) =>
  `<text x="${x}" y="${y}" font-family="${bold ? 'Archivo Text Bold' : 'Archivo Text'}" font-size="${size}" fill="${fill}">${esc(text)}</text>`;

const card = (
  body,
) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${C.wall}"/>
  ${body}
  <rect y="616" width="1200" height="14" fill="${C.sand}"/>
</svg>`;

const home = {
  es: [
    'Programador en Urnieta, Gipuzkoa',
    'Webs para negocios y aplicaciones en Clojure',
  ],
  eu: [
    'Programatzailea Urnietan, Gipuzkoan',
    'Negozioentzako webak eta Clojure aplikazioak',
  ],
  en: [
    'Software engineer in Urnieta, Gipuzkoa',
    'Websites for local businesses and Clojure apps',
  ],
};

const local = {
  es: [
    ['Páginas web', 'para negocios', 'de Gipuzkoa'],
    'En euskera y castellano, rápidas y pensadas para Google',
  ],
  eu: [
    ['Web orriak', 'Gipuzkoako', 'negozioentzat'],
    'Euskaraz eta gaztelaniaz, azkarrak eta Googlerako pentsatuak',
  ],
  en: [
    ['Websites', 'for businesses', 'in Gipuzkoa'],
    'In Basque and Spanish, fast, and built to be found on Google',
  ],
};

const jpeg = (png) =>
  sharp(png).jpeg({ quality: 86, progressive: true, mozjpeg: true }).toBuffer();

mkdirSync(join(pub, 'og'), { recursive: true });

for (const [lang, [role, line]] of Object.entries(home)) {
  const svg = card(`
  <image x="780" y="0" width="420" height="616" xlink:href="data:image/jpeg;base64,${photo}"/>
  ${paint('Jon', 64, 236, 236)}
  ${paint('Ramos', 64, 432, 236)}
  ${plain(role, 72, 500, 36, C.onWall, true)}
  ${plain(line, 72, 548, 30, C.sand)}
  ${plain('jonramos.dev', 72, 590, 22, C.onWallMuted, true)}`);
  const out = await jpeg(render(svg, 1200));
  writeFileSync(join(pub, 'og', `home-${lang}.jpg`), out);
  if (lang === 'en') writeFileSync(join(pub, 'og-image.jpg'), out);
}

for (const [lang, [lines, foot]] of Object.entries(local)) {
  const svg = card(`
  ${lines.map((l, i) => paint(l, 64, 168 + i * 138, 158)).join('\n  ')}
  ${plain(foot, 72, 520, 32, C.sand)}
  ${plain('Jon Ramos', 72, 580, 28, C.onWall, true)}
  <text x="1128" y="580" text-anchor="end" font-family="Archivo Text Bold" font-size="28" fill="${C.onWallMuted}">jonramos.dev</text>`);
  writeFileSync(
    join(pub, 'og', `local-${lang}.jpg`),
    await jpeg(render(svg, 1200)),
  );
}

/* ---------- demo cards (pages served from or linked to jonramos.dev) */

const demoCard = (lines, foot, extra = '') =>
  card(`
  ${lines.map((l, i) => paint(l, 64, 190 + i * 160, 180)).join('\n  ')}
  ${extra}
  ${plain(foot, 72, 520, 32, C.sand)}
  ${plain('Jon Ramos', 72, 580, 28, C.onWall, true)}
  <text x="1128" y="580" text-anchor="end" font-family="Archivo Text Bold" font-size="28" fill="${C.onWallMuted}">jonramos.dev</text>`);

writeFileSync(
  join(pub, 'og', 'demo-nested-menu.jpg'),
  await jpeg(
    render(
      demoCard(
        ['Nested menus,', 'from data.'],
        'reagent-mui-nested-menu for Reagent and React, on MUI',
      ),
      1200,
    ),
  ),
);

// a strip of real swatches: the colour-tools subject, not decoration
const swatches = [
  '#0f2c42',
  '#163b57',
  '#2f6690',
  '#6fa3c8',
  '#e9c46a',
  '#f3f5f4',
]
  .map(
    (hex, i) =>
      `<rect x="${784 + i * 56}" y="96" width="48" height="196" fill="${hex}" stroke="#0b1721" stroke-opacity="0.25"/>`,
  )
  .join('');
writeFileSync(
  join(pub, 'og', 'demo-color-tools.jpg'),
  await jpeg(
    render(
      demoCard(
        ['color-tools'],
        'Palettes, accessible themes and WCAG contrast for Clojure',
        swatches,
      ),
      1200,
    ),
  ),
);

console.log('brand assets written to public/');
