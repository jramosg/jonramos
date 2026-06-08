import React from 'react';

/* Inject component styles once. Hover/press/focus need real CSS,
   so we register a stylesheet keyed by id rather than inline styles. */
const STYLE_ID = 'jr-button-styles';
const CSS = `
.jr-btn {
  --_pad-y: 0.7rem; --_pad-x: 1.4rem; --_fs: 0.85rem;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.6ch;
  font-family: var(--font-mono); font-size: var(--_fs); font-weight: 500;
  letter-spacing: 0.01em; line-height: 1; white-space: nowrap;
  padding: var(--_pad-y) var(--_pad-x); border-radius: var(--radius-sm);
  border: 1px solid transparent; cursor: pointer; text-decoration: none;
  transition: transform var(--dur-fast) var(--ease-out-expo),
              background var(--dur-base) var(--ease-out-expo),
              border-color var(--dur-base) var(--ease-out-expo),
              color var(--dur-base) var(--ease-out-expo);
}
.jr-btn:active { transform: translateY(1px); }
.jr-btn[disabled], .jr-btn[aria-disabled="true"] { opacity: 0.45; pointer-events: none; }
.jr-btn .jr-btn__sigil { color: var(--accent); font-weight: 600; }

.jr-btn--sm { --_pad-y: 0.5rem; --_pad-x: 1rem; --_fs: 0.78rem; }
.jr-btn--lg { --_pad-y: 0.95rem; --_pad-x: 1.9rem; --_fs: 0.95rem; }

.jr-btn--primary { background: var(--accent); color: var(--on-accent); }
.jr-btn--primary .jr-btn__sigil { color: var(--on-accent); }
.jr-btn--primary:hover { background: var(--accent-hover); transform: translateY(-1px); }

.jr-btn--secondary { background: var(--surface-raised); color: var(--text-strong); border-color: var(--hairline-strong); }
.jr-btn--secondary:hover { border-color: var(--accent-line); background: var(--surface-overlay); transform: translateY(-1px); }

.jr-btn--ghost { background: transparent; color: var(--text-muted); border-color: var(--hairline); }
.jr-btn--ghost:hover { color: var(--text-strong); background: var(--accent-soft); border-color: var(--accent-line); }

.jr-btn--shell { background: var(--shell); color: var(--on-accent); }
.jr-btn--shell .jr-btn__sigil { color: var(--on-accent); }
.jr-btn--shell:hover { filter: brightness(1.08); transform: translateY(-1px); }

.jr-btn--danger { background: transparent; color: var(--clay); border-color: var(--clay-soft); }
.jr-btn--danger:hover { background: var(--clay-soft); }

.jr-btn__icon { display: inline-flex; width: 1.05em; height: 1.05em; }
.jr-btn__icon svg { width: 100%; height: 100%; display: block; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  sigil,
  icon,
  iconRight,
  href,
  disabled = false,
  className = '',
  ...rest
}) {
  useStyles();
  const Tag = href ? 'a' : 'button';
  const cls = [
    'jr-btn',
    `jr-btn--${variant}`,
    size !== 'md' ? `jr-btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  const tagProps = href
    ? { href, 'aria-disabled': disabled || undefined }
    : { type: rest.type || 'button', disabled };

  return (
    <Tag className={cls} {...tagProps} {...rest}>
      {sigil && <span className="jr-btn__sigil">{sigil}</span>}
      {icon && <span className="jr-btn__icon" aria-hidden="true">{icon}</span>}
      {children}
      {iconRight && <span className="jr-btn__icon" aria-hidden="true">{iconRight}</span>}
    </Tag>
  );
}
