# Jon Ramos — Design System

> **REPL Editorial** — a personal-portfolio design system for Jon Ramos, software engineer.
> It takes the developer-terminal DNA of his site and recuts it as something warmer and more
> premium: an editorial serif voice, a parchment/ink ground, and a single jewel-teal accent
> with a metallic shell companion. Built to design and ship `jonramos.dev` — and anything
> adjacent (slides, docs, one-pagers) — without it looking like every other AI-built portfolio.

---

## Who this is for

**Jon Ramos** is a software engineer and web developer based in **Urnieta, Basque Country
(Euskal Herria)**. He builds high-performance, data-driven websites and web applications —
**Astro** for static/SSR sites, **Clojure & ClojureScript** for the complex ones — and is an
active open-source contributor to the Clojure tooling ecosystem (clj-kondo, cljfmt, Calva,
Logseq). He currently builds **Naiha**, a healthcare platform, at **Ubikare**.

The product this system serves is his **personal portfolio**: a single-page, trilingual
(**EN / ES / EU**) site with a light/dark theme toggle, a hero, an experience timeline, a
project grid, an open-source contributions panel, and a contact form.

### Source material

- **GitHub repo:** [`jramosg/jonramos`](https://github.com/jramosg/jonramos) — the live Astro
  portfolio. Browse it to see the real component structure (`Hero.astro`, `Projects.astro`,
  `Experience.astro`, `Contact.astro`), the trilingual i18n strings (`src/i18n/ui.ts`), and
  the theme-switcher. The copy and section structure in this system are lifted faithfully from
  there; the **visual language is a deliberate evolution**, not a copy.
- Jon's other repos worth exploring for tone & tech: [`jon-nested-menu`](https://github.com/jramosg/jon-nested-menu),
  [`cljdoc-analyzer`](https://github.com/jramosg/cljdoc-analyzer).

> This README references those URLs so a future reader can explore the originals and build
> higher-fidelity work. You do **not** need access to them to use this system — everything
> needed is vendored here.

### What changed from the original (by request)

The user asked for **new colors, a new logo, and a more premium feel**, taking the repo as a
reference but free to diverge:

- **Colors** — the original GitHub-flavored green-on-cool-grey is replaced by a bespoke
  **Teal** (jewel green) + **Shell** (metallic) pairing over **warm Ink (navy)** and **Sky**
  grounds. Warmer, richer, less "default dev portfolio."
- **Logo** — a brand-new mark: a **live Lisp form** — Clojure parentheses `( )` framing a teal
  prompt chevron and a shell cursor block. It fuses Jon's three signals (Lisp/Clojure heritage,
  the terminal prompt, craft) into one geometric, favicon-ready glyph.
- **Type** — kept the two-voice idea but elevated it: **Crimson Pro** (editorial high-contrast
  serif) as the human voice, **JetBrains Mono** as the machine voice.

---

## Content fundamentals — how the brand writes

The voice is **a senior engineer who reads books**: precise and technical, but never cold. It
pairs plain-spoken confidence with a quiet editorial polish. Two registers run side by side —
the **human voice** (serif prose) and the **machine voice** (mono labels, commands, metadata).

- **Person & address.** First-person singular for Jon's own narration — *"I build websites and
  web applications…"*, *"currently building Naiha."* Direct **"you"** only in the contact CTA
  (*"Got a question or a proposal? I'll get back to you shortly."*). Never corporate "we."
- **Tone.** Understated and concrete. Claims are backed by specifics (technologies, places,
  outcomes) rather than adjectives. *"high performance, data-driven solutions, and design"* —
  not *"cutting-edge, world-class, innovative."* One thousand no's for every yes.
- **Casing.** Sentence case for prose and headlines (*"Selected projects"*, *"Get in touch"*).
  **UPPERCASE, letter-spaced mono** for eyebrows, nav indices, field labels, and tags
  (`EXPERIENCE`, `WEBAPPLICATION`, `01`). Never Title Case Everything.
- **The terminal grammar.** Section eyebrows carry a Clojure-style `;;` comment marker; section
  titles a `//`; interactive moments use a `$ command_` prompt with a blinking cursor
  (`$ whoami_`, `git log --author="jon"`). Schema.org-style type tokens label projects
  (`WebApplication`, `WebSite`, `Library`). These are the brand's wink — used sparingly, as
  punctuation, never wall-to-wall.
- **Multilingual.** Everything ships in **English, Spanish, and Basque**. Basque (Euskara) is a
  first-class citizen, not an afterthought — *"kaixo"*, *"Euskal Herria"*, place names in
  Basque. Keep translations parallel in length and tone.
- **Numbers as proof.** Open-source impact is stated numerically and plainly: *"40+ merged PRs,
  10 projects, 6 technologies."* Tabular, mono, no fanfare.
- **Emoji.** **None.** The terminal sigils (`;;`, `//`, `$`, `›`, `_`, `:`) and corner ticks do
  all the ornamental work. Unicode middots (`·`) separate metadata.

**Voice cheat-sheet**

| Do | Don't |
|---|---|
| "I build data-driven web applications." | "I craft beautiful digital experiences." ✕ |
| "Currently building Naiha at Ubikare." | "Passionate about leveraging synergies." ✕ |
| `;; selected work` / `// Projects` | 🚀 Projects 🔥 ✕ |
| "40+ merged PRs" | "Countless contributions" ✕ |

---

## Visual foundations

The system has **two grounds** lit by **two metals**. **Ink** (a warm near-black with a faint
green cast) is the **default, signature mode**; **Paper** (pale-blue parchment, never clinical white)
is the light flip. A single **Teal** does all the accenting; **Shell** is the premium emphasis
note; **Clay** is held in reserve for alerts only.

- **Color vibe.** Warm and low-key. Even the "blacks" and "whites" are tinted (greenish ink,
  yellowish paper). The accent teal is a jewel tone, not a neon dev-green. Imagery (the portrait)
  is shown as-is, framed — no duotone, no heavy grade. Restraint: most of any screen is ground +
  text; color appears in small, deliberate hits.
- **Type.** **Crimson Pro** for everything human — display, headlines, prose, the italic
  subhead — set **large, tight (-0.02em), and airy** (leading up to 1.75 for body). **JetBrains
  Mono** for everything machine — eyebrows, labels, tags, indices, code, prompts — tracked wide
  (+0.14em) and uppercased for labels, tabular for numbers. The serif/mono contrast *is* the
  brand.
- **Spacing & layout.** A quiet 4px-based grid; a generous `1180px` max container; `68ch` prose
  measure. The nav is **fixed**, translucent, blurred (`backdrop-filter: blur(14px)`) over the
  ground. Sections breathe with `96px` vertical rhythm. Layout is editorial — asymmetric hero
  (1.1fr / 0.9fr), a single-rail timeline, an auto-fill project grid.
- **Backgrounds.** The signature `.ds-ground`: a faint **engineering grid** (64px, radial-masked
  so it fades below the fold) plus a barely-there **diagonal teal hatch wash**. No photographic
  backgrounds, no big gradients, no purple. A "sheet of engineering paper."
- **Borders & elevation.** **Hairline-first.** Depth is carried by 1px hairlines
  (`rgba` of the foreground), *then* a quiet shadow. Cards = raised surface + hairline + small
  radius; featured cards add a 2px **teal top rule**. **Corner registration ticks** (┌ ┐ └ ┘)
  frame portraits and special cards — a drafting/viewfinder motif. A `glow-teal` ring is the
  one "loud" elevation, used rarely.
- **Corner radii.** **Small and crisp** — 3–12px on most things ("a terminal keeps its
  corners"); pills only for badges. Nothing is heavily rounded.
- **Cards.** Raised warm surface, 1px hairline, `--radius-lg` (12px), `32px` padding. On hover:
  lift `-3px`, border shifts to teal, a quiet `shadow-md` appears, and a hover-reveal `↗` arrow
  slides in next to linked titles. Optional `;;` eyebrow + numeric index in the header.
- **Motion.** **Calm and expo-eased** — `cubic-bezier(0.16, 1, 0.3, 1)`, 140–480ms. Fades and
  small translateY lifts; **no bounces, no springs, no parallax.** The only loop is the blinking
  terminal cursor and an optional slow status-dot pulse. All animation respects
  `prefers-reduced-motion` and is gated so print/PDF show the end state.
- **Hover / press states.** Hover: color warms toward teal, hairline brightens to
  `accent-line`, surface lifts. Press: a 1px `translateY` settle (buttons), never a scale-down.
  Focus: a 2px teal `focus-ring` with 2px offset, plus a 3px soft teal halo on inputs.
- **Transparency & blur.** Used only where it earns it: the fixed nav (translucent +
  backdrop-blur) and the soft accent fills (`accent-soft`, ~13% teal). Surfaces themselves are
  opaque.

See the **Design System** tab for live specimen cards of every one of these foundations.

---

## Iconography

- **System.** A small, hand-picked **line-icon set in the Lucide / Feather idiom** — 24×24
  viewBox, **2px round-cap, round-join strokes, `currentColor`** so icons inherit text color and
  the teal accent. This matches the stroke weight and feel of the SVGs in the source repo
  (`src/assets/*.svg`). The set is defined inline in
  [`ui_kits/portfolio/icons.js`](ui_kits/portfolio/icons.js) (`window.Icon`,
  `window.Icons`) — github, linkedin, mail, arrow, arrow-up-right, sun/moon (theme),
  git-pull-request, menu, map — so kits need no CDN round-trip. **Two brand icons** (`github`,
  `linkedin`) are **filled** glyphs; the rest are strokes.
- **Source icons preserved.** The original project's own assets are vendored under
  [`assets/icons/`](assets/icons/) (arrow-right, chevron-down, external-link, git-pull-request,
  github, search, activity) and [`assets/social/`](assets/social/) (github, linkedin, mail,
  coffee). Technology logos (Clojure, ClojureScript, TypeScript, JS, Python, Astro, GSAP,
  Datomic, Calva, clj-kondo, Logseq) are vendored under [`assets/tech/`](assets/tech/) as the
  brand-colored SVG/PNG marks the site uses for its stack list. **Copy these in rather than
  redrawing them.**
- **The logo mark** ([`assets/logo/`](assets/logo/)) is *not* an icon — it's the brand glyph.
  Three cuts: `mark-ink.svg` (teal on ink tile, the app icon / favicon), `mark-paper.svg`
  (light tile), `mark-mono.svg` (tile-less, `currentColor` parens + shell cursor — for inline
  lockups). Don't recolor the shell cursor.
- **Emoji & unicode.** **No emoji, ever.** The icon set + terminal sigils carry all ornament.
  The only "unicode as icon" usage is the middot `·` as a metadata separator and the corner-tick
  characters used decoratively via CSS borders.
- **Adding icons.** Stay in the Lucide family (search [lucide.dev](https://lucide.dev)). If you
  must pull from a CDN, use Lucide so the stroke weight matches; flag any other set.

> **Font substitution note (please confirm):** the original site's exact display/body fonts were
> not vendored in the repo, so this system standardizes on **Crimson Pro** + **JetBrains Mono**
> (both self-hosted here as variable fonts from Google Fonts). If you have specific licensed
> fonts you'd rather use, send the files and I'll swap them in — the `@font-face` rules live in
> [`tokens/fonts.css`](tokens/fonts.css).

---

## Index — what's in this system

**Foundations**
- [`styles.css`](styles.css) — the single entry point consumers link. `@import` manifest only.
- [`tokens/colors.css`](tokens/colors.css) — Ink, Paper, Teal, Shell, Clay scales + semantic
  aliases; `[data-theme="light"]` flip.
- [`tokens/typography.css`](tokens/typography.css) — families, fluid type scale, weights,
  leading, tracking.
- [`tokens/spacing.css`](tokens/spacing.css) — 4px spacing, crisp radii, hairline-first
  elevation, expo motion.
- [`tokens/fonts.css`](tokens/fonts.css) — self-hosted Crimson Pro + JetBrains Mono `@font-face`.
- [`tokens/base.css`](tokens/base.css) — element defaults + REPL helper classes (`.ds-ground`,
  `.ds-eyebrow`, `.ds-section-title`, `.ds-prompt`, `.ds-index`, `.ds-rule`).

**Components** (`window.JonRamosDesignSystem_d2a695.*` — React, in [`components/`](components/))
- **Button**, **IconButton** — `components/button/`
- **Badge**, **Tag** — `components/badge/`
- **Card** — `components/card/`
- **Field**, **Input**, **Textarea** — `components/field/`
- **Prompt**, **CodeBlock** — `components/terminal/`
- **Avatar** — `components/avatar/`

Each has a `.d.ts` (props), `.prompt.md` (usage), and a `@dsCard` HTML specimen.

**UI kit**
- [`ui_kits/portfolio/`](ui_kits/portfolio/) — `index.html` is the full interactive,
  trilingual, theme-toggling portfolio recreation. Composes the components above; data in
  `data.js`, icons in `icons.js`, screens split into `Navbar/Hero/Experience/Projects/
  Contributions/Contact/App.jsx`, layout in `kit.css`. Also registered as a **Starting Point**.

**Brand assets** ([`assets/`](assets/))
- `logo/` — the mark (ink / paper / mono cuts) · `favicon.svg`
- `jonramos.webp` — portrait · `tech/` — stack logos · `social/`, `icons/` — UI icons · `fonts/`

**Meta**
- [`SKILL.md`](SKILL.md) — makes this folder usable as a downloadable Agent Skill.

---

*Design System tab:* every foundation, component, and the portfolio kit is registered as a live
card there — that's the fastest way to see the system in motion.
