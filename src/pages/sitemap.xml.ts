// warning: This file is overwritten by Astro Accelerator

// Generates an ATOM feed of recent posts
import { SITE } from '@config';
import { PostFiltering, Urls } from 'astro-accelerator-utils';

async function getData() {
  //@ts-ignore
  const allPages = import.meta.glob('./**/*.md');
  
  let pages = [];
  
  for (const path in allPages) {
    const article: any = await allPages[path]();
    const addToSitemap = PostFiltering.showInSitemap(article);

    if (addToSitemap) {
      pages.push(`
        <url>
          <loc>${ SITE.url + Urls.addSlashToAddress(article.url, SITE) }</loc>
          <lastmod>${ article.frontmatter.pubDate }</lastmod>
        </url>`);
    }
  }

  return {
      body: `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                                  http://www.sitemaps.org/schemas/sitemap/0.9.xsd">
${pages.join('')}
</urlset>`
  };
}

export const get = getData;
