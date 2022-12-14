import type { NavPage } from 'astro-accelerator-utils/types/NavPage';

export const menu: (NavPage | 'categories' | 'tags' | 'toptags')[] = [
	'categories',
	'tags',
	{
		title: 'Quick Links',
		url: '',
		ariaCurrent: false,
		isOpen: false,
		order: 1,
		children: [{
			title: 'Steve Fenton',
			url: 'https://www.stevefenton.co.uk/',
			ariaCurrent: false,
			isOpen: false,
			order: 1,
			children: []
		},{
			title: 'Astro',
			url: 'https://astro.build',
			ariaCurrent: false,
			isOpen: false,
			order: 1,
			children: []
		},{
			title: 'GitHub',
			url: 'https://github.com/Steve-Fenton/astro-accelerator',
			ariaCurrent: false,
			isOpen: false,
			order: 1,
			children: []
		}]
}];

/*
See navigation.ts
Allows customisation of the footer navigation

'categories' -> Auto columns of links for categories
'tags' -> Auto columns of links for tags

*/