type Theme = string | null;

function isAbortedViewTransitionError(error: unknown) {
  return (
    error instanceof DOMException &&
    error.name === 'InvalidStateError' &&
    error.message.includes('Transition was aborted')
  );
}

export function getStoredTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  // Whitewash (light) is the default ground. Honour a stored choice,
  // then a dark OS preference.
  return (
    localStorageTheme ??
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
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

  if (
    !document.startViewTransition ||
    options.transition === false ||
    document.visibilityState !== 'visible'
  ) {
    applyTheme();
  } else {
    try {
      const transition = document.startViewTransition(applyTheme);

      transition.ready.catch((error: unknown) => {
        if (!isAbortedViewTransitionError(error)) {
          throw error;
        }
      });
    } catch (error) {
      if (isAbortedViewTransitionError(error)) {
        applyTheme();
      } else {
        throw error;
      }
    }
  }
}
