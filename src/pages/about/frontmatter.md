---
layout: src/layouts/Default.astro
title: Frontmatter
navOrder: 3000
pubDate: 2022-10-24
keywords: astro accelerator,front matter,frontmatter
description: An overview of frontmatter in Astro Accelerator.
---

## Required frontmatter

`layout: string;`

`title: string;`

`pubDate: Date;`

`keywords: string;`

`description: string;`

## Optional frontmatter

`modDate?: Date;`

`categories?: string[];`

`tags?: string[];`

`id?: string;`

`authors?: string[];`

`navTitle?: string;`

`navSection?: string;`

`navOrder?: number;`

`bannerImage?: { src: string; alt: string };`

`dir?: 'ltr' | 'rtl';`

`ogLocale?: string;`

`lang?: string;`

`paged?: boolean;`

`navSearch?: boolean;`

`navSitemap?: boolean;`

`navMenu?: boolean;`

`redirect?: string;`