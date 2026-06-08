A code/REPL window for showing snippets — about pages, project detail, docs.

```jsx
<CodeBlock title={<>~/ <b>core.clj</b></>} dots lineNumbers>{`(defn greet [name]
  (str "kaixo, " name "!"))`}</CodeBlock>
```

`dots` shows traffic lights; `lineNumbers` adds a gutter (needs string children). Wrap tokens in spans coloured with `--code-keyword`, `--code-string`, etc. for highlighting.
