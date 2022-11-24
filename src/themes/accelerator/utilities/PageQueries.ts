import type { MarkdownInstance } from "astro";
import { SITE } from '@config';
import { Cache, PostQueries, PostFiltering } from 'astro-accelerator-utils';

export type PagePredicate = (value: MarkdownInstance<Record<string, any>>, index: number, array: MarkdownInstance<Record<string, any>>[]) => boolean;

export async function getAuthorInfo (slug: string) {
    const cacheKey = 'Global__author_info';
    
    let authorInfo = await Cache.getItem(cacheKey);

    if (authorInfo == null) {
        const allPages = await PostQueries.getPages();

        const author = allPages
            .filter(PostFiltering.isAuthor)
            .filter(x => x.url?.split('/')[2] == slug)[0];

        authorInfo = {
            frontmatter: author.frontmatter
        };
  
      await Cache.setItem(cacheKey, authorInfo);
    }

    return authorInfo;
}
