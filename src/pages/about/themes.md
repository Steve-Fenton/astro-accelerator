---
title: Themes
navOrder: 2000
pubDate: 2022-09-17
keywords: astro accelerator,github pages,github action
description: How to apply a theme in Astro Accelerator
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
        "@layouts/*": ["src/themes/accelerator/layouts/*"],
        "@components/*": ["src/themes/accelerator/components/*"],
      }
  }
}
```

## Authoring Themes

The easiest way to build an alternate theme is to copy the accelerator to use a starting point.

The only requirement is that you include the standard layouts in your `theme-name/layouts` folder:

1. Author.astro
2. Default.astro
3. Redirect.astro
4. Search.astro

You can include whatever components you need to support your theme.

You can use the available shared `@util/*` files in your theme.

## Multiple / Child Themes

You can install many themes side-by-side and use components from them to create layouts and components of your own. Use the top-level layours and components folders to coordinate this and reference the appropriate theme files to use them.

## Theme Styles

You can import styles into your theme from the theme directory, or provide an external stylesheet to be added to the `/public/css/` folder.