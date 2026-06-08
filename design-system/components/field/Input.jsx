import React from 'react';

const STYLE_ID = 'jr-input-styles';
const CSS = `
.jr-input {
  width: 100%; font-family: var(--font-mono); font-size: 0.9rem;
  color: var(--text-strong); background: var(--surface-sunken);
  border: 1px solid var(--hairline-strong); border-radius: var(--radius-sm);
  padding: 0.75rem 0.9rem; line-height: 1.4;
  transition: border-color var(--dur-base) var(--ease-out-expo), box-shadow var(--dur-base) var(--ease-out-expo), background var(--dur-base) var(--ease-out-expo);
}
.jr-input::placeholder { color: var(--text-faint); }
.jr-input:hover { border-color: var(--ink-600); }
.jr-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); background: var(--surface-base); }
.jr-input[aria-invalid="true"] { border-color: var(--clay); }
.jr-input[aria-invalid="true"]:focus { box-shadow: 0 0 0 3px var(--clay-soft); }
.jr-input:disabled { opacity: 0.5; cursor: not-allowed; }
.jr-input--has-prefix { padding-left: 2.1rem; }
.jr-input-wrap { position: relative; display: flex; align-items: center; }
.jr-input-wrap__prefix { position: absolute; left: 0.9rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.9rem; pointer-events: none; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Input({ prefix, invalid = false, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-input', prefix ? 'jr-input--has-prefix' : '', className].filter(Boolean).join(' ');
  const field = <input className={cls} aria-invalid={invalid || undefined} {...rest} />;
  if (!prefix) return field;
  return (
    <span className="jr-input-wrap">
      <span className="jr-input-wrap__prefix" aria-hidden="true">{prefix}</span>
      {field}
    </span>
  );
}
