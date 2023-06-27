---
title: Image Automation
navTitle: Images
navOrder: 1500
pubDate: 2022-09-28
keywords: astro accelerator,image,automation,conversion,resizing,responsive
description: How image automation helps with conversion, resizing, and responsive images.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

When authoring images, use JPEG (`.jpg`) or PNG (`.png`) formats and place images in the `/public/img/` folder.

These will be used to create a set of images to use on your site.

## Conversion and Resizing

JPEG and PNG images in the `/public/img/` folder will be re-saved with compression to `/public/i/x/`.

They will also have WEBP alternatives created at different sizes, for use in responsive images.

You can run this manually using `npm run img`. Only changed images will be processed.

By default, this is part of the `npm run dev` script in `package.json` for Astro Accelerator:

```json
"dev": "node ./src/img.mjs && astro dev",
```

As part of the conversion, a set of sizes will be created to use with responsive images. For example, if you have an image named `/public/img/example.png` the following images will be generated:

- `/public/i/x/example.png` (smaller file size)
- `/public/i/400/example.webp` (400px wide WEBP)
- `/public/i/700/example.webp` (700px wide WEBP)
- `/public/i/1000/example.webp` (1000px wide WEBP)

You shouldn't create a `/public/i/` folder as this is reserved for image automation.

You can reference these images directly in your markdown files or take advantage of automatic responsive images (see below).

:::div{.note}
In a later release, the format might be changed from WEBP to a newer format (for example, AVIF). You can retain existing images or update in-content references to the newer format and delete the old generated sets. If you use the automated `:img` markdown helper for images, you won't need to worry about this.
:::

## Responsive Images

If you use the markdown extension for images, responsive source sets and sizes will be added for you.

The responsive source sets will load an optimal WEBP image based on the user's device size.

```markdown
:img{
    src=/img/example.png
    width=1000
    height=600
    alt="An example image"}
```

Notes:
- It is optional but best practice to specify a **width** and **height**
- It is optional but best practice to add meaningful **alt**-text

When this tag is processed, it will create HTML *similar* to the following (the implementation may change in minor ways).

```html
<img
    src="/img/example.png"
    width="1000"
    height="663"
    alt="A diagram showing web requests routed to different web servers"
    srcset="/i/400/example.webp 400w, /i/600/example.webp 600w, /i/1000/example.webp, 1000w"
    sizes="(max-width: 860px) 100vw, 66vw"
    class="resp-img">
```