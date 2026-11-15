/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  astroCompressHTML: 'html',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
};
