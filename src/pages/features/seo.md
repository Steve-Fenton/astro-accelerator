---
title: SEO
navOrder: 6000
pubDate: 2022-09-23
keywords: astro accelerator,seo
description: Astro Accelerator SEO features.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

<!-- @format -->

Astro Accelerator intends to be kind to search engines.

A big thank you to the SEO community, especially Petr Vinklarek, for their knowledge.

## Canonical URLs

We hint the canonical URL for pages to search engines using the `<link rel="canonical" ../>` tag.

## Address Normalization

All component and layout links are passed through URL normalization, to ensure the trailing `/` is included.

## Structured Data

Breadcrumbs contain structured data.

## Open Graph Tags

Open Graph tags are included for social sharing.

## Redirects

You can create a redirect by adding a markdown file with the following content:

```
---
layout: src/layouts/Redirect.astro
title: Redirect
redirect: /articles/feed.xml
navMenu: false
pubDate: 2022-09-17
---
<div>
Our article feed can be found <a href="/articles/feed.xml">here</a>
</div>

```

It uses the `Redirect.astro` layout to perform a meta-redirect to the location of your choice, including external addresses if required.

The above examples is in `/pages/feed.md` and redirects requests from `www.example.com/feed` to `www.example.com/articles/feed.xml`.

The content of this file is optional, as browsers typically respect the meta tag redirect and immediately send the user to the correct location.

You might implement a strategy where instead of renaming a page, you move the content to the new page and turn the existing page into a redirect, to avoid trapping users on a 404 page if they have the old address or follow an old back link.

## Custom meta tags

You can add custom meta tags to authors and pages using the [meta frontmatter](/about/frontmatter/#meta).

For example, you can add author verification using the `fediverse:creator` meta tag:

```yaml
meta:
    - name: 'fediverse:creator'
      content: '@stevefenton@mastodon.social'
```

Or add a canonical link to a page if you want to override the automatic canonical link, which points to the Astro URL for the current page.

```yaml
meta:
    - name: canonical
      content: https://example.com/your-canonical-url
```
