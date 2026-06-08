---
name: jon-ramos-design
description: Use this skill to generate well-branded interfaces and assets for Jon Ramos (jonramos.dev — a software engineer's personal portfolio), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, a new premium logo, and a UI kit of React components for prototyping. The aesthetic is "REPL Editorial": a warm ink/parchment ground, a jewel-teal + shell accent pairing, an editorial Crimson Pro serif voice paired with JetBrains Mono, and subtle Clojure/terminal motifs (;; // $ _ and corner registration ticks).
user-invocable: true
---

# Jon Ramos — design skill

Read **`readme.md`** first — it is the full design guide: who Jon is, the source repo
([github.com/jramosg/jonramos](https://github.com/jramosg/jonramos)), content/voice rules,
visual foundations, and iconography. Then explore the other files as needed.

## What's here
- `styles.css` — the single CSS entry point. Link it (or its `@import`ed token files) and you
  get every color, font, and helper class. Default ground is **dark/ink**; add
  `data-theme="light"` for the parchment flip.
- `tokens/` — colors, typography, spacing, fonts, base/helper classes.
- `components/` — React UI primitives (Button, IconButton, Badge, Tag, Card, Field, Input,
  Textarea, Prompt, CodeBlock, Avatar). Each has a `.d.ts` (props) and `.prompt.md` (usage).
- `ui_kits/portfolio/` — the full interactive portfolio recreation; the best reference for how
  the pieces compose into a real screen.
- `assets/` — the logo (ink/paper/mono cuts + favicon), portrait, technology marks, icons,
  and self-hosted fonts.

## How to use it
- **Visual artifacts** (slides, mocks, throwaway prototypes): **copy the assets you need out**
  and write static HTML that links `styles.css`. Use the helper classes (`.ds-ground`,
  `.ds-eyebrow`, `.ds-section-title`, `.ds-prompt`) and the token variables directly — you do
  not need the React runtime for static work. Reproduce a component's look from its `.jsx` if
  helpful.
- **Production code**: copy the assets and the component `.jsx`/`.d.ts` you need, read the rules
  here, and design as a brand expert. The components are self-contained (React only, styled via
  CSS custom properties — no other deps).

## Non-negotiables (the short list)
- Two type voices: **Crimson Pro** (serif, human — prose & headlines) + **JetBrains Mono**
  (machine — labels, tags, code, the `$ prompt_`). Don't substitute Inter/Roboto/Arial.
- One accent: **teal**. One emphasis metal: **shell**. **Clay** only for alerts. Warm ink/paper
  grounds — never pure black or clinical white, never purple gradients.
- **No emoji.** Terminal sigils (`;;` `//` `$` `›` `_` `:`) and corner ticks do the ornament.
- Crisp small radii, hairline-first borders, calm expo motion (no bounces). Respect
  `prefers-reduced-motion`.

If the user invokes this skill without other guidance, ask what they want to build, ask a few
sharp questions (surface, audience, language(s) EN/ES/EU, light or dark), then act as an expert
designer who outputs **HTML artifacts** or **production code** depending on the need.
