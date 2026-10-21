// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your custom domain once connected
  site: 'https://waterworksweb-ui.vercel.app',
  integrations: [sitemap()],
});
