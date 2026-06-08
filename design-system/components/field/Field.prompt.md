Label + control + hint/error wrapper. Wrap any `Input`, `Textarea` or `Select`.

```jsx
<Field label="Email" htmlFor="email" required hint="I reply within a day">
  <Input id="email" type="email" prefix="@" placeholder="you@example.com" />
</Field>

<Field label="Message" htmlFor="msg" error="Message is required">
  <Textarea id="msg" invalid />
</Field>
```

The label is a mono uppercase eyebrow led by a teal `>`; `required` adds a shell `*`. `error` replaces `hint` and turns clay.
