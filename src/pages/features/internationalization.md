---
title: I18n
navOrder: 5000
pubDate: 2022-09-23
keywords: astro accelerator,i18n,internationalization,languages,translations
description: How languages work in Astro Accelerator.
bannerImage:
    src: /img/surface-accessories.png
    alt: Dummy image
---

## Language and Locale Settings

Site wide defaults can be set for languages and locales. These are in `src/config.ts`.

```typescript
export const SITE = {
  //...
  default: {
    lang: 'en',
    locale: 'en-GB',
    dir: 'ltr'
  }
}
```

## Date Formats

Dates are output according to the [language and locale settings](#language-and-locale-settings) but you can also control the display of dates in `src/config.ts`.

```typescript
export const SITE = {
  //...
  dateOptions: {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
}
```

## Language Translations

There are some user interface elements included in Astro Accelerator that you may wish to adjust or translate. There are built-in fallback translations, but you can create your own translations in the file: `/src/data/language.json`.

To add translations or specify additional language strings. A before and after example will help to illustrate this.

**Before:**

```json
"articles": {
  "previous": {
    "en": "Prev"
  },
  "next": {
    "en": "Next"
  }
}
```

**After:**

```json
"articles": {
  "previous": {
    "en": "Prev",
    "fr": "Précédent"
  },
  "next": {
    "en": "Next"
    "fr": "Suivant"
  }
}
```

You can specify the language as the short code, i.e. `en`, or the long code, i.e. `en-GB`.

If you specify a long code, if the translation is not found it will fallback to the same-language short code. This means you can specify a general French translation using `fr` as the language, and then override individual values for `fr-BE` (rather than entering a whole `fr-BE` translation set).

The fallback is long -> short -> English default. For example:  `fr-BE` -> `fr` -> `en`.
