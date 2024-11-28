---
title: Sharing
navOrder: 5000
pubDate: 2022-09-23
keywords: astro accelerator,sharing
description: How to use the sharing feature in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

The sharing feature works for elements with the `data-share` attribute within browsers that support the `navigator.share` API.

:::div{.hint}
Some browsers don't support the share API (though most plan to add support). In these cases, the share links will be hidden. Users can copy the address or use the share feature built into the browser to trigger the share.
:::

```html
<button data-share>Share Me!</button>
```

This will trigger the native sharing widget, which offers the user a list of their installed apps or services for sharing.

<button data-share>Share Me!</button>

By default, the share feature uses the current page address and open graph data, unless you specify values.

## Overriding defaults

You can optionally add the following items. In cases where they aren't set, the current page information will be used.

```html
<button data-share
     data-shareurl="https://www.stevefenton.co.uk/"
     data-sharetext="Steve Fenton's website"
     data-sharetitle="Steve Fenton">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.7" y1="10.7" x2="15.3" y2="7.3" /><line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /></svg>
</button>
```

<button data-share
     data-shareurl="https://www.stevefenton.co.uk/"
     data-sharetext="Steve Fenton's website"
     data-sharetitle="Steve Fenton">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><line x1="8.7" y1="10.7" x2="15.3" y2="7.3" /><line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /></svg>
</button>

## Styling share items

As a minimum, you should ensure the shareable elements appear clickable.
