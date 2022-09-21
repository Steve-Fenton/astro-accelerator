---
layout: ../../layouts/Default.astro
title: Navigation
navOrder: 3000
pubDate: 2022-09-17
keywords: astro boilerplate,navigation
description: Navigation menus in Astro Boilerplate
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

Using a path-based convention, we can model hierarchies within the Astro site.

Consider the following menu:

- Home (PAGE /pages/index.md)
- About (FRONTMATTER /pages/about.md)
  - Astro Boilerplate (PAGE /pages/about/astro-boilerplate.md)
  - Getting Started (PAGE /pages/about/getting-started.md)
- Articles (LIST PAGE /pages/articles.md)

`Home` is our normal case. It's a page with frontmatter and content.

`About` is our first special case, an item with children in the `/pages/about/` folder. This means its content is not used, only its frontmatter is used when building the menu. It is important for accessibility that an element doesn't have nested interactivity, so we reserve this item as a marker for expanding / collapsing the menu (in our case as a hierarchy, but also in cases where you use a hover menu or maxi menu).

`Articles` is our second special case, it points to the list pages for items in the `/pages/articles/` folder. The link will takes users to `/pages/articles/1`, which is an auto-generated page. The `article.md` file acts as a pointer to the auto-generated pages and its content is not used.

In both special cases, the paths are key, the parent item and the folder containing children must match:

- /pages/about.md
- /pages/about/

and

- /pages/articles.md
- /pages/articles/
