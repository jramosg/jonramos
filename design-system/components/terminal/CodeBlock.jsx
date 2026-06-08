import React from 'react';

const STYLE_ID = 'jr-codeblock-styles';
const CSS = `
.jr-code {
  background: var(--surface-sunken); border: 1px solid var(--hairline);
  border-radius: var(--radius-md); overflow: hidden; font-family: var(--font-mono);
}
.jr-code__bar {
  display: flex; align-items: center; gap: 0.6ch;
  padding: 0.6rem 0.85rem; border-bottom: 1px solid var(--hairline);
  background: var(--surface-base);
}
.jr-code__dots { display: inline-flex; gap: 6px; margin-right: 0.4rem; }
.jr-code__dots i { width: 9px; height: 9px; border-radius: 50%; display: block; }
.jr-code__name { font-size: 0.72rem; color: var(--text-subtle); letter-spacing: 0.04em; }
.jr-code__name b { color: var(--accent); font-weight: 400; }
.jr-code__body { display: flex; font-size: 0.8rem; line-height: 1.7; overflow-x: auto; }
.jr-code__gutter { padding: 1rem 0; text-align: right; color: var(--text-faint); user-select: none; border-right: 1px solid var(--hairline); }
.jr-code__gutter span { display: block; padding: 0 0.85rem; font-variant-numeric: tabular-nums; }
.jr-code__pre { margin: 0; padding: 1rem 1.1rem; color: var(--text); white-space: pre; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function CodeBlock({ children, title, dots = false, lineNumbers = false, className = '', ...rest }) {
  useStyles();
  const text = typeof children === 'string' ? children : '';
  const lines = text ? text.replace(/\n$/, '').split('\n') : null;
  const cls = ['jr-code', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {(title || dots) && (
        <div className="jr-code__bar">
          {dots && (
            <span className="jr-code__dots" aria-hidden="true">
              <i style={{ background: 'var(--clay-500)' }} />
              <i style={{ background: 'var(--shell-500)' }} />
              <i style={{ background: 'var(--teal-500)' }} />
            </span>
          )}
          {title && <span className="jr-code__name">{title}</span>}
        </div>
      )}
      <div className="jr-code__body">
        {lineNumbers && lines && (
          <div className="jr-code__gutter" aria-hidden="true">
            {lines.map((_, i) => <span key={i}>{i + 1}</span>)}
          </div>
        )}
        <pre className="jr-code__pre">{children}</pre>
      </div>
    </div>
  );
}
