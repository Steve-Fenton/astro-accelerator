/** @format */

// warning: This file is overwritten by Astro Accelerator

// Generates an ATOM feed across the whole site with full content
import { SITE } from '@config';
import {
  Accelerator,
  PostFiltering,
  PostOrdering,
} from 'astro-accelerator-utils';
import type { MarkdownInstance } from 'astro-accelerator-utils/types/Astro';

type Frontmatter = MarkdownInstance['frontmatter'];

async function getData() {
  //@ts-ignore
  const allArticles = import.meta.glob(['./**/*.md', './**/*.mdx']);

  const accelerator = new Accelerator(SITE);
  const stats = new accelerator.statistics('pages/articles/feed.xml');
  stats.start();

  let articles: MarkdownInstance[] = [];
  const authors = accelerator.posts.all().filter(PostFiltering.isAuthor);
  const contentItems: { [index: string]: string } = {};

  for (const path in allArticles) {
    const article: any = await allArticles[path]();

    const filtered = [article]
      .filter(PostFiltering.isListable)
      .filter(PostFiltering.notAuthor)
      .filter(PostFiltering.notSearch);

    if (filtered.length === 0) {
      continue;
    }

    if (typeof article.compiledContent !== 'function') {
      continue;
    }

    const content = await article.compiledContent();
    contentItems[article.url] = content;

    article.frontmatter.title = await accelerator.markdown.getTextFrom(
      article.frontmatter?.title
    );

    articles.push({
      url: article.url,
      frontmatter: article.frontmatter,
    } as MarkdownInstance);
  }

  function getAuthorName(frontmatter: Frontmatter): string {
    if (frontmatter.authors && frontmatter.authors.length > 0) {
      const author = authors.filter(
        (a) => a.frontmatter.id == frontmatter.authors?.[0]
      )[0];

      if (author?.frontmatter?.title) {
        return author.frontmatter.title + ', Octopus Deploy';
      }
    }

    return 'Octopus Deploy';
  }

  const limit = SITE.rssLimit ?? 20;
  const items = articles
    .sort(PostOrdering.sortByModDateDesc)
    .slice(0, limit)
    .map(
      (a) => `
    <entry>
      <title>${a.frontmatter.title ?? ''}</title>
      <link href="${SITE.url + a.url}" />
      <id>${SITE.url + accelerator.urlFormatter.formatAddress(a.url)}</id>
      <published>${a.frontmatter.pubDate}</published>
      <updated>${a.frontmatter.modDate ?? a.frontmatter.pubDate}</updated>
      <summary>${a.frontmatter.description ?? ''}</summary>
      <author>
        <name>${getAuthorName(a.frontmatter)}</name>
      </author>
      <content type="html"><![CDATA[${contentItems[a.url] ?? ''}]]></content>
    </entry>`
    );

  stats.stop();

  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${SITE.title}</title>
  <subtitle>${SITE.description}</subtitle>
  <link href="${SITE.url}${SITE.feedUrl}" rel="self" />
  <link href="${SITE.url}" />
  <id>${SITE.url}${SITE.feedUrl}</id>
  <updated>${articles[0].frontmatter.pubDate}</updated>
${items.join('')}
</feed>`,
    {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}

export const GET = getData;
