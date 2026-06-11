# jonramos.dev

Personal site and portfolio of Jon Ramos, software engineer in Urnieta, Basque Country. Built with [Astro](https://astro.build) 5, server-rendered, in three languages. Live at [jonramos.dev](https://jonramos.dev).

The hero contains a working Clojure REPL. Type `(help)` in it.

## Stack

- **Astro 5** with the Node adapter (SSR, standalone mode)
- **TypeScript** everywhere; no client framework on the page
- **Astro Actions + Resend** for the contact form, with React Email templates
- **Leaflet** for the location map, fetched only when it scrolls near the viewport
- **Self-hosted fonts**: Crimson Pro (serif) and JetBrains Mono, preloaded, with metric-matched local fallbacks
- **Docker + GitHub Actions** for CI and deploys
- **pino** for structured server logs

## The REPL

The terminal in the hero is not an animation. A small Clojure reader and evaluator (about 200 lines of TypeScript, no dependencies) parses what you type and evaluates it:

```clojure
user=> (def jon (software-engineer))
#'user/jon
user=> (skills)
[:clojure :clojurescript :datomic :re-frame :react :astro :typescript :postgresql]
user=> (theme :light)
:light
user=> (* 6 7)
42
```

It supports `def`, `if`, `do`, `quote`, vectors, arithmetic, string and sequence functions, and a few site commands: `(projects)`, `(experience)` and `(contact)` scroll to their sections, `(theme :light)` flips the theme. Errors mimic real Clojure ("Unable to resolve symbol: foo in this context"). Arrow keys recall input history.

## i18n

English, Spanish and Basque, routed by path (`/en`, `/es`, `/eu`). The root URL resolves the language from the `Accept-Language` header and rewrites. Every page emits hreflang alternates for the same path in the other two languages, and the sitemap repeats them.

## Performance and accessibility

- Layout shift engineered out: the hero reserves height for the REPL lines, images declare `aspect-ratio`, fonts ship fallback metrics, `100svh` keeps mobile address-bar collapse from re-centering the hero
- Leaflet (~150 kB) loads through a dynamic import behind an IntersectionObserver
- Animations (typewriter, reveal-on-scroll, aurora) run in CSS, gate on `prefers-reduced-motion`, and degrade to visible content without JavaScript
- WCAG AA contrast in both themes, keyboard-operable menus and filters, `aria-live` form status
- JSON-LD structured data (Person, ProfilePage, WebSite, BreadcrumbList), per-page canonical and Open Graph tags

## Commands

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Dev server at `localhost:4321`       |
| `pnpm build`   | Type-check (`astro check`) and build |
| `pnpm preview` | Preview the production build         |

Node 22+ (see `.nvmrc`).

## Docker

```sh
docker build -t jonramos:latest .
docker compose up -d
```

Logs land in `./logs` (override with `LOG_DIR`): `info.log`, `warn.log`, `error.log`. Stop with `docker compose down`.

## OG image

`public/og-image.jpg` is generated from an SVG that uses the site's design tokens and fonts. The renderer lives in `scripts/og/render.mjs` (resvg-js with the decompressed brand fonts).

## Design system

Dark "ink" and light "sky" themes over a coastal palette: teal accent, periwinkle haze, shell pink. Crimson Pro carries the human voice (headings, prose), JetBrains Mono the machine voice (labels, code, the `;;` and `//` markers). The same tokens style the demos of [jon-nested-menu](https://github.com/jramosg/jon-nested-menu), a Reagent/MUI nested menu library published to Clojars and npm.
