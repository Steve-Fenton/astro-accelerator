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