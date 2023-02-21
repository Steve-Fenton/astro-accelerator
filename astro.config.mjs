import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { defineConfig } from 'astro/config';
import { attributeMarkdown, wrapTables } from '/src/themes/accelerator/utilities/custom-markdown.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro.stevefenton.co.uk',
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [
            remarkDirective,
            attributeMarkdown,
            wrapTables
        ],
        extendDefaultPlugins: true,
        trailingSlash: 'always',
        server: { port: 3000, host: true},
    },
});
