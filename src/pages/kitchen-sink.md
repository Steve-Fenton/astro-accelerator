---
layout: src/layouts/Default.astro
title: Heading 1
navTitle: Kitchen Sink
navOrder: 200000
pubDate:   2022-09-17
keywords: astro,boilerplate,site generator
description: A boilerplate for a very clean version of Astro.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

This page contains the most common content components.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Montes nascetur ridiculus mus mauris vitae ultricies.

### Heading 3

Lectus nulla at volutpat diam ut. Tortor vitae purus faucibus ornare suspendisse. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Velit euismod in pellentesque massa. Quis commodo odio aenean sed. Quis auctor elit sed vulputate mi sit amet.

#### Heading 4

Condimentum lacinia quis vel eros. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Dignissim cras tincidunt lobortis feugiat vivamus at. Luctus venenatis lectus magna fringilla urna.

##### Heading 5

Suspendisse faucibus interdum posuere lorem ipsum dolor. Ultricies lacus sed turpis tincidunt id aliquet risus. Volutpat est velit egestas dui id ornare arcu. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Enim eu turpis egestas pretium aenean pharetra magna. Nulla malesuada pellentesque elit eget.

###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Montes nascetur ridiculus mus mauris vitae ultricies.

## Block Quote

Markdown:

```markdown
> Quiet minds cannot be perplexed or frightened 
but go on in fortune or misfortune at their own 
private pace, like a clock during a thunderstorm. 
<cite>Robert Louis Stevenson</cite>
```

Result:

> Quiet minds cannot be perplexed or frightened 
but go on in fortune or misfortune at their own 
private pace, like a clock during a thunderstorm. 
<cite>Robert Louis Stevenson</cite>

## Code

Markdown:

`````markdown
Inline `code` and a code block.

    const elem = document.querySelector('.elem');

A code block with a language set.

```javascript
const elem = document.querySelector('.elem');
```
`````

Result:

Inline `code` and a code block.

    const elem = document.querySelector('.elem');

A code block with a language set.

```javascript
const elem = document.querySelector('.elem');
```

## Custom Elements

### Note

Markdown:

```markdown
:::div{.note}
This is a custom div element with the class `note`
:::
```

Result:

:::div{.note}
This is a custom div element with the class `note`
:::

### Simple Grid

Markdown:

```markdown
:::div{.simple-grid}

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:::
```

Result:

:::div{.simple-grid}

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:::

## Images

Markdown:

```markdown
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
```

This creates the following HTML (or similar):

```html
<img
   src="/i/x/frankenstein.png"
   alt="Book cover"
   loading="lazy"
   srcset="/i/400/frankenstein.webp 400w, /i/700/frankenstein.webp 700w, /i/1000/frankenstein.webp, 1000w"
   sizes="(max-width: 860px) 100vw, 66vw"
   class="resp-img">
```

Result:

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

## Lists

Markdown:

```markdown
1. Item
1. Item
   - Nested Item
1. Item

   Item additional paragraph.
```

Result:

1. Item
1. Item
   - Nested Item
1. Item

   Item additional paragraph.

## Horizontal Rule

Markdown:

```markdown
***
```

Result:

***

## Links

Markdown:

```markdown
<https://astro.stevefenton.co.uk/kitchen-sink/>

[Astro Boilerplate](https://astro.stevefenton.co.uk/ "The Astro Boilerplate Site")
```

Result:

<https://astro.stevefenton.co.uk/kitchen-sink/>

[Astro Boilerplate](https://astro.stevefenton.co.uk/ "The Astro Boilerplate Site")

## Tables

Markdown:

```markdown
| Item | One | Two | Three |
| :--  | :-: | :-: | :-:   |
| A    | 1   | 2   | 3     |
| B    | 2   | 3   | 4     |
| C    | 3   | 4   | 5     |
```

Result:

| Item | One | Two | Three |
| :--  | :-: | :-: | :-:   |
| A    | 1   | 2   | 3     |
| B    | 2   | 3   | 4     |
| C    | 3   | 4   | 5     |

## Text

Markdown:

```markdown
Text can use *emphasis* or **strong**. You can create\
line breaks.
```

Result:

Text can use *emphasis* or **strong**. You can create\
line breaks.