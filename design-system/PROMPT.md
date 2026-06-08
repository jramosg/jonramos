# Prompt — Jon Ramos Design System changes

Use this file as a starting prompt when you want to iterate on the design system.
Paste it (or a section of it) into a new conversation with Claude.

---

## Context block (paste this first)

```
I have a personal portfolio design system called "Jon Ramos Design System"
(project ID: 4c315d04-fe5c-46af-91fa-6a61769bb373).

The system is called "REPL Editorial". Key facts:
- Two type voices: Crimson Pro (serif, human) + JetBrains Mono (machine/mono).
- Palette: warm Ink (navy) (dark ground) + Paper (light ground), Teal accent, Shell highlight, Clay for alerts only.
- Logo: Clojure parens framing a teal prompt chevron + shell cursor block.
- Signature surface motif: .ds-ground (engineering grid + diagonal hatch wash).
- Terminal grammar: ;; eyebrows, // titles, $ prompts, blinking _ cursor, numeric 01/02 indices.
- No emoji. Sentence case headlines. Mono UPPERCASE labels.
- Portfolio is a single-page trilingual site (EN / ES / EU) with light/dark theme toggle.
- Source repo: https://github.com/jramosg/jonramos

Files to know:
- styles.css — the CSS entry point (imports tokens/)
- tokens/colors.css — Teal, Shell, Clay, Ink, Paper + semantic aliases
- tokens/typography.css — type scale + families
- tokens/spacing.css — spacing, radii, elevation, motion
- tokens/base.css — base resets + .ds-* helper classes
- components/ — Button, IconButton, Badge, Tag, Card, Field/Input/Textarea, Prompt, CodeBlock, Avatar
- ui_kits/portfolio/ — full interactive portfolio UI kit
- assets/logo/ — mark-ink.svg, mark-paper.svg, mark-mono.svg + favicon.svg
- readme.md — full design guide
```

---

## Iteration prompts — pick one and append below the context block

### → Change the logo
```
Please redesign the logo mark. I want: [describe what you want — e.g. a JR monogram /
a pure wordmark / keep the parens but change the cursor / make it rounder / etc.]
Update mark-ink.svg, mark-paper.svg, mark-mono.svg and favicon.svg.
Make sure the logo card at guidelines/brand/logo.card.html reflects the new mark.
```

### → Change the accent color
```
Please change the signature accent color from Teal to [new color description,
e.g. "a deep electric violet" / "a warm amber" / "a cold electric blue"].
Update tokens/colors.css — the --teal-* scale and all --accent / --accent-* semantic
aliases, plus update the code-token palette (--code-keyword) to match.
Regenerate the teal.card.html specimen and update any hardcoded teal hex values in the
logo SVGs.
```

### → Retheme the whole palette
```
Please retheme the system. Keep the two-voice typography (Crimson Pro + JetBrains Mono)
but change the color palette to: [describe new palette — e.g. "midnight navy + warm
sand + hot coral accent" or "forest dark + sky parchment + terracotta"].
Update tokens/colors.css in full (both dark and light themes), update the logo SVGs to
match the new accent, and regenerate all color specimen cards under guidelines/colors/.
```

### → Change the typefaces
```
Please swap the typefaces. I'm attaching new font files:
- [font name] → replace Crimson Pro (the "human voice", used for headlines and prose)
- [font name] → replace JetBrains Mono (the "machine voice", used for labels and code)
Update tokens/fonts.css with new @font-face rules pointing to the new files,
update --font-serif and --font-mono in tokens/typography.css,
and update the type specimen cards under guidelines/type/.
```

### → Add a new component
```
Please add a new [component name] component to the design system.
It should: [describe what it does and what variants/states it needs].
Create components/[group]/[Name].jsx, [Name].d.ts, [Name].prompt.md,
and a [Name].card.html specimen tagged with <!-- @dsCard group="Components" -->.
Then call check_design_system to confirm it compiled cleanly.
```

### → Improve the portfolio hero
```
Please redesign the hero section of the portfolio UI kit
(ui_kits/portfolio/Hero.jsx and ui_kits/portfolio/kit.css).
I want: [describe the change — e.g. "a full-bleed background with grid overlay" /
"the name much larger, single column" / "a terminal REPL block in place of the avatar" /
"a split layout with the photo on the left"].
Keep the trilingual copy from data.js unchanged.
```

### → Add a light-mode polished version
```
The current light theme ([data-theme="light"]) works but hasn't been carefully
tuned. Please open the portfolio UI kit (ui_kits/portfolio/index.html) and switch
it to light mode, then audit every section visually. Adjust any token values in
tokens/colors.css (under [data-theme="light"]) that look off — hairlines too faint,
contrast too low, shadows too heavy, etc. Document what you changed and why.
```

### → Create a presentation slide template
```
Please create a slide deck template for Jon Ramos — a 1920×1080 slide deck using
deck_stage.js. Include at least: a Title slide, a Section header slide, a Two-column
content slide, a Project showcase slide (using the Card component style), and a
Contact/closing slide. Use the brand's Ink ground, Crimson Pro headers, JetBrains
Mono labels, Teal accent, and the logo mark. Tag each slide HTML with
<!-- @dsCard group="Slides" viewport="1280x720" --> so they appear in the DS tab.
```

### → General changes
```
Please make the following changes to the design system:
[describe your changes in plain English — the agent will read readme.md and the
relevant source files before making any edits]
```

---

*Source: Jon Ramos Design System — readme.md*
