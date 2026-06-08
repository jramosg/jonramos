import React from 'react';

const STYLE_ID = 'jr-prompt-styles';
const CSS = `
.jr-prompt {
  display: inline-flex; align-items: center; gap: 0.6ch;
  font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);
  line-height: 1.4;
}
.jr-prompt--boxed {
  background: var(--surface-sunken); border: 1px solid var(--hairline);
  border-radius: var(--radius-sm); padding: 0.6rem 0.9rem;
  box-shadow: var(--shadow-inset);
}
.jr-prompt__sigil { color: var(--accent); font-weight: 600; }
.jr-prompt__cmd { color: var(--text-strong); }
.jr-prompt__cmd--cursor::after { content: '_'; color: var(--accent); animation: jr-prompt-blink 1.1s step-end infinite; }
@keyframes jr-prompt-blink { 0%,100%{opacity:1} 50%{opacity:0} }
.jr-prompt__out { color: var(--text-subtle); }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Prompt({ sigil = '$', children, cursor = false, boxed = false, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-prompt', boxed ? 'jr-prompt--boxed' : '', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      <span className="jr-prompt__sigil" aria-hidden="true">{sigil}</span>
      <span className={'jr-prompt__cmd' + (cursor ? ' jr-prompt__cmd--cursor' : '')}>{children}</span>
    </span>
  );
}
