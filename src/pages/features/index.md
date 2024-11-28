---
title: Astro Accelerator Features
navSection: Features
navTitle: Overview
navOrder: 2000
pubDate: 2022-09-23
keywords: features,astro,accelerator
description: An overview of features in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

<!-- @format -->

Astro Accelerator has built-in extras that help you do more with your site in less time. You can explore all the features below and find links to more details.

## Special Classes for Input and JavaScript

Classes are added to the document body with the input type and to indicate JavaScript components are loaded.

### Input types

The users current input method causes a class to be added to the document body.

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

### JavaScript

You may want to conditionally style elements based on whether the JavaScript modules are loaded. This allows fallback mechanisms to remain visible until it's certain the JavaScript enhancements are working.

The `js-enabled` class is added to the `<body>` element when the JavaScript modules are loaded.

You might use this to hide a fallback mechanism, for example:

```css
body.js-enabled .site-nav {
    display: none;
}
```

## Markdown Extensions

The [markdown extensions](/features/markdown/) provide a consistent markup for situations where you need to add inline or block elements. For example, if you want to wrap some content in a `<div>` tag, add an attribute, or get responsive images without too much effort.

- Inline elements
- Block elements
- Attributes
- Responsive images

[Find out more about markdown extensions](/features/markdown/)

## Image Automation

Astro Accelerator has baked-in [image automation](/features/image-automation/) that will generate optimised images for use in content. The images can be used with, or without, the responsive image markdown extension.

- Automatic resizing
- Auto creation of webp/future formats

[Find out more about image automation](/features/image-automation/)

## Header

The [Astro Accelerator header](/features/header/) is small but powerful, providing shortcuts to content sections, links for mobile navigation and search, and breadcrumbs.

- Skiplinks
- Mobile navigation
- Search icon
- Breadcrumbs

[Find out more about header features](/features/header/)

## Navigation

The [primary navigation feature](/features/navigation/) gives you full control over how you present your information architecture. You can use the automatic discovery of menu items, provide your own list, or mix the two approaches.

- Automatic menu items
- Manual menu items
- Manual *and* automatic menu items
- Automatic table of contents

[Find out more about navigation features](/features/navigation/)

## Articles

If you want to publish [articles, blogs, or news](/features/posts/), you can provide paged lists of articles and associated author profiles.

- Article list
- Author profiles

[Find out more about articles and authors](/features/posts/)

## Search

The [search feature](/features/search/) provides a serverless search utility that obtains data from a static file to power an instant search feature.

In the event of a problem, it falls back to a configured search engine to perform a site search.

## :abbr[I18n]{ title="Internationalization" }

The [internationalization feature](/features/internationalization/) lets you change the text items found in layouts and components and control how dates are displayed.

- Language and locale settings
- Date display
- Translations

[Find out more about i18n](/features/internationalization/)

## Feeds

Several [site feeds](/features/feeds/) are included to provide data for user searches, feeds for consumption in feed readers, and search engine site maps.

- Site Search
- Sitemap
- Atom

[Find out more about feeds](/features/feeds/)

## Accessibility

[Accessibility features](/features/accessibility/) to assist a range of user needs are provided by default. From keyboard use to assistive technology, we're keen to make the content available to everyone.

- Skiplinks
- Use of aria attributes where appropriate
- All interactive items are keyboard navigable
- JavaScript not required, features are progressively enhanced

[Find out more about accessibility](/features/accessibility/)

## SEO

To help search engines understand your site, there are [SEO features](/features/seo/) to help with web addresses, site structure, and social sharing.

- Canonical URLs
- Normalisation of URLs (i.e. avoid having `/about/` and `/about`)
- Structured breadcrumbs
- Open graph tags
- Page redirects (internal or external)

[Find out more about SEO](/features/seo/)

## Tabs

If you need an accessible tab control, you can use standard disclosure widgets in your pages and have them converted into tabs in the browser.

[Find out more about tabs](/features/tabs/)
