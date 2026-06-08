import React from 'react';

const STYLE_ID = 'jr-card-styles';
const CSS = `
.jr-card {
  position: relative; display: flex; flex-direction: column;
  background: var(--surface-raised); border: 1px solid var(--hairline);
  border-radius: var(--radius-lg); padding: var(--space-5);
  transition: transform var(--dur-base) var(--ease-out-expo),
              border-color var(--dur-base) var(--ease-out-expo),
              box-shadow var(--dur-base) var(--ease-out-expo);
}
.jr-card--interactive { cursor: pointer; }
.jr-card--interactive:hover { transform: translateY(-3px); border-color: var(--accent-line); box-shadow: var(--shadow-md); }
.jr-card--featured { border-top: 2px solid var(--accent); }
.jr-card__head { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-4); margin-bottom: var(--space-3); }
.jr-card__eyebrow { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-subtle); display: inline-flex; gap: 0.6ch; }
.jr-card__eyebrow::before { content: ';;'; color: var(--accent); }
.jr-card__index { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-faint); font-variant-numeric: tabular-nums; }
.jr-card__title { font-family: var(--font-serif); font-size: 1.4rem; font-weight: 600; letter-spacing: -0.01em; color: var(--text-strong); line-height: 1.2; margin: 0; display: inline-flex; align-items: center; gap: 0.5ch; }
.jr-card__arrow { color: var(--text-faint); transition: transform var(--dur-base) var(--ease-out-expo), color var(--dur-base) var(--ease-out-expo); }
.jr-card--interactive:hover .jr-card__arrow { color: var(--accent); transform: translate(2px,-2px); }
.jr-card__body { color: var(--text-muted); font-family: var(--font-serif); font-size: 1rem; line-height: 1.7; flex: 1; }
.jr-card__footer { display: flex; gap: 0.5ch; flex-wrap: wrap; margin-top: var(--space-4); padding-top: var(--space-4); border-top: 1px solid var(--hairline); }
.jr-card__tick { position: absolute; width: 12px; height: 12px; border-color: var(--accent); border-style: solid; opacity: .6; }
.jr-card__tick.tl { top: 8px; left: 8px; border-width: 1.5px 0 0 1.5px; }
.jr-card__tick.br { bottom: 8px; right: 8px; border-width: 0 1.5px 1.5px 0; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

const ArrowGlyph = (
  <svg className="jr-card__arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

export function Card({
  children, title, eyebrow, index, action, footer,
  href, featured = false, interactive, frame = false,
  showArrow, className = '', ...rest
}) {
  useStyles();
  const isInteractive = interactive ?? Boolean(href);
  const Tag = href ? 'a' : 'div';
  const cls = [
    'jr-card',
    isInteractive ? 'jr-card--interactive' : '',
    featured ? 'jr-card--featured' : '',
    className,
  ].filter(Boolean).join(' ');
  const withArrow = showArrow ?? Boolean(href);
  return (
    <Tag className={cls} href={href} {...rest}>
      {frame && <><span className="jr-card__tick tl" /><span className="jr-card__tick br" /></>}
      {(eyebrow || index || action) && (
        <div className="jr-card__head">
          {eyebrow && <span className="jr-card__eyebrow">{eyebrow}</span>}
          {index && <span className="jr-card__index">{index}</span>}
          {action}
        </div>
      )}
      {title && (
        <h3 className="jr-card__title">{title}{withArrow && ArrowGlyph}</h3>
      )}
      {children && <div className="jr-card__body">{children}</div>}
      {footer && <div className="jr-card__footer">{footer}</div>}
    </Tag>
  );
}
