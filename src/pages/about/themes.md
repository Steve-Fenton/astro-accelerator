---
layout: src/layouts/Default.astro
title: Themes
navOrder: 2000
pubDate: 2022-09-17
keywords: astro boilerplate,github pages,github action
description: How to apply a theme in Astro Boilerplate
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

Themes are made up of layouts and components.

They should be installed in `src/themes/[theme-name]`.

To enable a theme, adjust `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "types": ["astro/client"],
  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        // Layouts and components for the theme
        "@layouts/*": ["src/themes/boilerplate/layouts/*"],
        "@components/*": ["src/themes/boilerplate/components/*"],
      }
  }
}
```

## Authoring themes

The easiest way to build an alternate theme is to copy the boilerplate to use a starting point.

The only requirement is that you include the three layouts in your `theme-name/layouts` folder:

1. Default.astro
1. Author.astro
1. Search.astro

You can include whatever components you need to support your theme.

You can use the available shared `@util/*` files in your theme.