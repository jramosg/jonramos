import React from 'react';

const STYLE_ID = 'jr-badge-styles';
const CSS = `
.jr-badge {
  display: inline-flex; align-items: center; gap: 0.5ch;
  font-family: var(--font-mono); font-size: 0.7rem; font-weight: 500;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 0.3rem 0.65rem; border-radius: var(--radius-pill);
  border: 1px solid transparent; white-space: nowrap; line-height: 1;
}
.jr-badge--teal { color: var(--accent); background: var(--accent-soft); border-color: var(--accent-line); }
.jr-badge--shell { color: var(--shell); background: var(--shell-soft); border-color: var(--shell-line); }
.jr-badge--clay { color: var(--clay); background: var(--clay-soft); border-color: var(--clay-soft); }
.jr-badge--neutral { color: var(--text-muted); background: var(--surface-sunken); border-color: var(--hairline); }
.jr-badge__dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; flex: none; }
.jr-badge__dot--pulse { animation: jr-badge-pulse 2s ease-in-out infinite; }
@keyframes jr-badge-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Badge({ children, tone = 'teal', dot = false, pulse = false, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-badge', `jr-badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className={'jr-badge__dot' + (pulse ? ' jr-badge__dot--pulse' : '')} aria-hidden="true" />}
      {children}
    </span>
  );
}
