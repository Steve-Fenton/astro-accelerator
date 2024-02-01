---
title: Flags
navOrder: 500
pubDate: 2022-10-31
keywords: astro accelerator,feature flags
description: How to use the Astro Accelerator feature flags to control site enhancements like code blocks, images, and video
---

Feature flags are available in `config.ts` for the following enhancements.

```javascript
featureFlags: {
    codeBlocks: ['copy'],
    figures: ['enlarge'],
    youTubeLinks: ['embed'],
},
```

To disable a feature, remove its value from the list. For example, to disable code block copy:

```javascript
featureFlags: {
    codeBlocks: [],
    figures: ['enlarge'],
    youTubeLinks: ['embed'],
},
```

When you remove a feature, the associated JavaScript file is not loaded.

## Code Blocks

- 'copy': adds a "copy" icon to code blocks to help users copy the examples.

## Details

- 'tabs': converts details elements into a tabbed interface based on the `data-group` name

## Figures

- 'enlarge': adds an "enlarge" icon, which opens images in a new tab so users can pinch/zoom

## Headers

- 'link': adds a "link" icon to each heading with an id attribute to provide the bookmark link for the header.

## Search

- 'dialog': enables the on-page search dialog, rather than navigating to the search page (you still need an active search page on the site).
- 'headings': shows quick links to matching headings in the search results.

## YouTube Links

- 'embed': transforms YouTube links into embedded videos, lazy loaded when the user clicks