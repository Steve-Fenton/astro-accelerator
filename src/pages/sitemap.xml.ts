// Generates an ATOM feed of recent posts
import { SITE } from '../config';
import { showInSitemap } from '../utilities/PageTypeFilters';

async function getData() {
  //@ts-ignore
  const allPages = import.meta.glob('./**/*.md');
  
  let pages = [];
  
  for (const path in allPages) {
    const article: any = await allPages[path]();

    if (!showInSitemap(article)) {
        continue;
    }

    pages.push(`
      <url>
        <loc>${ SITE.url + article.url }</loc>
        <lastmod>${ article.frontmatter.pubDate }</lastmod>
      </url>`);
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
