---
layout: ../../layouts/Default.astro
title: Steve Fenton
navOrder: 2000
pubDate: 2022-09-17
keywords: steve fenton
description: Steve Fenton's profile on Astro Boilerplate
bannerImage:
    src: /img/authors/steve-fenton.webp
    alt: Dummy image
authors:
    - steve-fenton
---

Content can be written in the language of your choice. Most translations should be done in-content.

There are some language items needed within the templates, for items like paging or alternate text for site icons and skip links.

The language strings can be found in `/components/Language/language.json`. You can add translation sets to these.

Before:

```
"articles": {
	"previous": {
		"en": "Prev"
	},
	"next": {
		"en": "Next"
	}
}
```

After:

```
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