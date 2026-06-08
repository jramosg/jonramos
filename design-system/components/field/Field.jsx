import React from 'react';

const STYLE_ID = 'jr-field-styles';
const CSS = `
.jr-field { display: flex; flex-direction: column; gap: 0.5rem; }
.jr-field__label { display: inline-flex; align-items: baseline; gap: 0.6ch; font-family: var(--font-mono); font-size: 0.74rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-subtle); }
.jr-field__label .jr-field__sigil { color: var(--accent); text-transform: none; letter-spacing: 0; }
.jr-field__req { color: var(--shell); }
.jr-field__hint { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-faint); }
.jr-field__error { font-family: var(--font-mono); font-size: 0.72rem; color: var(--clay); display: inline-flex; gap: 0.5ch; }
.jr-field__error::before { content: '!'; font-weight: 700; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Field({ label, htmlFor, sigil = '>', required = false, hint, error, children, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-field', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {label && (
        <label className="jr-field__label" htmlFor={htmlFor}>
          {sigil && <span className="jr-field__sigil" aria-hidden="true">{sigil}</span>}
          {label}
          {required && <span className="jr-field__req" aria-hidden="true">*</span>}
        </label>
      )}
      {children}
      {error ? <span className="jr-field__error">{error}</span>
             : hint ? <span className="jr-field__hint">{hint}</span> : null}
    </div>
  );
}
