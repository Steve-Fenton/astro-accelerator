import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: `http://astro.stevefenton.co.uk`,
    integrations: [sitemap()],
});
