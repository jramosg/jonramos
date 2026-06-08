import React from 'react';

const STYLE_ID = 'jr-avatar-styles';
const CSS = `
.jr-avatar { display: inline-flex; flex-direction: column; align-items: center; gap: 0.6rem; }
.jr-avatar__frame { position: relative; padding: 0.6rem; }
.jr-avatar__img, .jr-avatar__fallback {
  display: block; border-radius: var(--radius-xs); object-fit: cover;
  background: var(--surface-overlay);
}
.jr-avatar__fallback {
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-mono); font-weight: 600; color: var(--accent);
  background: var(--accent-soft); border: 1px solid var(--accent-line);
  letter-spacing: 0.02em;
}
.jr-avatar--round .jr-avatar__img, .jr-avatar--round .jr-avatar__fallback { border-radius: 50%; }
.jr-avatar__tick { position: absolute; width: 16px; height: 16px; border-color: var(--accent); border-style: solid; }
.jr-avatar__tick.tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
.jr-avatar__tick.tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
.jr-avatar__tick.bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
.jr-avatar__tick.br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }
.jr-avatar__label { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-subtle); }
.jr-avatar__label b { color: var(--accent); font-weight: 400; }
`;

function useStyles() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(STYLE_ID)) {
    const el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = CSS;
    document.head.appendChild(el);
  }
}

export function Avatar({ src, alt = '', initials, size = 96, round = false, frame = false, label, className = '', ...rest }) {
  useStyles();
  const cls = ['jr-avatar', round ? 'jr-avatar--round' : '', className].filter(Boolean).join(' ');
  const dim = { width: size, height: size };
  return (
    <figure className={cls} style={{ margin: 0 }} {...rest}>
      <div className="jr-avatar__frame">
        {frame && <><span className="jr-avatar__tick tl" /><span className="jr-avatar__tick tr" /><span className="jr-avatar__tick bl" /><span className="jr-avatar__tick br" /></>}
        {src
          ? <img className="jr-avatar__img" src={src} alt={alt} style={dim} />
          : <span className="jr-avatar__fallback" style={{ ...dim, fontSize: size * 0.36 }}>{initials}</span>}
      </div>
      {label && <figcaption className="jr-avatar__label">{label}</figcaption>}
    </figure>
  );
}
