// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonramos.dev',
  // Astro 7 defaults to 'jsx', which strips whitespace between inline
  // elements and runs words together; keep the Astro 6 behavior.
  compressHTML: true,
  // The whole stylesheet is ~14 KiB; inlining it saves two
  // render-blocking requests on first paint.
  build: {
    inlineStylesheets: 'always',
  },
  adapter: node({
    mode: 'standalone',
  }),
});
