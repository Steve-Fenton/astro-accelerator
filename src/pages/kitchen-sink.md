---
title: Kitchen Sink
navOrder: 200000
pubDate: 2022-09-17
keywords: astro,accelerator,site generator
description: An accelerator for a very clean version of Astro.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

<!-- @format -->

This page contains the most common content components.

## Breadcrumbs

---

<nav class="site-breadcrumbs" aria-label="Demo of breadcrumbs">
  <ol vocab="http://schema.org/" typeof="BreadcrumbList">
    <li property="itemListElement" typeof="ListItem">
      <meta property="position" content="0">
      <a property="item" typeof="WebPage" href="#"><span property="name">Home</span></a>
    </li><li property="itemListElement" typeof="ListItem">
      <meta property="position" content="1">
      <a property="item" typeof="WebPage" href="#"><span property="name">About</span></a>
    </li><li property="itemListElement" typeof="ListItem">
      <meta property="position" content="2">
      <a property="item" typeof="WebPage" href="#" aria-current="page"><span property="name">Getting Started</span></a>
    </li>
  </ol>
</nav>

---

## Mobile Menu

---

<div class="overlay-menu">
   <nav class="site-nav" aria-label="Demo site">
   <h2 class="site-nav-title" id="modal-title" tabindex="-1">Navigation</h2>
   <ul>
      <li>
         <a href="#" aria-current="page">Home</a>
      </li>
      <li class="has-children">
      <details class="sub-nav">
         <summary><span>About</span></summary>
         <ul>
            <li>
            <a href="#">About</a>
            </li>
            <li>
            <a href="#">Getting Started</a>
            </li>
         </ul>
      </details>
      </li>
      <li class="has-children">
      <details class="sub-nav">
         <summary><span>Features</span></summary>
         <ul>
            <li>
            <a href="#">Features</a>
            </li>
            <li>
            <a href="#">Markdown</a>
            </li>
            <li>
            <a href="#">Images</a>
            </li>
            <li>
            <a href="#">Header</a>
            </li>
            <li>
            <a href="#">Navigation</a>
            </li>
            <li>
            <a href="#">Posts</a>
            </li>
            <li>
            <a href="#">Feeds</a>
            </li>
            <li>
            <a href="#">I18n</a>
            </li>
            <li>
            <a href="#">Search</a>
            </li>
            <li>
            <a href="#">Accessibility</a>
            </li>
            <li>
            <a href="#">SEO</a>
            </li>
         </ul>
      </details>
      </li>
      <li>
      <a href="#">Writing</a>
      </li>
      <li>
      <a href="#">Articles</a>
      </li>
      <li>
      <a href="#">Kitchen Sink</a>
      </li>
   </ul>
   </nav>
</div>

---

## Search Page

---

<article itemscope="" itemtype="https://schema.org/Article">
<div class="site-search-wrapper"> <form method="GET" action="https://www.google.com/search" role="search" autocomplete="off" data-sourcedata="/search.json"> <fieldset> <input type="hidden" name="q" value="site:https://astro.stevefenton.co.uk/"> <input type="text" name="q" class="site-search-query" placeholder="Search for" spellcheck="true" autocomplete="off" autofocus="autofocus"> <button type="submit">Go</button> </fieldset> </form>
  <div class="site-search-results" data-title="Results" data-emptytitle="No Results"></div>
  <script src="/js/search.js" type="module" async=""></script> </div>
</article>

---

## Footer

---

(Scroll to bottom of page)

---

## Page Links

---

<nav class="post-paging" aria-label="Paging">
  <a href="#">Prev</a>
  <a href="#" class="paging-collapse-after">1</a><a href="#" class="">3</a><a href="#" aria-current="page" class="">4</a><a href="#" class="">5</a><a href="#" class="paging-collapse-before">7</a>
  <a href="#">Next</a>
</nav>

---

## Block Quote

Markdown:

