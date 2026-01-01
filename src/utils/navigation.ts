/**
 * Generates the correct navigation URL for anchor links
 * Ensures that anchor links always point to the home page, not the current page
 *
 * @param lang - The current language code (e.g., 'en', 'es', 'eu')
 * @param hash - The anchor hash without the # (e.g., 'home', 'experience', 'projects', 'contact')
 * @returns The correct URL path with the anchor
 */
export function getAnchorUrl(lang: string, hash: string): string {
  return `/${lang}/#${hash}`;
}

/**
 * Generates the navigation URL based on the type
 *
 * @param lang - The current language code
 * @param href - The original href (can be a hash like '#home' or a path like '/contributions')
 * @returns The correct URL
 */
export function getNavigationUrl(lang: string, href: string): string {
  // If it's an anchor link (starts with #), convert it to point to home page
  if (href.startsWith('#')) {
    const hash = href.substring(1);
    return getAnchorUrl(lang, hash);
  }

  // Otherwise return as is (for paths like /en/contributions)
  return href;
}
