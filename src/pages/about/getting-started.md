---
layout: ../../layouts/Default.astro
title: Getting Started
navOrder: 1000
pubDate: 2022-09-17
keywords: astro boilerplate,getting started
description: There are just a couple of tasks to turn the Astro Boilerplate into your own working website.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

- Download the code from [GitHub](https://github.com/Steve-Fenton/astro-boilerplate)
- Run `npm install` to download the packages
- Run `npm run dev` to start the site

## Things to Update

- `astro.config.mjs` the `site` value
- `/public/robots.txt` update the sitemap address

## Running in a sub-folder

Some use cases run the site in a sub-folder, in order to front-door the site as a microsite that is part of a larger site. For example:

 - www.example.com - operated by the marketing team, maybe using a big platform...
 - www.example.com/dev-blog/ - operated by the development team, running Astro

To do this, start adding you pages to `/pages/dev-blog/` and place your public assets in `/public/dev-blog`. Astro is perfectly happy placing images into the folders created for the pages, and will add both the content and images to the `/dev-blog/` folder it creates during the build.

When you map your front door for `www.example.com/dev-blog/` all your paths will be correct as you've placed all your content in this folder. This avoids issues attempting to load resources from the "root" that would be front doored to your other site running at `www.example.com`.