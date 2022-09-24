---
layout: src/layouts/Default.astro
title: Feeds
navOrder: 5000
pubDate: 2022-09-23
keywords: astro boilerplate,feeds,sitemap,atom,rss
description: How feeds work in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

Astro Boilerplate has built-in feeds for:

- Sitemap (you can submit this to search engines)
- Atom (similar to RSS)
- Search

## Sitemap

The sitemap is XML and is located at `/sitemap.xml`.

[View an example sitemap](/sitemap.xml).

## Atom Feed

The Atom feed is XML and is located at `/atom.xml`.

[View an example Atom feed](/atom.xml).

The feed looks for `/articles/` by default. You can update this within `atom.xml.ts` by changing this code:

```typescript
const allArticles = import.meta.glob('./articles/**/*.md');
```

See [the articles naming instructions](/features/articles/#using-different-article-names) for more on customization requirements.

## Site Search Feed

The site search feed is JSON and is located at `/search.json`. This file is used to power the site search feature.

[View an example search feed](/search.json).

## Customization

You can rename any of these files, for example `atom.xml.ts` can be renamed `feed.xml.ts` and will continue to work.