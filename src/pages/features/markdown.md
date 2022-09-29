---
layout: src/layouts/Default.astro
title: Markdown
navOrder: 1000
pubDate: 2022-09-23
keywords: astro boilerplate,markdown,custom markdown
description: How markdown extensions work in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

## Inline Element

Inline elements can be created using the format `:` followed by the element name, i.e. `span`. The text to add to the element is in `[square brackets]`. For example: `:span[text to show]`.

The markdown:

```markdown
You can create :span[inline] elements.
```

Results in the output:

```html
<p>You can create <span>inline</span> elements.
```

## Inline Element Attributes

Attributes can be added to inline elements using curly braces (`{}`). The attributes can specified long-hand, such as `{ title="My title" }` or short-hand for ids `{ #my-id }` and class names `{ .my-class }`.

The markdown:

```markdown
The :abbr[AB]{ title="Astro Boilerplate" } site.
```

Results in the output:

```html
<p>The <abbr title="Astro Boilerplate">AB</abbr> site.</p>
```

## Block Element

Block elements are started with three-colons and the element name, such as `:::div`. They are ended with three-colons, i.e. `:::`.

The markdown:

```markdown
:::div
Text and *markdown*.
:::
```

Results in the output:

``` html
<div>
<p>Text and <em>markdown</em>.</p>
</div>
```

## Block Element Attributes

Attributes are added to the start of the block.

The markdown:

```markdown
:::div{.note}
Text and *markdown*.
:::
```

Results in the output:

``` html
<div class="note">
<p>Text and <em>markdown</em>.</p>
</div>
```

## Image Attributes and Lazy Loading

You can create images with attributes, such as lazy loading, using an inline element.

The markdown:

```markdown
:img{ src="/image.webp" alt="Example image" loading="lazy" }
```

Results in the output:

```html
<img src="/image.webp" alt="Example image" loading="lazy">
```