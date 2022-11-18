// warning: This file is overwritten by Astro Accelerator

import type { MarkdownInstance } from 'astro';
import { SITE } from '@config';
import { addSlashToAddress, showInSearch } from 'astro-accelerator-utils';
import { getTextFrom } from '@util/Markdown';

const getData = async () => {
    //@ts-ignore
    const allPages = import.meta.glob('./**/*.md');
    const items = [];

    for (const path in allPages) {
        const page = await allPages[path]() as  MarkdownInstance<Record<string, any>>;

        if (!showInSearch(page)) {
            continue;
        }

        let url = page.url ?? '';
    
        if (page.frontmatter.paged) {
            url += '/1/';
        }

        const headings = await page.getHeadings();
        const title = await getTextFrom(page.frontmatter.title ?? '');
              
        items.push({
            title: title,
            headings: headings.map(h => {
                return {text: h.text, slug: h.slug }
            }),
            description: page.frontmatter.description ?? '',
            tags: page.frontmatter.tags ?? [],
            url: SITE.url + addSlashToAddress(url, SITE),
            date: page.frontmatter.pubDate ?? ''
        });
    }

    return {
        body: JSON.stringify(items)
    }
}

export const get = getData;
