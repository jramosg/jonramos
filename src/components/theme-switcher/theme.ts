type Theme = string | null;

export function getStoredTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  return (
    localStorageTheme ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null)
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
