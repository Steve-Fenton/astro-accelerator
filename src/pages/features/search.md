---
layout: src/layouts/Default.astro
title: Search
navOrder: 5000
pubDate: 2022-09-23
keywords: astro accelerator,search,site search
description: How the serverless search feature works in Astro Accelerator.
---

The on-site search feature uses titles, headings, descriptions, and taxonomy to provide score-based search results to users.

With JavaScript enabled, the search tool downloads a data file for the search and provides an instant search as users type.

The results list shows:

- The title of the result pages
- The relative path to the page
- The frontmatter description
- Matching sub-headings for quick navigation to the page section

Matching text is highlighted using the HTML `<mark>` element.

:::figure
:img{src="/img/screens/search-results.png" loading="lazy"}
:figcaption[Search results]
:::

## Fallback search

In the event of JavaScript being disabled or a transient error, the search falls back to a search engine. This is configurable in `config.ts`.

```
search: {
  fallbackUrl: 'https://www.google.com/search',
  fallbackSite: 'q',
  fallbackQuery: 'q',
},
```

For example, the search will fallback to Google with the query:

```
site:https://astro.stevefenton.co.uk/ image
```

