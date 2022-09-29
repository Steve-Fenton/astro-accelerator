---
layout: src/layouts/Default.astro
title: Navigation
navOrder: 3000
pubDate: 2022-09-23
keywords: astro boilerplate,navigation,menu
description: How the navigation menu works in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

The navigation menu is designed to provide an accessible way to navigate a hierarchy of pages.

The menu can:

- Be generated automatically from pages (default)
- Be manually controlled from a data file
- Use a combination of the automatic pages plus additional manual items

## Automatic Menu Items

By default, the menu uses automatic discovery. You can see the configuration for this in `src/navigation.ts`.

```typescript
export const menu: (NavPage | 'auto')[] = [
  'auto'
];

```

Using a path-based convention, we can model hierarchies within the Astro site.

Consider the following menu:

- Home (PAGE /pages/index.md)
- About (FRONTMATTER /pages/about.md)
  - Astro Boilerplate (PAGE /pages/about/astro-boilerplate.md)
  - Getting Started (PAGE /pages/about/getting-started.md)
- Articles (LIST PAGE /pages/articles.md)

`Home` is our normal case. It's a page with frontmatter and content.

`About` is our first special case, an item with children in the `/pages/about/` folder. This means its content is not used, only its frontmatter is used when building the menu. It is important for accessibility that an element doesn't have nested interactivity, so we reserve this item as a marker for expanding / collapsing the menu (in our case as a hierarchy, but also in cases where you use a hover menu or maxi menu).

`Articles` is our second special case, it points to the list pages for items in the `/pages/articles/` folder. The link will takes users to `/pages/articles/1/`, which is an auto-generated page. The `article.md` file acts as a pointer to the auto-generated pages and its content is not used.

In both special cases, the paths are key, the parent item and the folder containing children must match:

- /pages/about.md
- /pages/about/

and

- /pages/articles.md
- /pages/articles/

## Additional Manual Menu Items

To add menu items to the automatic navigation, add the items to `src/navigation.ts`.

```typescript
export const menu: (NavPage | 'auto')[] = [
  'auto',
  {
    title: 'Section',
    url: '/section/',
    ariaCurrent: false,
    isOpen: false,
    order: 1,
    section: 'Section',
    children: [
      {
        title: 'Blog',
        url: '/section/blog/',
        ariaCurrent: false,
        isOpen: false,
        order: 1,
        section: '',
        children: []
       },
       {
        title: 'Publications',
        url: '/section/publications/',
        ariaCurrent: false,
        isOpen: false,
        order: 2,
        section: '',
        children: []
       },
       {
        title: 'About',
        url: '/section/about/',
        ariaCurrent: false,
        isOpen: false,
        order: 3,
        section: '',
        children: []
       },
    ]
   },
];
```

## Remove Automatic Menu Items

To remove all automatic menu items, remove the following line:

```typescript
  'auto',
```