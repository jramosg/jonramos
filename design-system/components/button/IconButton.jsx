import React from 'react';

const STYLE_ID = 'jr-iconbutton-styles';
const CSS = `
.jr-iconbtn {
  --_sz: 2.5rem;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--_sz); height: var(--_sz);
  border-radius: var(--radius-sm); cursor: pointer;
  background: transparent; color: var(--text-muted);
  border: 1px solid var(--hairline);
  transition: color var(--dur-base) var(--ease-out-expo),
              background var(--dur-base) var(--ease-out-expo),
              border-color var(--dur-base) var(--ease-out-expo),
              transform var(--dur-fast) var(--ease-out-expo);
}
.jr-iconbtn:hover { color: var(--accent); border-color: var(--accent-line); background: var(--accent-soft); }
.jr-iconbtn:active { transform: translateY(1px); }
.jr-iconbtn[disabled] { opacity: 0.45; pointer-events: none; }
.jr-iconbtn--sm { --_sz: 2rem; }
.jr-iconbtn--lg { --_sz: 3rem; }
.jr-iconbtn--solid { background: var(--surface-raised); border-color: var(--hairline-strong); color: var(--text-strong); }
.jr-iconbtn--solid:hover { color: var(--accent); }
.jr-iconbtn svg { width: 1.15em; height: 1.15em; display: block; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function IconButton({
  children,
  label,
  size = 'md',
  variant = 'ghost',
  href,
  disabled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const Tag = href ? 'a' : 'button';
  const cls = [
    'jr-iconbtn',
    size !== 'md' ? `jr-iconbtn--${size}` : '',
    variant === 'solid' ? 'jr-iconbtn--solid' : '',
    className,
  ].filter(Boolean).join(' ');
  const tagProps = href ? { href } : { type: 'button', disabled };
  return (
    <Tag className={cls} aria-label={label} title={label} {...tagProps} {...rest}>
      {children}
    </Tag>
  );
}
