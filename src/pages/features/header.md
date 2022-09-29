---
layout: src/layouts/Default.astro
title: Header
navOrder: 2000
pubDate: 2022-09-23
keywords: astro boilerplate,header,skiplinks,mobile navigation,breadcrumbs
description: How header features work in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

## Skiplinks

The site has built-in skiplinks. Skiplinks allow keyboard users to quickly move focus to the menu, content, or footer. There is also an option to return to the top of the page.

:img{ src="/img/screens/skiplinks.png" alt="Skiplinks are visible on tab" }

You can provide [translations](/features/internationalization/#language-translations) for these.

## Mobile navigation

On small screens, the menu is displayed at the end of the page. To make it easier for users to view the menu an icon is added to the header.

When a user clicks on the menu icon, the navigation is overlaid on the page (or in cases with no JavaScript, the page scrolls to the menu). While the overlay is open, the icon changes to a close icon.

:img{ src="/img/screens/mobile-menu.png" alt="The mobile menu overlays the page" loading="lazy" }

There are mechanisms to manage keyboard focus on the mobile navigation overlay.

## Search icon

The seach icon is shown in the header as long as there is a page with `layout: src/layouts/Search.astro`. The search layout automatically adds the search feature to the search page, so the icon is only shown where a page is available to show the search.

:img{ src="/img/screens/search-icon.png" alt="The search icon is automatically added" loading="lazy" }

You should have only one search page on your site. If you add more than one, the site will pick one to link to.

If you have no search page, the icon is not shown.

## Breadcrumbs

Breadcrumbs are automatically added to pages. These provide several benefits:

- They help users orient themselves on the website
- They provide a quick way for users to move up your content structure
- They give search engines signals about the structure of your site

:img{ src="/img/screens/breadcrumbs.png" alt="Breadcrumbs appear below the header" loading="lazy" }

The breadcrumbs contain structured data for search engines.