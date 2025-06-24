/** @format */

import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { defineConfig } from 'astro/config';
import { defaultLayout } from '/src/themes/accelerator/utilities/default-layout.mjs';
import {
    attributeMarkdown,
    wrapTables,
} from '/src/themes/accelerator/utilities/custom-markdown.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://astro.stevefenton.co.uk',
    integrations: [mdx()],
    markdown: {
        remarkPlugins: [
            defaultLayout,
            remarkDirective,
            attributeMarkdown,
            wrapTables,
        ],
        closeSelfClosing: false,
        extendDefaultPlugins: true,
        trailingSlash: 'always',
    },
    server: { port: 3000, host: true },
});
