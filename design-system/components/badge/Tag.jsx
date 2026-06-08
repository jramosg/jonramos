import React from 'react';

const STYLE_ID = 'jr-tag-styles';
const CSS = `
.jr-tag {
  display: inline-flex; align-items: center; gap: 0.5ch;
  font-family: var(--font-mono); font-size: 0.74rem; font-weight: 400;
  color: var(--text-muted); background: var(--surface-sunken);
  border: 1px solid var(--hairline); border-radius: var(--radius-sm);
  padding: 0.28rem 0.6rem; line-height: 1.2; white-space: nowrap;
  transition: color var(--dur-base) var(--ease-out-expo), border-color var(--dur-base) var(--ease-out-expo);
}
.jr-tag--accent { color: var(--accent); border-color: var(--accent-line); background: var(--accent-soft); }
a.jr-tag:hover { color: var(--text-strong); border-color: var(--accent-line); }
.jr-tag__lead { color: var(--accent); }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Tag({ children, accent = false, lead, href, className = '', ...rest }) {
  useStyles();
  const Tag = href ? 'a' : 'span';
  const cls = ['jr-tag', accent ? 'jr-tag--accent' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={cls} href={href} {...rest}>
      {lead && <span className="jr-tag__lead">{lead}</span>}
      {children}
    </Tag>
  );
}
