---
layout: ../../layouts/Default.astro
title: Front Matter
navOrder: 2000
date: 2022-09-17
keywords: jekyll boilerplate,front matter
description: A list of all custom front matter features in Jekyll Boilerplate.
bannerImage:
    src: /surface-accessories-700.webp
    alt: Dummy image
---

Front matter is defined in `congig.ts`.

```typescript
export type Frontmatter = {
	title: string;
	navTitle: string;
	navSection: string;
	navOrder: number;
	date: Date;
	keywords: string;
	description: string;
	layout: string;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
	paged?: boolean;
};
```

### Layout

Specifies the layout for the page.

```yaml
layout: ../layouts/Default.asto
```

Items with an `Article` layout are not added to automatically generated navigation.

```yaml
layout: ../layouts/Article.astro
```

### Title

The `title` is shown in the browser header, the on page heading, and in external titles such as social and search.

You can also optionally supply a `navTitle`, which is a short version of the title for menus and breadcrumbs.

The `navSection` allows you to control the name used in navigation disclosures (for example, expandable menus or drop-downs).

```yaml
title: All About Dogs
navTitle: About Dogs
navSection: Dogs
```

### Ordering and Sorting

Use `navOrder` to control the order menu items are displayed in.

```yaml
navOrder: 5
```

### Metadata

Although `date` is only displayed on posts, it may also be used in sitemaps to signal changes.

The `keywords` and `description` are used in meta tags, and `description` may also be used in excerpts and social links.

```yaml
date: 2022-09-19
keywords: dogs,canines
description: A page about dogs and other canines.
```

### Banner Image

The banner image is used for social open graph links and is also displayed on list pages.

```yaml
bannerImage?:
	src: /dogs/whippet.webp
	alt: A whippet running through long grass on a sunny day.
```

### Language

```yaml
dir: ltr
ogLocale: en_GB
lang: en
```

### Paged

When you use Astro paged results, it generates pages with numbered addresses, for example the file `/articles/[page].astro` generates the following pages:

- /articles/1
- /articles/2
- /articles/3

You will probably want to pair this with an `articles.md` page, which allows you to specify front-matter and will appear in navigation. By setting `paged` to `true`, the link from the navigation will take visitors directly to `/articles/1`.

```yaml
paged: true
```

You'll notice that the markdown file must be named after the folder with the Astro page.

- `/pages/articles.md`
- `/pages/articles/[page].astro`

## Recommended Front Matter

The following front matter provides the best general experience, including setting SEO features

```markdown
---
layout:      ../layouts/Default.astro
title:       Page Title
date:        2022-09-17
keywords:    key,words,here
description: A description of the page.
bannerImage:
    src:     banner-image.webp
    alt:     A description of the banner image
---
```

## Full Example

As an example, here is the full front matter for this page. In practice, you don't have to specify everything and can use defaults to reduce the amount of front matter.

```markdown
---
layout:      ../layouts/Default.astro
title:       Long Page Title
navTitle:    Short Title
navSection:  Menu Section
navOrder:    1000
date:        2022-09-17
keywords:    key,words,here
description: A description of the page.
bannerImage:
    src:     banner-image.webp
    alt:     A description of the banner image
dir:         ltr
ogLocale:    en_GB
lang:        en
---
```