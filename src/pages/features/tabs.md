---
title: Tabs
pubDate: 2023-06-07
keywords: astro accelerator,tabs
description: Astro Accelerator tabbed UI features.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

The tabs feature converts a set of `<details>` disclosure widgets and turns them into a tab group, based on them sharing the same `data-group` name. For example `<details data-group="my-tab-group">` or `:::details{data-group="my-tab-group"}`.

The `<summary>` text is used for the tab and the rest of the contents is placed within the tab.

If JavaScript doesn't work, the details elements still provide a mechanism for users to expand different tabs.

You need to [enable the tabs feature](/features/flags/#details) in your `config.ts` file.

## Tabs demo

:::details{data-group="tab-example"}
:summary[Item 1]
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```javascript
const example = 'example code';
```

:::

:::details{data-group="tab-example"}
:summary[Item 2]
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
:::

:::details{data-group="tab-example"}
:summary[Item 3]
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
:::

:::details{data-group="tab-example"}
:summary[Item 4]
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
:::