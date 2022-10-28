import remarkDirective from 'remark-directive';
import { defineConfig } from 'astro/config';
import { attributeMarkdown } from './src/plugins/custom-markdown.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro.stevefenton.co.uk',
    markdown: {
        remarkPlugins: [
            remarkDirective,
            attributeMarkdown
        ],
        extendDefaultPlugins: true,
        trailingSlash: 'always',
        server: { port: 3000, host: true},
    },
});
