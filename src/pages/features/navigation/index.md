---
title: Navigation in Astro Accelerator
navTitle: Overview
navSection: Navigation
navOrder: 3000
pubDate: 2022-09-23
modDate: 2022-11-04
keywords: astro accelerator,navigation,menu
description: How the navigation menu works in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

The main navigation menu is designed to provide an accessible way to navigate a hierarchy of pages.

The menu can:

- Be generated automatically from pages (default)
- Be manually controlled from a data file
- Use a combination of the automatic pages plus additional manual items

## Automatic Menu Items

By default, the menu uses automatic discovery. You can see the configuration for this in `src/data/navigation.ts` for the main navigation and in `src/data/footer.ts` for the footer columns.

### Main Menu

```typescript
export const menu: (MenuItem | 'auto')[] = [
  'auto'
];

```

### Footer Columns

```typescript
export const menu: (MenuItem | 'categories' | 'tags')[] = [
    'categories',
    'tags'
];

```

Using a path-based convention, we can model hierarchies within the Astro site.

Consider the following menu:

- Home (PAGE /pages/index.md)
- About (FRONTMATTER /pages/about.md)
  - Astro Accelerator (PAGE /pages/about/astro-accelerator.md)
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

### Additional Manual Menu Items

To add menu items to the automatic navigation, add the items to `src/navigation.ts`.

```typescript
export const menu: (MenuItem | 'auto')[] = [
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

Without this line, only the manual menu items will be shown.

## Automatic Table of Contents

Where there are sub-headings on a page, an automatic table of contents will be shown. This allows users to skip down the page to the content they are most interested in.

:::figure
:img{src="/img/screens/table-of-contents.png" loading="lazy" alt="An automatic table of contents based on headings in the page"}
::figcaption[An automatically generated table of contents]
:::
