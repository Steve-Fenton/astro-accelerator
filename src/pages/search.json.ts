// warning: This file is overwritten by Astro Accelerator

import { Markdown, PostFiltering, UrlFormatter } from 'astro-accelerator-utils';
import type { MarkdownInstance } from 'astro';
import { SITE } from '@config';

const getData = async () => {
    //@ts-ignore
    const allPages = import.meta.glob('./**/*.md');
    const items = [];

    const urlFormatter = new UrlFormatter(SITE.url);
    const markdown = new Markdown();

    for (const path in allPages) {
        const page = await allPages[path]() as  MarkdownInstance<Record<string, any>>;

        if (!PostFiltering.showInSearch(page)) {
            continue;
        }

        let url = page.url ?? '';
    
        if (page.frontmatter.paged) {
            url += '/1/';
        }

        const headings = await page.getHeadings();
        const title = await markdown.getTextFrom(page.frontmatter.title ?? '');
              
        items.push({
            title: title,
            headings: headings.map(h => {
                return {text: h.text, slug: h.slug }
            }),
            description: page.frontmatter.description ?? '',
            tags: page.frontmatter.tags ?? [],
            url: SITE.url + urlFormatter.addSlashToAddress(url),
            date: page.frontmatter.pubDate ?? ''
        });
    }

    return {
        body: JSON.stringify(items)
    }
}

export const get = getData;
