---
title: Optimization
crumbTitle: Optimization
navTitle: Overview
navSection: Optimization
navOrder: 500
pubDate: 2026-04-26
keywords: astro accelerator,optimization,seo,accessibility
description: An overview of optimization features in Astro Accelerator.
---

Optimize your site for performance, accessibility, and search engines.

- [SEO](/docs/optimization/seo/)
- [Accessibility](/docs/optimization/accessibility/)
- [Search](/docs/optimization/search/)
- [Feeds](/docs/optimization/feeds/)

## Build-in optimizations

For large sites, the task of loading up lists of files to use in various components can slow builds.

Where components access pages through the Astro Accelerator, an in-memory cache is used to reduce the time spent on this process. It uses a 30 second cache for running Astro in dev mode, and a 5 minute cache for builds.
