// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain once registered
  site: 'https://PLACEHOLDER-DOMAIN.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});