A portrait in the brand's registration frame, or a teal initials fallback.

```jsx
<Avatar src="/me.webp" alt="Jon Ramos" size={180} frame
        label={<><b>//</b> jon_ramos.jpeg</>} />
<Avatar initials="JR" size={56} round />
```

`frame` draws the four corner ticks; `round` switches to a circular crop; omit `src` to show `initials`.
