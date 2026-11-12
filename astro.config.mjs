// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://jonramos.dev',
  // The whole stylesheet is ~14 KiB; inlining it saves two
  // render-blocking requests on first paint.
  build: {
    inlineStylesheets: 'always',
  },
  adapter: node({
    mode: 'standalone',
  }),
});
