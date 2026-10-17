// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rodolfo.schiavi.me',
  // English at the root, Portuguese under /pt/ (see src/i18n).
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});