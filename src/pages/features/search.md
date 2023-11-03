---
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
::figcaption[Search results]
:::

## Search page

You should have a page on your site that uses the search layout:

```yaml
layout: src/layouts/Search.astro
```

This page will be found and linked from the search icon.

You can place markdown content in your search page that will appear above the search form.

## Search dialog

You can enable a search dialog, which will open a modal dialog to perform the search without leaving the page.

This is enabled with the [search feature flag](/features/flags/#search).

## Search data

The search URLs in `search.json` are fully qualified, which means you can ingest the data into an alternative search technology.

For example, you could read this file into elastic search or a similar technology.

## Synonyms

You can catch typos, alternate spellings, initialisms, differences between British and American English using the synonyms file.

Add a JavaScript file called `/public/js/synonyms.js` (next to the `search.js` file) to switch search terms where necessary. For example, to change "licence" to "license", or "cod" to "call of duty".

The file uses a simple dictionary:

```javascript
const synonyms = {
    "cod": "call of duty",
    "licence": "license"
};

export { synonyms };
```

If the file is empty or does not exist, no action will be taken.

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

