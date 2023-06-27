---
title: Posts
navOrder: 4000
pubDate: 2022-09-23
keywords: astro accelerator,articles,posts,list
description: How articles and authors work in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

In Astro Accelerator, posts (news, articles, blogs, etc) require a couple of puzzle pieces. In the examples below, the term `articles` is used below, but you can call this anything as long as you keep it consistent.

All the below items are in the `/src/pages/` directory:

1. `/articles.md` (used for frontmatter)
2. `/articles/` folder
3. `/articles/[page].astro` (list page)
4. `/articles/[year]/[month]/your-article.md`

The top-level markdown page only contains front-matter that is used to show the item in the menu and to redirect any stray traffic:

```astro
---
layout: src/layouts/Redirect.astro
title: Articles
paged: true
navOrder: 100000
navSearch: false
navSitemap: false
pubDate:  2022-09-17
redirect: /articles/1/
---

```

The folder contains the list page logic `[page].astro` and folders containing articles.

## Authors

Author profiles are just normal pages, with the author layout and a unique id. You can place them in a folder to group them.

```yaml
layout: src/layouts/Author.astro
id: steve-fenton
title: Steve Fenton
```

You can link multiple authors to an article using the article's frontmatter.

```yaml
layout: src/layouts/Default.astro
title: Sample Post
navMenu: false
authors:
    - steve-fenton
```

The author, or authors, in the frontmatter are matched to author profiles by the id.

## Using Different Article Names

You can use a different name for articles, or even have multiple collections with different names.

1. `/pages/blog.md` (used for frontmatter)
2. `/pages/blog/` folder
3. `/pages/blog/[page].astro` (list page)
4. `/pages/blog/[year]/[month]/your-article.md`

Adjust the frontmatter in `[page].astro` in your new folder to change the title.

```typescript
const frontmatter: Frontmatter = {
  layout: 'src/layouts/Default.astro',
  title: 'Blog',
  //...
}
```

Adjust the filter in `[page].astro` in your new folder to change the listed items.

```typescript
const sourcePosts = await Astro.glob('../blog/**/*.md');
```

Add a new feed by copying `atom.xml.ts` and changing the path for articles:

```typescript
const allArticles = import.meta.glob('./blog/**/*.md');
```