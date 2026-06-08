Mono-set action button — use for any primary or secondary action; the teal `primary` is the page's single loudest element, so keep one per view.

```jsx
<Button variant="primary" sigil="›">View work</Button>
<Button variant="secondary">Contact me</Button>
<Button variant="ghost" size="sm">Read more</Button>
<Button variant="shell" href="/cv.pdf">Download CV</Button>
```

Variants: `primary` (teal fill), `secondary` (hairline on raised surface), `ghost` (quiet), `blush` (pale-rose CTA), `danger` (clay outline).
Sizes: `sm` · `md` · `lg`. Pass `sigil` for a terminal flavour (`$`, `›`), or `icon` / `iconRight` for SVG glyphs. Set `href` to render an anchor.
