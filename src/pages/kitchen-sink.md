---
layout: src/layouts/Default.astro
title: Kitchen Sink
navOrder: 200000
pubDate: 2022-09-17
keywords: astro,accelerator,site generator
description: An accelerator for a very clean version of Astro.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

This page contains the most common content components.

## Breadcrumbs

***

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

***

## Mobile Menu

***

<div class="overlay-menu">
   <nav class="site-nav" id="overlay__site-nav" aria-label="Demo site navigation">
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

***

## Search Page

***

<article itemscope="" itemtype="https://schema.org/Article">
   <header>
      <h1 itemprop="name headline">Search</h1>
   </header>
   <div class="page-content anim-show-parent" itemprop="articleBody">
      <p>Search the site below.</p>
      <form method="GET" action="" role="search" id="site-search" class="site-search note" autocomplete="off" data-sourcedata="/search.json">
         <fieldset>
               <div>
                  <label for="site-search-query">Search for</label>
                  <input type="text" name="q" id="site-search-query" spellcheck="true" autocomplete="off">
                  <button id="site-search-button" type="submit">Go</button>
               </div>
         </fieldset>
      </form>
      <div id="site-search-results" data-title="Results" data-emptytitle="No Results">
         <h2>Results</h2>
         <ol class="site-search-results"><li data-score="52"><a href="https://astro.stevefenton.co.uk/features/image-automation/"><mark>Image</mark>s</a><div class="result-path">/features/image-automation/</div><div class="result-headings">How <mark>image</mark> automation helps with conversion, resizing, and responsive <mark>image</mark>s.</div><ul><li><a href="https://astro.stevefenton.co.uk/features/image-automation/#responsive-images">Responsive <mark>Image</mark>s</a></li></ul></li><li data-score="12"><a href="https://astro.stevefenton.co.uk/about/frontmatter/">Frontmatter</a><div class="result-path">/about/frontmatter/</div><div class="result-headings">An overview of frontmatter in Astro Accelerator.</div><ul><li><a href="https://astro.stevefenton.co.uk/about/frontmatter/#bannerimage">banner<mark>Image</mark></a></li></ul></li><li data-score="12"><a href="https://astro.stevefenton.co.uk/features/">Features</a><div class="result-path">/features/</div><div class="result-headings">An overview of features in Astro Accelerator.</div><ul><li><a href="https://astro.stevefenton.co.uk/features/#image-automation"><mark>Image</mark> Automation</a></li></ul></li><li data-score="12"><a href="https://astro.stevefenton.co.uk/features/markdown/">Markdown</a><div class="result-path">/features/markdown/</div><div class="result-headings">How markdown extensions work in Astro Accelerator.</div><ul><li><a href="https://astro.stevefenton.co.uk/features/markdown/#image-attributes-and-lazy-loading"><mark>Image</mark> Attributes and Lazy Loading</a></li></ul></li><li data-score="12"><a href="https://astro.stevefenton.co.uk/kitchen-sink/">Heading 1</a><div class="result-path">/kitchen-sink/</div><div class="result-headings">An accelerator for a very clean version of Astro.</div><ul><li><a href="https://astro.stevefenton.co.uk/kitchen-sink/#images"><mark>Image</mark>s</a></li></ul></li></ol>
      </div>
   </div>
</article>

***

## Header

***

<header class="site-header">
  <a href="#" class="navigation-icon" title="Open menu"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg></a>
  <a href="#" class="site-title" translate="no">Astro Accelerator</a>
  <a href="#" class="search-icon" title="Open site search"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <circle cx="10" cy="10" r="7"></circle>
    <line x1="21" y1="21" x2="15" y2="15"></line>
  </svg></a>
</header>

***

## Footer

***

<footer class="site-footer" id="site-footer">
  <div class="taxonomy">
    <div>
      <h2>Categories</h2>
      <ul>
      <li><a href="/category/example/1/">Example</a></li><li><a href="/category/sample/1/">Sample</a></li>
      </ul>
    </div>
    <div>
      <h2>Tags</h2>
      <ul>
      <li><a href="/tag/other/1/">Other</a></li><li><a href="/tag/technology/1/">Technology</a></li>
      </ul>
    </div>
  </div>
  <p>Copyright © 2022 Steve Fenton</p>
  <nav aria-label="Skip Back">
    <a href="#site-top">Back to top</a>
  </nav>
</footer>

***

## Page Links

***

<nav class="post-paging" aria-label="Paging">
  <a href="#">Prev</a>
  <a href="#" class="paging-collapse-after">1</a><a href="#" class="">3</a><a href="#" aria-current="page" class="">4</a><a href="#" class="">5</a><a href="#" class="paging-collapse-before">7</a>
  <a href="#">Next</a>
</nav>

***

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
   srcset="/i/400/frankenstein.webp 400w, /i/700/frankenstein.webp 700w, /i/1000/frankenstein.webp, 1000w"
   sizes="(max-width: 860px) 100vw, 66vw"
   class="resp-img">
```

Result:

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

You can also wrap images in figures and optionally add a caption:

```markdown
:::figure
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
:figcaption[The modern hardback edition of Frankenstein]
:::
```

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

[Astro Accelerator](https://astro.stevefenton.co.uk/ "The Astro Accelerator Site")
```

Result:

<https://astro.stevefenton.co.uk/kitchen-sink/>

[Astro Accelerator](https://astro.stevefenton.co.uk/ "The Astro Accelerator Site")

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

# Headings

This section has all headings, from level 1 (above) to level 6.

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