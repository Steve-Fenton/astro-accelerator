---
layout: ../../layouts/Default.astro
title: Navigation
navOrder: 2500
pubDate: 2022-09-22
keywords: astro boilerplate,navigation
description: Automated and static navigation options in Astro Boilerplate.
bannerImage:
    src: /img/surface-accessories-700.webp
    alt: Dummy image
---

The file `/src/navigation.ts` can be used to control the navigation on the site.

## Automated links

By default, it simply uses the automatically generated navigation, which is based on pages and frontmatter:

```typescript
export const menu: (NavPage | 'auto')[] = [
	'auto'
];
```

## Manual links

Tou can replace this with manual defined links:

```typescript
export const menu: (NavPage | 'auto')[] = [
	{
		title: 'Section',
		url: '/section/',
		ariaCurrent: false,
		isOpen: false,
		order: 1,
		section: 'Section',
		children: [
			{
				title: 'Blog',
				url: '/section/blog/',
				ariaCurrent: false,
				isOpen: false,
				order: 1,
				section: '',
				children: []
			 },
			 {
				title: 'Publications',
				url: '/section/publications/',
				ariaCurrent: false,
				isOpen: false,
				order: 2,
				section: '',
				children: []
			 },
			 {
				title: 'About',
				url: '/section/about/',
				ariaCurrent: false,
				isOpen: false,
				order: 3,
				section: '',
				children: []
			 },
		]
 	},
];
```

## Manual and automated links

You can use both manual and automatic links (note the `'auto'` entry):

```typescript
export const menu: (NavPage | 'auto')[] = [
	'auto',
	{
		title: 'Section',
		url: '/section/',
		ariaCurrent: false,
		isOpen: false,
		order: 1,
		section: 'Section',
		children: [
			{
				title: 'Blog',
				url: '/section/blog/',
				ariaCurrent: false,
				isOpen: false,
				order: 1,
				section: '',
				children: []
			 },
			 {
				title: 'Publications',
				url: '/section/publications/',
				ariaCurrent: false,
				isOpen: false,
				order: 2,
				section: '',
				children: []
			 },
			 {
				title: 'About',
				url: '/section/about/',
				ariaCurrent: false,
				isOpen: false,
				order: 3,
				section: '',
				children: []
			 },
		]
 	},
];
```
