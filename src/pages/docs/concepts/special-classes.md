---
title: Special Classes
navSection: Documentation
navTitle: Input & JS Classes
navOrder: 230
pubDate: 2026-04-26
keywords: astro accelerator,css,input,javascript,classes
description: Special classes added to the document body for input methods and JavaScript detection.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

Astro Accelerator adds specific classes to the document body to help you style elements based on the user's input method and whether JavaScript is available.

## Input types

The user's current input method causes a class to be added to the document body.

- Keyboard: `input-keyboard`
- Mouse: `input-mouse`
- Touch: `input-touch`

Only one of these classes will be present at any time.

This allows you to adjust styles to suit different input types, for example adding more prominent focus indicators for keyboard users:

```css
.input-keyboard :focus {
    outline: 2px dashed aqua;
    border-radius: 5px;
}
```

## JavaScript Detection

You may want to conditionally style elements based on whether the JavaScript modules are loaded. This allows fallback mechanisms to remain visible until it's certain the JavaScript enhancements are working.

The `js-enabled` class is added to the `<body>` element when the JavaScript modules are loaded.

You might use this to hide a fallback mechanism, for example:

```css
body.js-enabled .site-nav {
    display: none;
}
```
