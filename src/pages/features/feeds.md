---
title: Feeds
navOrder: 5000
pubDate: 2022-09-23
keywords: astro accelerator,feeds,sitemap,atom,rss
description: How feeds work in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

Astro Accelerator has built-in feeds for:

- Sitemap (you can submit this to search engines)
- Atom (similar to RSS)
- Search

## Sitemap

The sitemap is XML and is located at `/sitemap.xml`.

[View an example sitemap](/sitemap.xml).

## Atom Feed

The Atom feed is XML and should be added to any post collection folders, for example: `/pages/articles/feed.xml.ts`. This allows a feed for each collection, for example, for blogs, news, events, and so on.

[View an example Atom feed](/articles/feed.xml).

The main feed for your website should be added to `config.ts`. This will be added to the `alternative` meta tag with a content type of `application/atom+xml`.

```typescript
feedUrl: '/articles/feed.xml',
```

The feed looks for markdown files in child folders by default. You can update this within `feed.xml.ts` by changing this code:

```typescript
const allArticles = import.meta.glob('./**/*.md');
```

For example, you could place a site-wide feed that looks for markdown files in several collection folders.

See [the articles naming instructions](/features/posts/#using-different-article-names) for more on customization requirements.

## Site Search Feed

The site search feed is JSON and is located at `/search.json`. This file is used to power the site search feature.

[View an example search feed](/search.json).

## Customization

You can rename any of these files, for example `atom.xml.ts` can be renamed `feed.xml.ts` and will continue to work.
