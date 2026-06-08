type Theme = string | null;

export function getStoredTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  // INK (dark) is the signature default ground for the design system.
  // Honour an explicit stored choice; otherwise respect a light OS
  // preference, falling back to dark.
  return (
    localStorageTheme ??
    (window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark')
  );
}

export function setTheme(
  theme: Theme = null,
  options: { transition?: boolean } = { transition: true },
) {
  const applyTheme = () => {
    if (theme) {
      localStorage.setItem('theme', theme);
    }
    const doc = document.firstElementChild;
    theme = theme ?? getStoredTheme();
    if (theme && doc) {
      doc.setAttribute('data-theme', theme);
    }
  };

  if (!document.startViewTransition || options.transition === false) {
    applyTheme();
  } else {
    document.startViewTransition(applyTheme);
  }
}
