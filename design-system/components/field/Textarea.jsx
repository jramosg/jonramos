import React from 'react';

const STYLE_ID = 'jr-textarea-styles';
const CSS = `
.jr-textarea {
  width: 100%; font-family: var(--font-mono); font-size: 0.9rem;
  color: var(--text-strong); background: var(--surface-sunken);
  border: 1px solid var(--hairline-strong); border-radius: var(--radius-sm);
  padding: 0.75rem 0.9rem; line-height: 1.6; resize: vertical; min-height: 6.5rem;
  transition: border-color var(--dur-base) var(--ease-out-expo), box-shadow var(--dur-base) var(--ease-out-expo), background var(--dur-base) var(--ease-out-expo);
}
.jr-textarea::placeholder { color: var(--text-faint); }
.jr-textarea:hover { border-color: var(--ink-600); }
.jr-textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); background: var(--surface-base); }
.jr-textarea[aria-invalid="true"] { border-color: var(--clay); }
.jr-textarea:disabled { opacity: 0.5; cursor: not-allowed; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Textarea({ invalid = false, rows = 4, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-textarea', className].filter(Boolean).join(' ');
  return <textarea className={cls} rows={rows} aria-invalid={invalid || undefined} {...rest} />;
}
