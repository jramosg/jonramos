/* @ds-bundle: {"format":3,"namespace":"JonRamosDesignSystem_d2a695","components":[{"name":"Avatar","sourcePath":"components/avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Tag","sourcePath":"components/badge/Tag.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"IconButton","sourcePath":"components/button/IconButton.jsx"},{"name":"Card","sourcePath":"components/card/Card.jsx"},{"name":"Field","sourcePath":"components/field/Field.jsx"},{"name":"Input","sourcePath":"components/field/Input.jsx"},{"name":"Textarea","sourcePath":"components/field/Textarea.jsx"},{"name":"CodeBlock","sourcePath":"components/terminal/CodeBlock.jsx"},{"name":"Prompt","sourcePath":"components/terminal/Prompt.jsx"}],"sourceHashes":{"components/avatar/Avatar.jsx":"826c7098762c","components/badge/Badge.jsx":"37ec706547fd","components/badge/Tag.jsx":"1620a0a4ae78","components/button/Button.jsx":"7cdeadc605e5","components/button/IconButton.jsx":"5ca78d40e7ba","components/card/Card.jsx":"25522eaf8e25","components/field/Field.jsx":"093cfcbb78c4","components/field/Input.jsx":"4e79e480306e","components/field/Textarea.jsx":"ac2aed0c1992","components/terminal/CodeBlock.jsx":"3a3efccc52ef","components/terminal/Prompt.jsx":"73da83a05fe7","ui_kits/portfolio/App.jsx":"8c570cab3392","ui_kits/portfolio/Contact.jsx":"7c051395c0ef","ui_kits/portfolio/Contributions.jsx":"6c6de0df469e","ui_kits/portfolio/Experience.jsx":"80918b429365","ui_kits/portfolio/Hero.jsx":"3cbf61fbe83c","ui_kits/portfolio/Navbar.jsx":"cf6f3270278d","ui_kits/portfolio/Projects.jsx":"56d1904547d5","ui_kits/portfolio/data.js":"85f305c69e6b","ui_kits/portfolio/icons.js":"ff30b3c832ba"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JonRamosDesignSystem_d2a695 = window.JonRamosDesignSystem_d2a695 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/avatar/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Avatar({
  src,
  alt = '',
  initials,
  size = 96,
  round = false,
  frame = false,
  label,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-avatar', round ? 'jr-avatar--round' : '', className].filter(Boolean).join(' ');
  const dim = {
    width: size,
    height: size
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: cls,
    style: {
      margin: 0
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "jr-avatar__frame"
  }, frame && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "jr-avatar__tick tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jr-avatar__tick tr"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jr-avatar__tick bl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jr-avatar__tick br"
  })), src ? /*#__PURE__*/React.createElement("img", {
    className: "jr-avatar__img",
    src: src,
    alt: alt,
    style: dim
  }) : /*#__PURE__*/React.createElement("span", {
    className: "jr-avatar__fallback",
    style: {
      ...dim,
      fontSize: size * 0.36
    }
  }, initials)), label && /*#__PURE__*/React.createElement("figcaption", {
    className: "jr-avatar__label"
  }, label));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Badge({
  children,
  tone = 'teal',
  dot = false,
  pulse = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-badge', `jr-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: 'jr-badge__dot' + (pulse ? ' jr-badge__dot--pulse' : ''),
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/badge/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Tag({
  children,
  accent = false,
  lead,
  href,
  className = '',
  ...rest
}) {
  useStyles();
  const Tag = href ? 'a' : 'span';
  const cls = ['jr-tag', accent ? 'jr-tag--accent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), lead && /*#__PURE__*/React.createElement("span", {
    className: "jr-tag__lead"
  }, lead), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Tag.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ['jr-btn', `jr-btn--${variant}`, size !== 'md' ? `jr-btn--${size}` : '', className].filter(Boolean).join(' ');
  const tagProps = href ? {
    href,
    'aria-disabled': disabled || undefined
  } : {
    type: rest.type || 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, tagProps, rest), sigil && /*#__PURE__*/React.createElement("span", {
    className: "jr-btn__sigil"
  }, sigil), icon && /*#__PURE__*/React.createElement("span", {
    className: "jr-btn__icon",
    "aria-hidden": "true"
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "jr-btn__icon",
    "aria-hidden": "true"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/button/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function IconButton({
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
  const cls = ['jr-iconbtn', size !== 'md' ? `jr-iconbtn--${size}` : '', variant === 'solid' ? 'jr-iconbtn--solid' : '', className].filter(Boolean).join(' ');
  const tagProps = href ? {
    href
  } : {
    type: 'button',
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, tagProps, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
const ArrowGlyph = /*#__PURE__*/React.createElement("svg", {
  className: "jr-card__arrow",
  width: "15",
  height: "15",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 7 17 7 17 17"
}));
function Card({
  children,
  title,
  eyebrow,
  index,
  action,
  footer,
  href,
  featured = false,
  interactive,
  frame = false,
  showArrow,
  className = '',
  ...rest
}) {
  useStyles();
  const isInteractive = interactive ?? Boolean(href);
  const Tag = href ? 'a' : 'div';
  const cls = ['jr-card', isInteractive ? 'jr-card--interactive' : '', featured ? 'jr-card--featured' : '', className].filter(Boolean).join(' ');
  const withArrow = showArrow ?? Boolean(href);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, rest), frame && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "jr-card__tick tl"
  }), /*#__PURE__*/React.createElement("span", {
    className: "jr-card__tick br"
  })), (eyebrow || index || action) && /*#__PURE__*/React.createElement("div", {
    className: "jr-card__head"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "jr-card__eyebrow"
  }, eyebrow), index && /*#__PURE__*/React.createElement("span", {
    className: "jr-card__index"
  }, index), action), title && /*#__PURE__*/React.createElement("h3", {
    className: "jr-card__title"
  }, title, withArrow && ArrowGlyph), children && /*#__PURE__*/React.createElement("div", {
    className: "jr-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "jr-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/field/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Field({
  label,
  htmlFor,
  sigil = '>',
  required = false,
  hint,
  error,
  children,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-field', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    className: "jr-field__label",
    htmlFor: htmlFor
  }, sigil && /*#__PURE__*/React.createElement("span", {
    className: "jr-field__sigil",
    "aria-hidden": "true"
  }, sigil), label, required && /*#__PURE__*/React.createElement("span", {
    className: "jr-field__req",
    "aria-hidden": "true"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "jr-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "jr-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/field/Field.jsx", error: String((e && e.message) || e) }); }

// components/field/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Input({
  prefix,
  invalid = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-input', prefix ? 'jr-input--has-prefix' : '', className].filter(Boolean).join(' ');
  const field = /*#__PURE__*/React.createElement("input", _extends({
    className: cls,
    "aria-invalid": invalid || undefined
  }, rest));
  if (!prefix) return field;
  return /*#__PURE__*/React.createElement("span", {
    className: "jr-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "jr-input-wrap__prefix",
    "aria-hidden": "true"
  }, prefix), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/field/Input.jsx", error: String((e && e.message) || e) }); }

// components/field/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'jr-textarea-styles';
const CSS = `
.jr-textarea {
  width: 100%; font-family: var(--font-mono); font-size: 0.9rem;
  color: var(--text-strong); background: var(--surface-sunken);
  border: 1px solid var(--hairline-strong); border-radius: var(--radius-sm);
  padding: 0.75rem 0.9rem; line-height: 1.6; resize: vertical; min-height: 6.5rem;
  transition: border-color var(--dur-base) var(--ease-out-expo), box-shadow var(--dur-base) var(--ease-out-expo), background var(--dur-base) var(--ease-out-expo);
}
.jr-textarea::placeholder { color: var(--text-faint); }
.jr-textarea:hover { border-color: var(--ink-600); }
.jr-textarea:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); background: var(--surface-base); }
.jr-textarea[aria-invalid="true"] { border-color: var(--clay); }
.jr-textarea:disabled { opacity: 0.5; cursor: not-allowed; }
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
function Textarea({
  invalid = false,
  rows = 4,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-textarea', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: rows,
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/field/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/terminal/CodeBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function CodeBlock({
  children,
  title,
  dots = false,
  lineNumbers = false,
  className = '',
  ...rest
}) {
  useStyles();
  const text = typeof children === 'string' ? children : '';
  const lines = text ? text.replace(/\n$/, '').split('\n') : null;
  const cls = ['jr-code', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), (title || dots) && /*#__PURE__*/React.createElement("div", {
    className: "jr-code__bar"
  }, dots && /*#__PURE__*/React.createElement("span", {
    className: "jr-code__dots",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--clay-500)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--shell-500)'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--teal-500)'
    }
  })), title && /*#__PURE__*/React.createElement("span", {
    className: "jr-code__name"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "jr-code__body"
  }, lineNumbers && lines && /*#__PURE__*/React.createElement("div", {
    className: "jr-code__gutter",
    "aria-hidden": "true"
  }, lines.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i + 1))), /*#__PURE__*/React.createElement("pre", {
    className: "jr-code__pre"
  }, children)));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/terminal/Prompt.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }
}
function Prompt({
  sigil = '$',
  children,
  cursor = false,
  boxed = false,
  className = '',
  ...rest
}) {
  useStyles();
  const cls = ['jr-prompt', boxed ? 'jr-prompt--boxed' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "jr-prompt__sigil",
    "aria-hidden": "true"
  }, sigil), /*#__PURE__*/React.createElement("span", {
    className: 'jr-prompt__cmd' + (cursor ? ' jr-prompt__cmd--cursor' : '')
  }, children));
}
Object.assign(__ds_scope, { Prompt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/Prompt.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* global React, Navbar, Hero, Experience, Projects, Contributions, Contact, Icon */
function App() {
  const D = window.DATA;
  const [lang, setLang] = React.useState('en');
  const [theme, setTheme] = React.useState('dark');
  const [active, setActive] = React.useState('home');
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const onNav = id => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  // scroll-spy
  React.useEffect(() => {
    const ids = ['home', 'experience', 'projects', 'opensource', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 120;
      let cur = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-root ds-ground"
  }, /*#__PURE__*/React.createElement(Navbar, {
    lang: lang,
    setLang: setLang,
    theme: theme,
    toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark'),
    nav: D.nav[lang],
    active: active,
    onNav: onNav
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-container"
  }, /*#__PURE__*/React.createElement(Hero, {
    copy: D.hero[lang],
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Experience, {
    title: D.sections[lang].exp,
    copy: D.experience[lang]
  }), /*#__PURE__*/React.createElement(Projects, {
    title: D.sections[lang].proj,
    subtitle: D.sections[lang].projSub,
    lang: lang,
    projects: D.projects
  }), /*#__PURE__*/React.createElement(Contributions, {
    title: D.sections[lang].os,
    copy: D.contributions[lang],
    repos: D.contributions.repos
  }), /*#__PURE__*/React.createElement(Contact, {
    title: D.sections[lang].contact,
    copy: D.contact[lang]
  }))), /*#__PURE__*/React.createElement("footer", {
    className: "pf-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-container pf-footer__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-footer__sig"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mark-mono.svg",
    alt: "",
    className: "pf-footer__mark"
  }), "jonramos", /*#__PURE__*/React.createElement("span", {
    className: "pf-accent"
  }, ".dev")), /*#__PURE__*/React.createElement("span", {
    className: "pf-footer__meta"
  }, "\xA9 ", new Date().getFullYear(), " Jon Ramos \xB7 Urnieta, Euskal Herria"))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* global React, Icon */
function Contact({
  title,
  copy
}) {
  const {
    Card,
    Field,
    Input,
    Textarea,
    Button
  } = window.JonRamosDesignSystem_d2a695;
  const [sent, setSent] = React.useState(false);
  const links = [{
    icon: 'mail',
    label: 'Email',
    value: 'jonurnieta@gmail.com',
    href: 'mailto:jonurnieta@gmail.com'
  }, {
    icon: 'github',
    label: 'GitHub',
    value: '@jramosg',
    href: 'https://github.com/jramosg'
  }, {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Jon Ramos',
    href: 'https://linkedin.com/in/jramosg'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pf-section__title ds-section-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "pf-contact__text"
  }, copy.text), /*#__PURE__*/React.createElement("div", {
    className: "pf-contact__links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: "pf-link-card",
    href: l.href,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-link-card__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: l.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    className: "pf-link-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-link-card__label"
  }, l.label), /*#__PURE__*/React.createElement("span", {
    className: "pf-link-card__value"
  }, l.value)), /*#__PURE__*/React.createElement("span", {
    className: "pf-link-card__arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 14
  })))))), /*#__PURE__*/React.createElement(Card, {
    className: "pf-form-card"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "pf-form__title"
  }, copy.formTitle), /*#__PURE__*/React.createElement("p", {
    className: "pf-form__desc"
  }, copy.formDesc), /*#__PURE__*/React.createElement("form", {
    className: "pf-form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: copy.name,
    htmlFor: "c-name"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    placeholder: "Jon Ramos",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: copy.email,
    htmlFor: "c-email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    type: "email",
    prefix: "@",
    placeholder: "you@example.com",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: copy.message,
    htmlFor: "c-msg"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    rows: 3,
    placeholder: "\u2026",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-form__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    sigil: "\u203A"
  }, copy.send), sent && /*#__PURE__*/React.createElement("span", {
    className: "pf-form__ok"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 14
  }), " ", copy.sent))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contributions.jsx
try { (() => {
/* global React, Icon */
function Contributions({
  title,
  copy,
  repos
}) {
  const {
    Tag,
    Prompt
  } = window.JonRamosDesignSystem_d2a695;
  const stats = [{
    n: '40+',
    label: copy.merged
  }, {
    n: '10',
    label: copy.projects
  }, {
    n: '6',
    label: copy.techs
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "opensource",
    className: "pf-section pf-os"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-os__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ds-eyebrow"
  }, copy.sub), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section__title ds-section-title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "pf-os__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-os__stats"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "pf-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-stat__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "pf-stat__l"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "pf-os__repos"
  }, /*#__PURE__*/React.createElement(Prompt, {
    sigil: "$",
    className: "pf-os__cmd"
  }, "git log --author=\"jon\""), /*#__PURE__*/React.createElement("ul", {
    className: "pf-os__list"
  }, repos.map(r => /*#__PURE__*/React.createElement("li", {
    key: r,
    className: "pf-os__repo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-os__repo-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pr",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    className: "pf-os__repo-name"
  }, r), /*#__PURE__*/React.createElement("span", {
    className: "pf-os__repo-arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 13
  }))))))));
}
window.Contributions = Contributions;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contributions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Experience.jsx
try { (() => {
/* global React, Icon */
function Experience({
  title,
  copy
}) {
  const {
    Card,
    Badge,
    Tag
  } = window.JonRamosDesignSystem_d2a695;
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pf-section__title ds-section-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline__rail",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-timeline__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-timeline__line"
  })), /*#__PURE__*/React.createElement(Card, {
    className: "pf-timeline__card",
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, copy.since, " Sep 2016"),
    action: /*#__PURE__*/React.createElement(Badge, {
      tone: "teal",
      dot: true,
      pulse: true
    }, copy.present),
    title: copy.role,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tag, {
      lead: ":"
    }, "Clojure"), /*#__PURE__*/React.createElement(Tag, {
      lead: ":"
    }, "ClojureScript"), /*#__PURE__*/React.createElement(Tag, null, "Datomic"))
  }, /*#__PURE__*/React.createElement("a", {
    className: "pf-company",
    href: "https://ubikare.io",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-company__at"
  }, "@"), "Ubikare", /*#__PURE__*/React.createElement("span", {
    className: "pf-company__arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUpRight",
    size: 13
  }))), /*#__PURE__*/React.createElement("p", {
    className: "pf-timeline__desc"
  }, copy.desc))));
}
window.Experience = Experience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* global React, Icon */
function Hero({
  copy,
  onNav
}) {
  const {
    Button,
    Prompt,
    Avatar,
    Badge
  } = window.JonRamosDesignSystem_d2a695;
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "pf-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__prompt"
  }, /*#__PURE__*/React.createElement(Prompt, {
    sigil: "$",
    cursor: true,
    boxed: true
  }, "whoami")), /*#__PURE__*/React.createElement("h1", {
    className: "pf-hero__name"
  }, /*#__PURE__*/React.createElement("span", null, "Jon"), " ", /*#__PURE__*/React.createElement("span", {
    className: "pf-accent"
  }, "Ramos")), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__title"
  }, copy.title), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero__desc"
  }, copy.desc, /*#__PURE__*/React.createElement("a", {
    className: "pf-link",
    href: "https://ubikare.io",
    target: "_blank",
    rel: "noreferrer"
  }, "Ubikare"), "."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    sigil: "\u203A",
    onClick: () => onNav('projects')
  }, copy.view), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav('contact')
  }, copy.contact))), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__media"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/jonramos.webp",
    alt: "Jon Ramos",
    size: 360,
    frame: true,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "//"), " jon_ramos.jpeg")
  }), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero__avail"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    dot: true,
    pulse: true
  }, "Available for work")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Navbar.jsx
try { (() => {
/* global React, Icon */
const DS = window.JonRamosDesignSystem_d2a695;
function Navbar({
  lang,
  setLang,
  theme,
  toggleTheme,
  nav,
  active,
  onNav
}) {
  const {
    IconButton
  } = DS;
  const langs = ['en', 'es', 'eu'];
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-nav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "pf-logo",
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/mark-mono.svg",
    alt: "",
    className: "pf-logo__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "pf-logo__name"
  }, "Jon Ramos")), /*#__PURE__*/React.createElement("nav", {
    className: "pf-nav__links",
    "aria-label": "Main"
  }, nav.map((label, i) => {
    const id = ['home', 'experience', 'projects', 'opensource', 'contact'][i];
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      href: '#' + id,
      className: 'pf-nav__link' + (active === id ? ' is-active' : ''),
      onClick: e => {
        e.preventDefault();
        onNav(id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "pf-nav__idx"
    }, "0", i + 1), label);
  })), /*#__PURE__*/React.createElement("div", {
    className: "pf-nav__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-langs",
    role: "group",
    "aria-label": "Language"
  }, langs.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    className: 'pf-lang' + (lang === l ? ' is-on' : ''),
    onClick: () => setLang(l)
  }, l.toUpperCase()))), /*#__PURE__*/React.createElement(IconButton, {
    label: "Toggle theme",
    onClick: toggleTheme
  }, /*#__PURE__*/React.createElement(Icon, {
    name: theme === 'light' ? 'moon' : 'sun'
  })))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
/* global React */
function Projects({
  title,
  subtitle,
  lang,
  projects
}) {
  const {
    Card,
    Tag
  } = window.JonRamosDesignSystem_d2a695;
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    className: "pf-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "pf-section__title ds-section-title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "pf-section__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "pf-proj-grid"
  }, projects.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    href: "#",
    className: "pf-proj",
    eyebrow: p.type,
    index: '0' + (i + 1),
    title: p.title,
    featured: p.featured,
    footer: p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t))
  }, p.desc[lang]))));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Portfolio content — trilingual (EN / ES / EU), lifted from the real site's
   i18n strings so the language toggle behaves like jonramos.dev. */
window.DATA = {
  nav: {
    en: ['Home', 'Experience', 'Projects', 'Open Source', 'Contact'],
    es: ['Inicio', 'Experiencia', 'Proyectos', 'Open Source', 'Contacto'],
    eu: ['Hasiera', 'Esperientzia', 'Proiektuak', 'Kode Irekia', 'Kontaktua']
  },
  hero: {
    en: {
      title: 'Software Engineer · Web Developer',
      desc: 'I build websites and web applications focused on high performance, data-driven solutions, and design. Astro for static sites, Clojure & ClojureScript for the complex ones. Based in Urnieta, Basque Country — currently building at ',
      view: 'View work',
      contact: 'Contact me'
    },
    es: {
      title: 'Ingeniero de Software · Desarrollador Web',
      desc: 'Construyo sitios y aplicaciones web centrados en alto rendimiento, soluciones orientadas a datos y diseño. Astro para sitios estáticos, Clojure y ClojureScript para los complejos. En Urnieta, País Vasco — actualmente en ',
      view: 'Ver trabajos',
      contact: 'Contáctame'
    },
    eu: {
      title: 'Software Ingeniaria · Web Garatzailea',
      desc: 'Errendimendu handiko web guneak eta aplikazioak eraikitzen ditut, datuetan eta diseinuan oinarrituta. Astro gune estatikoetarako, Clojure eta ClojureScript konplexuetarako. Urnietan, Euskal Herrian — gaur egun hemen: ',
      view: 'Lanak ikusi',
      contact: 'Kontaktatu'
    }
  },
  sections: {
    en: {
      exp: 'Experience',
      proj: 'Selected Projects',
      projSub: "A selection of things I've built and contributed to",
      os: 'Open Source',
      contact: 'Get in touch'
    },
    es: {
      exp: 'Experiencia',
      proj: 'Proyectos Seleccionados',
      projSub: 'Una selección de lo que he construido',
      os: 'Open Source',
      contact: 'Hablemos'
    },
    eu: {
      exp: 'Esperientzia',
      proj: 'Proiektu Hautatuak',
      projSub: 'Eraiki dudanaren hautaketa bat',
      os: 'Kode Irekia',
      contact: 'Jarri harremanetan'
    }
  },
  experience: {
    en: {
      since: 'since',
      present: 'Present',
      role: 'Software Engineer',
      desc: 'Building Naiha, a healthcare platform built with Clojure, ClojureScript and Datomic — robust, data-driven applications for the healthcare sector.'
    },
    es: {
      since: 'desde',
      present: 'Presente',
      role: 'Ingeniero de Software',
      desc: 'Desarrollando Naiha, una plataforma de salud con Clojure, ClojureScript y Datomic — aplicaciones robustas y orientadas a datos para el sector salud.'
    },
    eu: {
      since: 'noiztik',
      present: 'Orain',
      role: 'Software Ingeniaria',
      desc: 'Naiha garatzen, Clojure, ClojureScript eta Datomic erabiliz osasun plataforma bat — datuetan oinarritutako aplikazio sendoak osasun sektorerako.'
    }
  },
  projects: [{
    title: 'Naiha',
    type: 'WebApplication',
    tags: ['Clojure', 'ClojureScript', 'Datomic'],
    featured: true,
    desc: {
      en: 'A healthcare platform developed at Ubikare. Built with Clojure, ClojureScript and Datomic for robust data management.',
      es: 'Plataforma de salud desarrollada en Ubikare. Construida con Clojure, ClojureScript y Datomic para una gestión de datos robusta.',
      eu: 'Ubikaren garatutako osasun plataforma. Clojure, ClojureScript eta Datomic erabiliz datuen kudeaketa sendorako.'
    }
  }, {
    title: 'Laguntza Fisioterapia',
    type: 'WebSite',
    tags: ['Astro', 'GSAP', 'TypeScript'],
    desc: {
      en: 'A multilingual physiotherapy clinic site with interactive Leaflet maps, GSAP animations and accessibility-first design.',
      es: 'Sitio multilingüe de clínica de fisioterapia con mapas Leaflet, animaciones GSAP y diseño accesible.',
      eu: 'Fisioterapia klinika eleaniztuna, Leaflet mapekin, GSAP animazioekin eta irisgarritasun diseinuarekin.'
    }
  }, {
    title: 'Norwegian Singles',
    type: 'WebApp',
    tags: ['Astro', 'React', 'TypeScript'],
    desc: {
      en: 'A high-performance training-plan generator based on the Norwegian Singles methodology.',
      es: 'Generador de planes de entrenamiento basado en la metodología Norwegian Singles.',
      eu: 'Entrenamendu planak sortzeko tresna, Norwegian Singles metodologian oinarritua.'
    }
  }, {
    title: 'Besaide M.E.',
    type: 'WebSite',
    tags: ['Astro', 'Keystatic', 'i18n'],
    desc: {
      en: 'A multilingual site for a Basque mountaineering association — i18n routing, accessible components, zero-JS navigation.',
      es: 'Sitio multilingüe para una asociación de montañismo vasca — enrutado i18n, componentes accesibles, navegación sin JS.',
      eu: 'Mendizale elkarte baten gune eleaniztuna — i18n bideratzea, osagai irisgarriak, JavaScript gabeko nabigazioa.'
    }
  }, {
    title: 'color-tools',
    type: 'Library',
    tags: ['Clojure', 'Open Source'],
    desc: {
      en: 'A Clojure(Script) library for colour manipulation and conversion. Open-source.',
      es: 'Librería Clojure(Script) para manipulación y conversión de colores. Open source.',
      eu: 'Koloreak manipulatu eta bihurtzeko Clojure(Script) liburutegia. Kode irekia.'
    }
  }, {
    title: 'jon-nested-menu',
    type: 'Library',
    tags: ['ClojureScript', 'React', 'MUI'],
    desc: {
      en: 'A nested MUI menu library for Reagent/ClojureScript & React. Published to Clojars and npm.',
      es: 'Librería de menús MUI anidados para Reagent/ClojureScript y React. En Clojars y npm.',
      eu: 'MUI menu habiaratuen liburutegia Reagent/ClojureScript eta React-erako. Clojars eta npm-en.'
    }
  }],
  contributions: {
    en: {
      merged: 'Merged PRs',
      projects: 'Projects',
      techs: 'Technologies',
      sub: 'Contributions to Clojure tooling & developer experience'
    },
    es: {
      merged: 'PRs fusionados',
      projects: 'Proyectos',
      techs: 'Tecnologías',
      sub: 'Contribuciones a herramientas Clojure y experiencia de desarrollador'
    },
    eu: {
      merged: 'Bateratutako PRak',
      projects: 'Proiektuak',
      techs: 'Teknologiak',
      sub: 'Clojure tresnetarako eta garatzaile esperientziarako ekarpenak'
    },
    repos: ['clj-kondo', 'cljfmt', 'Logseq', 'Calva', 'medley']
  },
  contact: {
    en: {
      text: 'Software developer in Urnieta, Basque Country. Available for professional connections and technical discussions.',
      formTitle: 'Send a message',
      formDesc: "Got a question or a proposal? I'll get back to you shortly.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sent: 'Message sent — talk soon.'
    },
    es: {
      text: 'Desarrollador de software en Urnieta, País Vasco. Disponible para conexiones profesionales y discusiones técnicas.',
      formTitle: 'Envía un mensaje',
      formDesc: '¿Una pregunta o propuesta? Te responderé pronto.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sent: 'Mensaje enviado — hablamos pronto.'
    },
    eu: {
      text: 'Software garatzailea Urnietan, Euskal Herrian. Konexio profesionaletarako eta eztabaida teknikoetarako prest.',
      formTitle: 'Bidali mezua',
      formDesc: 'Galdera edo proposamenik? Laster erantzungo dizut.',
      name: 'Izena',
      email: 'Emaila',
      message: 'Mezua',
      send: 'Mezua bidali',
      sent: 'Mezua bidalita — laster arte.'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/icons.js
try { (() => {
/* Inline icon set for the portfolio kit — Lucide/Feather-style strokes
   matching the source project's own icons. Exposed on window.Icons. */
(function () {
  const s = (paths, fill) => ({
    paths,
    fill: !!fill
  });
  window.Icons = {
    github: s('<path d="M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>', true),
    linkedin: s('<path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.37-3.9-2.37 0-2.73 1.85-2.73 3.77V24h-4V8Z"/>', true),
    mail: s('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
    arrow: s('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'),
    arrowUpRight: s('<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'),
    sun: s('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: s('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>'),
    pr: s('<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6"/><path d="M18 9a9 9 0 0 0-9 9"/><circle cx="18" cy="6" r="3"/>'),
    menu: s('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>'),
    map: s('<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>')
  };
  window.Icon = function Icon({
    name,
    size = 18,
    stroke = 2,
    ...rest
  }) {
    const ic = window.Icons[name];
    if (!ic) return null;
    return React.createElement('svg', {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: ic.fill ? 'currentColor' : 'none',
      stroke: ic.fill ? 'none' : 'currentColor',
      strokeWidth: stroke,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      dangerouslySetInnerHTML: {
        __html: ic.paths
      },
      ...rest
    });
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Prompt = __ds_scope.Prompt;

})();
