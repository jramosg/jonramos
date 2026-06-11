// Renders public/og-image.jpg from the design system.
//
// resvg-js needs static TTFs. Prepare them next to this script:
//   1. decompress the @fontsource woff2 files (npm: wawoff2)
//        crimson-pro-latin-wght-normal.woff2  -> .ttf
//        crimson-pro-latin-wght-italic.woff2  -> .ttf
//        jetbrains-mono-latin-{400,600}-normal.woff2 -> .ttf
//   2. instance the Crimson Pro variable fonts (python: fontTools.varLib.instancer)
//        normal wght=500 -> crimson-500.ttf
//        italic wght=600 -> crimson-italic-600.ttf
//        italic wght=400 -> crimson-italic-400.ttf
//   3. node render.mjs        (writes og.png)
//   4. sharp: resize to 1200x630, jpeg quality 90 -> public/og-image.jpg

import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ramos" x1="0%" y1="0%" x2="100%" y2="20%">
      <stop offset="15%" stop-color="#3bb0b2"/>
      <stop offset="95%" stop-color="#9aa3cc"/>
    </linearGradient>
    <linearGradient id="hairline" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#31999b" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#31999b" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="p1" cx="18%" cy="10%" r="60%">
      <stop offset="0%" stop-color="#31999b" stop-opacity="0.20"/>
      <stop offset="70%" stop-color="#31999b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="p2" cx="90%" cy="6%" r="55%">
      <stop offset="0%" stop-color="#8e98c2" stop-opacity="0.16"/>
      <stop offset="70%" stop-color="#8e98c2" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="p3" cx="82%" cy="95%" r="60%">
      <stop offset="0%" stop-color="#f4bdce" stop-opacity="0.10"/>
      <stop offset="70%" stop-color="#f4bdce" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="#31999b" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0a1020"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#p1)"/>
  <rect width="1200" height="630" fill="url(#p2)"/>
  <rect width="1200" height="630" fill="url(#p3)"/>

  <path d="M42 74 V42 H74" fill="none" stroke="#31999b" stroke-width="3"/>
  <path d="M1126 42 H1158 V74" fill="none" stroke="#31999b" stroke-width="3"/>
  <path d="M1158 556 V588 H1126" fill="none" stroke="#31999b" stroke-width="3"/>
  <path d="M74 588 H42 V556" fill="none" stroke="#31999b" stroke-width="3"/>

  <text x="96" y="112" font-family="JetBrains Mono" font-size="25" fill="#f1f7fb"><tspan fill="#7384a0">user=&gt; </tspan>(def jon (software-engineer))</text>
  <text x="96" y="154" font-family="JetBrains Mono" font-size="25" fill="#3bb0b2">#'user/jon</text>
  <text x="96" y="196" font-family="JetBrains Mono" font-size="25" fill="#3bb0b2">;;<tspan x="150" fill="#7384a0">Clojure &#183; ClojureScript &#183; Datomic &#183; React &#183; Astro</tspan></text>

  <text x="90" y="396" font-family="Crimson Pro" font-size="200" font-weight="500" fill="#f1f7fb" letter-spacing="-5">Jon <tspan font-style="italic" font-weight="600" fill="url(#ramos)">Ramos</tspan></text>

  <text x="96" y="474" font-family="Crimson Pro" font-style="italic" font-size="50" font-weight="400" fill="#a3b0c4">Full-Stack Software Engineer</text>

  <rect x="96" y="520" width="1010" height="1" fill="url(#hairline)"/>
  <rect x="96" y="519" width="72" height="3" fill="#31999b"/>

  <text x="96" y="572" font-family="JetBrains Mono" font-weight="600" font-size="26" fill="#f1f7fb">jonramos.dev</text>
  <text x="1106" y="572" text-anchor="end" font-family="JetBrains Mono" font-size="23" fill="#8e98c2">43.25&#176;N &#183; 2.00&#176;W &#8212; Urnieta, Euskal Herria</text>
</svg>`;

const resvg = new Resvg(svg, {
  font: {
    loadSystemFonts: false,
    fontFiles: [
      './crimson-500.ttf',
      './crimson-italic-600.ttf',
      './crimson-italic-400.ttf',
      './jetbrains-mono-latin-400-normal.ttf',
      './jetbrains-mono-latin-600-normal.ttf',
    ],
    defaultFontFamily: 'JetBrains Mono',
  },
  fitTo: { mode: 'width', value: 2400 },
});
writeFileSync('og.png', resvg.render().asPng());
console.log('og.png rendered');
