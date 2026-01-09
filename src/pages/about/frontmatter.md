---
title: Frontmatter
navOrder: 3000
pubDate: 2025-07-01
keywords: astro accelerator,front matter,frontmatter
description: An overview of frontmatter in Astro Accelerator.
---

<!-- @format -->

## Required frontmatter

The following items are the minimum required frontmatter fields.

### title

String or [Limited Markdown](#limited-markdown). The page title.

```yaml
title: The importance of being earnest
```

### pubDate

Date. YYYY-MM-DD. The date the page was first published. See also: [modDate](#moddate). This is used for sorting some types of content.

```yaml
pubDate: 2022-10-01
```

### description

String. Used for the meta description and in the site search.

```yaml
description: An overview of frontmatter in Astro Accelerator.
```

## Optional frontmatter

### layout

String. Specifies the layout for the page. Defaults to `src/layouts/Default.astro` if missing.

```yaml
layout: src/layouts/Default.astro
```

### subtitle

String or [Limited Markdown](#limited-markdown). A subtitle for the page.

```yaml
subtitle: A play by Oscar Wilde.
```

### keywords

String. Allows you to specify the meta keywords value.

```yaml
keywords: astro,frontmatter
```

### summary

String or [Limited Markdown](#limited-markdown). A summary of an item.

```yaml
summary: >-
    A summary can contain a description with _markdown_.

    This content is often used at the top of list pages, for example, to describe an author.

    YAML requires this content to be indented.
```

### modDate

Date. YYYY-MM-DD. The date the content was last changed. This is used to indicate updates via the sitemap and to broadcast a change has been made.

```yaml
modDate: 2022-10-01
```

### categories

String list. A list of categories to assign to the page. All categories are shown in default taxonomy components.

```yaml
categories:
    - Astro
    - Websites
```

### tags

String list. A list of tags to assign to the page. The most used tags are shown in default taxonomy components.

```yaml
tags:
    - JavaScript
    - TypeScript
```

### meta

List of meta tags with `name` and `content`.

```yaml
meta:
    - name: canonical
      content: https://example.com/your-canonical-url
    - name: theme-color
      content: #222255
```

#### Shorthand meta tags

Note: Use the shorthand frontmatter entries, not the `meta` entry, to specify:

- [robots](#robots)
- [title](#title)
- [description](#description)
- [keywords](#keywords)

#### Overriding automatic meta tags

If you use one of the meta tags that is usually automated, it will be replaced with the meta tag defined on the page:

- `canonical`: Usually the current page URL
- `format-detection`: Usually `telephone=no`
- `theme-color`: Usually the value in global `themeColor` in `config.ts`
- `viewport`: Usually `width=device-width, initial-scale=1, minimum-scale=1`

#### Non-overridable meta tags

- The `meta charset` tag is always `utf-8`
- Open graph tags shouldn't be changed using `meta` frontmatter

### id

String. Needed for author profiles. Must be unique.

```yaml
id: steve-fenton
```

### authors

String list. The authors of the content. Uses author ids.

```yaml
authors:
    - steve-fenton
```

### crumbTitle

String. A short title to be used in breadcrumbs. Only needed where the menu should use different text to `title` or `navTitle`.

```yaml
crumbTitle: Short title
```

Note: In breadcrumbs, the `crumbTitle` is used first, if it doesn't exist then `navTitle` is used, and finally `title`.pn

### navTitle

String. A short title to be used in navigation menus. Only needed where the menu should use different text to `title`.

```yaml
navTitle: Short title
```

### navSection

String. A short title to be used for navigation groups, if it needs to be different from `navTitle` or `title`.

```yaml
navSection: Docs
```

### navOrder

Number. Recommended where the order of pages in navigation is important.

```yaml
navOrder: 1000
```

### bannerImage

An image to use in open graph banners, which are used when your page is shared on social networks and other platforms.

```yaml
bannerImage:
    src: '/img/reading.png'
    alt: A person holding a book
```

### dir

`ltr` or `rtl`. Sets the direction of the content, for example `rtl` would be used for Arabic content.

```yaml
dir: rtl
```

### lang

String. Sets the language of the content, used to select translations from `language.json` for common components.

```yaml
lang: en-GB
```

### paged

Bool. Signals that pages will be generated, which means navigation links will be updated to point to the first page.

```yaml
paged: true
```

### Page visibility

#### listable

Bool. Makes the page not visible anywhere, setting search, sitemap, and menu off in one flag.

```yaml
listable: false
```

#### navSearch

Bool. Can be used to remove the page from the site search.

```yaml
navSearch: false
```

#### navSitemap

Bool. Can be used to remove the page from the site map.

```yaml
navSitemap: false
```

#### navMenu

Bool. Can be used to remove the page from the menu.

```yaml
navMenu: false
```

### redirect

String. When used with a redirection layout (for example `src/layouts/Redirect.astro`) this specifies the relative or fully qualified address to redirect the user to.

```yaml
redirect: https://www.stevefenton.co.uk/
```

### robots

String. Allows control over indexability. By default `index, follow` is used, so only set this when you don't want the default.

```yaml
robots: noindex, follow
```

## Limited Markdown

Limited Markdown refers to subset of markdown allowing paragraphs and block quotes with inline styling with `*emphasis*`, `**strong**`, `~strikeout~`, and `line breaks\`.

Please open a GitHub issue to discuss extending this feature, which is limited to improve performance on large sites.
