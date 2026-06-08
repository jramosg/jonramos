The workhorse surface — projects, experience, contact methods. Composes `Tag`/`Badge` in its slots.

```jsx
<Card
  href="https://naiha.io"
  eyebrow="WebApplication"
  index="01"
  title="Naiha"
  featured
  footer={<><Tag lead=":">Clojure</Tag><Tag>Datomic</Tag></>}
>
  A healthcare platform built with Clojure, ClojureScript and Datomic.
</Card>
```

Chrome is all opt-in: `eyebrow`, `index`, `action`, `footer`, `frame` (corner ticks), `featured` (teal top rule). Setting `href` makes it a lifting anchor with a hover arrow.
