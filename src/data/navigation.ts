/** @format */

import type { MenuItem } from 'astro-accelerator-utils/types/NavPage';

export const menu: (MenuItem | 'auto')[] = ['auto'];

/*
* DEFAULT USAGE NOTES
* 
* Use the string 'auto' in the menu to automatically generate the navigation,
* or specify items individually to have full control. The simplest example is:

export const menu: (MenuItem | 'auto')[] = [
	'auto'
];

*/

/*
* CUSTOM USAGE NOTES
* 
* A more complex example would include items and child items. The ordering
* of automatic and manual entries is "merged", so you don't need to place 'auto'
* anywhere specific in this list. Set the order fields instead.

export const menu: (MenuItem | 'auto')[] = [
	'auto',
	{
		title: 'Section',
		url: '/section/',
		order: 1,
		section: 'Section',
		children: [
			{
				title: 'Blog',
				url: '/section/blog/',
				order: 1,
			 },
			 {
				title: 'Publications',
				url: '/section/publications/',
				order: 2,
			 },
			 {
				title: 'About',
				url: '/section/about/',
				order: 3,
			 },
		]
 	},
];

*/
