---
title: Header
navOrder: 410
pubDate: 2026-04-26
keywords: astro accelerator,header,skiplinks,mobile navigation,breadcrumbs
description: How header features work in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

## Skiplinks

The site has built-in skiplinks. Skiplinks allow keyboard users to quickly move focus to the menu, content, or footer. There is also an option to return to the top of the page.

:::figure
:img{ src="/img/screens/skiplinks.png" alt="Skiplinks are visible on tab" }
:::

You can provide [translations](/docs/content/i18n/#language-translations) for these.

## Mobile navigation

On small screens, the menu is displayed at the end of the page. To make it easier for users to view the menu an icon is added to the header.

When a user clicks on the menu icon, the navigation is overlaid on the page (or in cases with no JavaScript, the page scrolls to the menu). While the overlay is open, the icon changes to a close icon.

:::figure
:img{ src="/img/screens/mobile-menu.png" alt="The mobile menu overlays the page" loading="lazy" }
:::

There are mechanisms to manage keyboard focus on the mobile navigation overlay.

## Light/dark mode toggle

The site has a built-in light/dark mode toggle. This allows users to switch between light and dark mode.

:::figure
:img{ src="/img/screens/light-dark-mode.png" alt="The light/dark mode toggle" loading="lazy" }
:::

## Search icon

The search icon is shown in the header as long as there is a page with `layout: src/layouts/Search.astro`. The search layout automatically adds the search feature to the search page, so the icon is only shown where a page is available to show the search.

:::figure
:img{ src="/img/screens/search-icon.png" alt="The search icon is automatically added" loading="lazy" }
:::

You should have only one search page on your site. If you add more than one, the site will pick one to link to.

If you have no search page, the icon is not shown.

## Breadcrumbs

Breadcrumbs are automatically added to pages. These provide several benefits:

- They help users orient themselves on the website
- They provide a quick way for users to move up your content structure
- They give search engines signals about the structure of your site

:::figure
:img{ src="/img/screens/breadcrumbs.png" alt="Breadcrumbs appear below the header" loading="lazy" }
:::

The breadcrumbs contain structured data for search engines.
