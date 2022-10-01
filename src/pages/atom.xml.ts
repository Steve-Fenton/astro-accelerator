// Generates an ATOM feed of recent posts
import { SITE } from '@config';
import { addSlashToAddress } from '@util/Url.astro';

async function getData() {
  //@ts-ignore
  const allArticles = import.meta.glob('./articles/**/*.md');
  
  let articles = [];
  
  for (const path in allArticles) {
    const article: any = await allArticles[path]();
    articles.push({
      url: article.url,
      frontmatter: article.frontmatter
    });
  }

  articles =  articles.sort((a, b) => b.frontmatter.pubDate - a.frontmatter.pubDate);

  const limit = SITE.rssLimit ?? 20;
  const items = articles
    .slice(0, limit)
    .map(a => `
    <entry>
      <title>${a.frontmatter.title ?? ''}</title>
      <link href="${ SITE.url + a.url }" />
      <id>${ SITE.url + addSlashToAddress(a.url) }</id>
      <published>${ a.frontmatter.pubDate }</published>
      <updated>${ a.frontmatter.pubDate }</updated>
      <summary>${ a.frontmatter.description ?? '' }</summary>
    </entry>`);

  return {
      body: `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${ SITE.title }</title>
  <subtitle>${ SITE.description }</subtitle>
  <link href="${ SITE.url }/atom.xml" rel="self" />
  <link href="${ SITE.url }" />
  <id>${ SITE.url }/atom.xml</id>
  <updated>${  articles[0].frontmatter.pubDate }</updated>
${items.join('')}
</feed>`
  }
}

export const get = getData;
