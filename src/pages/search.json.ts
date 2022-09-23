import type { MarkdownInstance } from 'astro';
import { showInSearch } from '../utilities/PageTypeFilters.astro';

async function getData() {
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
              
        items.push({
            title: page.frontmatter.title ?? '',
            categories: headings.map(h => h.text),
            tags: page.frontmatter.keywords ?? '',
            url: url,
            date: page.frontmatter.pubDate ?? ''
        });
    }

    return {
        body: JSON.stringify(items)
    }
}

export const get = getData;
