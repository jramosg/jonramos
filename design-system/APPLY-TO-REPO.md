# Prompt — Apply Jon Ramos Design System to the repo

Paste this entire file into a new conversation, then describe what you want to do.

---

## Context

```
I have a personal portfolio site at https://github.com/jramosg/jonramos (Astro, pnpm,
multilingual EN/ES/EU). I also have a design system called "Jon Ramos Design System"
(project ID: 4c315d04-fe5c-46af-91fa-6a61769bb373) with new colors, a new logo, and
a full set of design tokens and React components.

The design system is called "REPL Editorial". Its key decisions:

PALETTE
- Dark (default): Ink ground (#0A1020 → #0E1626 → #131C2E) + Teal accent (#5CB6B8)
  + Shell highlight (#F4BDCE) + Clay alerts (#F08562)
- Light: Paper ground (#F1F8FB → #E8F2F7 → #D6E9F0) + Teal (#31999B) + Shell (#B34D6C)
- All as CSS custom properties — see tokens/colors.css in the design system project.

TYPOGRAPHY
- "Human voice": Crimson Pro (variable, self-hosted) — all prose, headlines, display
- "Machine voice": JetBrains Mono (variable, self-hosted) — labels, tags, code, prompts
- Font files: assets/fonts/CrimsonPro-Variable.ttf, CrimsonPro-Italic-Variable.ttf,
  JetBrainsMono-Variable.ttf

LOGO (new)
- A Lisp-form mark: Clojure parens framing a teal prompt chevron + shell cursor block
- Three cuts: mark-ink.svg (dark bg), mark-paper.svg (light bg), mark-mono.svg (inline)
- Files: assets/logo/ in the design system project

DESIGN TOKENS (CSS custom properties)
All defined under :root in tokens/*.css:
  --font-serif, --font-mono
  --ink-950 → --ink-400, --sky-50 → --sky-400
  --teal-300 → --teal-900, --shell-300 → --shell-700, --clay-400 → --clay-600
  --surface-base, --surface-raised, --surface-sunken, --surface-overlay
  --text-strong, --text, --text-muted, --text-subtle, --text-faint
  --accent, --accent-hover, --accent-soft, --accent-line, --on-accent
  --shell, --shell-soft, --shell-line
  --hairline, --hairline-strong, --hairline-teal
  --radius-xs (3px) → --radius-pill
  --space-1 (4px) → --space-11 (128px)
  --shadow-sm, --shadow-md, --shadow-lg, --glow-teal
  --ease-out-expo, --ease-out-quint, --dur-fast (140ms), --dur-base (240ms), --dur-slow
  --nav-height (72px), --container-max (1180px), --gutter, --measure (68ch)
  Light theme under [data-theme="light"]

HELPER CSS CLASSES (from tokens/base.css)
  .ds-ground        — engineering grid + hatch wash background
  .ds-eyebrow       — mono uppercase label, auto-prefixed with teal ";;"
  .ds-section-title — serif title, auto-prefixed with teal "//"
  .ds-prompt        — terminal $ command_ line
  .ds-index         — tabular mono index (01, 02…)
  .ds-rule          — 1px hairline divider

DESIGN RULES
- No emoji. Sentence case headlines. Mono UPPERCASE for labels/eyebrows.
- Terminal sigils: ;; (comments/eyebrows), // (titles), $ (prompts), _ (cursor), : (tags)
- Serif/mono contrast IS the brand — never use both at the same size/weight for the same role
- Crisp small radii (3–12px), hairline-first borders, calm expo easing (no bounces/springs)
- Fixed translucent nav with backdrop-blur
- Corner registration ticks (border-based ┌┐└┘) frame portraits and key cards
- prefers-reduced-motion respected everywhere

COMPONENTS (React, already built — can be copied from the design system)
Button, IconButton, Badge, Tag, Card, Field, Input, Textarea, Prompt, CodeBlock, Avatar
Each in components/<group>/<Name>.jsx with a sibling .d.ts

SOURCE REPO STRUCTURE (jramosg/jonramos)
- Astro + pnpm + TypeScript
- Trilingual: src/i18n/ui.ts holds all copy in en/es/eu
- Pages: src/pages/[lang]/index.astro (hero, experience, projects, open source, contact)
- Components: src/components/*.astro (Hero, Navbar, Experience, Projects, Contact, Footer…)
- Theme switcher: src/components/theme-switcher/ (CSS + TS, localStorage)
- Assets: src/assets/ (jonramos.webp portrait, tech logos, icons)
- Existing color vars use CSS custom properties on :root (dark default, light via class)
```

---

## What to do

```
Please apply the Jon Ramos Design System to my Astro repo (jramosg/jonramos).

Specifically I want you to:

1. Read the current codebase — start with:
   - src/layouts/BaseLayout.astro (global CSS / existing tokens)
   - src/i18n/ui.ts (all copy — do NOT change any text)
   - src/components/Hero.astro, Navbar.astro, Experience.astro, Projects.astro,
     Contact.astro, Footer.astro
   - Any existing global CSS or style blocks

2. Replace the existing color/font CSS variables with the new design system tokens
   (listed above). Map each old variable to its new equivalent.

3. Swap the fonts to Crimson Pro (serif, human voice) + JetBrains Mono (mono, machine voice).
   - Add @font-face rules (font files need to be copied to src/assets/fonts/ or public/fonts/)
   - Update font-family references throughout

4. Replace the existing logo/favicon with the new mark.
   - Copy mark-ink.svg (or mark-mono.svg for inline use) into src/assets/logo/
   - Update Navbar and any other references

5. Apply the visual motifs:
   - .ds-ground (engineering grid surface) on the body/layout wrapper
   - ;; eyebrows on section intros
   - // prefix on section titles
   - $ whoami_ prompt in the hero
   - Corner registration ticks on the portrait
   - Numeric 01/02 indices on nav links

6. Tune each component/section — keep all markup structure and copy exactly as-is,
   only change the visual styling to match the new system.

7. Show me a before/after of each major section as you go.

Keep all existing functionality (language switching, theme toggle, form, scroll behavior).
Do not invent new sections or copy. Do not break the i18n routing.
```

---

*Jon Ramos Design System · project 4c315d04-fe5c-46af-91fa-6a61769bb373*