```markdown
> Quiet minds cannot be perplexed or frightened
> but go on in fortune or misfortune at their own
> private pace, like a clock during a thunderstorm.
> <cite>Robert Louis Stevenson</cite>
```

Result:

> Quiet minds cannot be perplexed or frightened
> but go on in fortune or misfortune at their own
> private pace, like a clock during a thunderstorm.
> <cite>Robert Louis Stevenson</cite>

## Code

Markdown:

````markdown
Inline `code` and a code block.

    const elem = document.querySelector('.elem');

A code block with a language set.

```javascript
const elem = document.querySelector('.elem');
```
````

Result:

Inline `code` and a code block with a language set.

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
:::figure{.simple-grid}
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
:::
```

Result:

:::figure{.simple-grid}
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
:::

## Nested blocks

Outer blocks must have more `:` characters than inner blocks:

```markdown
::::div{.simple-grid}
:::div{.note}
This is a custom div element with the class `note`
:::
:::div{.note}
This is a custom div element with the class `note`
:::
::::
```

Result:

::::div{.simple-grid}
:::div{.note}
This is a custom div element with the class `note`
:::
:::div{.note}
This is a custom div element with the class `note`
:::
::::

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
    srcset="
        /i/400/frankenstein.webp  400w,
        /i/700/frankenstein.webp  700w,
        /i/1000/frankenstein.webp,
        1000w
    "
    sizes="(max-width: 860px) 100vw, 66vw"
    class="resp-img"
/>
```

Result:

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

You can also wrap images in figures and optionally add a caption:

```markdown
:::figure
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
::figcaption[The modern hardback edition of Frankenstein]
:::
```

## Videos

[A YT video alone will auto-embed behind a click](https://www.youtube.com/watch?v=FjPO1k0Y-xA)

When a [YT video](https://www.youtube.com/watch?v=FjPO1k0Y-xA) is within a paragraph, it doesn't auto-embed.

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
---
```

Result:

---

## Links

Markdown:

```markdown
<https://astro.stevefenton.co.uk/kitchen-sink/>

[Astro Accelerator](https://astro.stevefenton.co.uk/ 'The Astro Accelerator Site')
```

Result:

<https://astro.stevefenton.co.uk/kitchen-sink/>

[Astro Accelerator](https://astro.stevefenton.co.uk/ 'The Astro Accelerator Site')

## Tables

Markdown:

```markdown
| Item                         | One | Two | Three |
| :--------------------------- | :-: | :-: | :---: |
| Some description of the item |  1  |  2  |   3   |
| Some description of the item |  2  |  3  |   4   |
| Some description of the item |  3  |  4  |   5   |
```

Result:

| Item                         | One | Two | Three |
| :--------------------------- | :-: | :-: | :---: |
| Some description of the item |  1  |  2  |   3   |
| Some description of the item |  2  |  3  |   4   |
| Some description of the item |  3  |  4  |   5   |

A large table:

| Performance level | Lead time      | Deployment frequency           | Change failure rate | Mean time to resolve |
| ----------------- | -------------- | ------------------------------ | ------------------- | -------------------- |
| Elite             | < 1 hour       | Multiple times per day         | 0-15%               | < 1 hour             |
| High              | 1 day - 1 week | Weekly to monthly              | 16-30%              | < 1 day              |
| Medium            | 1-6 months     | Monthly to biannually          | 16-30%              | 1 day - 1 week       |
| Low               | > 6 months     | Fewer than once every 6 months | 16-30%              | > 6 months           |

## Text

Markdown:

```markdown
Text can use _emphasis_ or **strong**. You can create\
line breaks.
```

Result:

Text can use _emphasis_ or **strong**. You can create\
line breaks.

# Headings

This section has all headings, from level 1 (above) to level 6.

## Heading 2

Example text.

### Heading 3

Example text.

#### Heading 4

Example text.

##### Heading 5

Example text.

###### Heading 6

Example text.
