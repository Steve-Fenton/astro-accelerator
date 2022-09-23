---
layout: src/layouts/Default.astro
title: Accessibility
navOrder: 6000
pubDate: 2022-09-23
keywords: astro boilerplate,accessibility
description: Astro Boilerplate accessibility features.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

We think accessibility is more than important. It's fundamental. The whole point of the World Wide Web is to make information *available* to the world. If you exclude people based on how they interact with a computer, that's not a World Wide Web.

Quite a lot of effort has gone into making the out-of-the-box Astro Boilerplate accessible, though we're happy to [get your feedback on GitHub](https://github.com/Steve-Fenton/astro-boilerplate/issues).

A huge thank you to the accessibility community, especially Kev Bonett, for their crucial knowledge.

## Keyboard Users

We have skiplinks as the first tab-targets on all pages. Keyboard users can skip quickly to the part of the page they need. There's also a final link on the page to get you back to the top.

All interactive page items are keyboard-navigable.

## Aria Attributes

Where necessary, we have add aria attributes to ensure things like navigation are identifiable.

- aria-label
- aria-current
- aria-modal
- aria-labelledby

## Reduced Motion

For users with a preference for reduced motion, there are no animations or smoothing applied.

## JavaScript

JavaScript is not required. The site will run without it.

Where JavaScript is added, it progressively enhances the page.

For example:

- Mobile Menu: The overlay navigation for small screens uses JavaScript, but without JavaScript it is a simple bookmark link to the navigation at the end of the page.
- Site Search: The site search uses JavaScript, but without it will perform a fallback search (using Google Search by default, but this is configurable)
- Clickable Boxes: Links are "expanded" to make an entire box clickable, but a default link is available if JavaScript doesn't run.