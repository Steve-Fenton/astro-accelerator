---
layout: ../../layouts/Default.astro
title:  Front Matter
date:   2022-09-17
keywords: jekyll boilerplate,front matter
description: A list of all custom front matter features in Jekyll Boilerplate.
bannerImage:
    src: /surface-accessories-700.webp
    alt: Dummy image
---

Front matter is defined in `congig.ts`.

```typescript
export type Frontmatter = {
	title: string;
	navTitle: string;
	date: Date;
	keywords: string;
	description: string;
	layout: string;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};
```


## Recommended Front Matter

The following front matter provides the best general experience, including setting SEO features


```markdown
---
layout:      ../layouts/Default.astro
title:       Page Title
date:        2022-09-17
keywords:    key,words,here
description: A description of the page.
bannerImage:
    src:     banner-image.webp
    alt:     A description of the banner image
---
```

## Full Example

As an example, here is the full front matter for this page. In practice, you don't have to specify everything and can use defaults to reduce the amount of front matter.

```markdown
---
layout:      ../layouts/Default.astro
title:       Long Page Title
navTitle:    Short Title
navSection:  Menu Section
navOrder:    1000
date:        2022-09-17
keywords:    key,words,here
description: A description of the page.
bannerImage:
    src:     banner-image.webp
    alt:     A description of the banner image
dir:         ltr
ogLocale:    en_GB
lang:        en
---
```