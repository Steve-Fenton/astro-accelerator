import type { NavPage } from '@utilities/NavigationTypes';

export const menu: (NavPage | 'auto')[] = [
	'auto'
];

/*
* DEFAULT USAGE NOTES
* 
* Use the string 'auto' in the menu to automatically generate the navigation,
* or specify items individually to have full control. The simplest example is:

export const menu: (NavPage | 'auto')[] = [
	'auto'
];

*/

/*
* CUSTOM USAGE NOTES
* 
* A more complex example would include items and child items. The ordering
* of automatic and manual entries is "merged", so you don't need to place 'auto'
* anywhere specific in this list. Set the order fields instead.

export const menu: (NavPage | 'auto')[] = [
	'auto',
	{
		title: 'Steve Fenton',
		url: 'https://www.stevefenton.co.uk/',
		ariaCurrent: false,
		isOpen: false,
		order: 1,
		section: 'Steve Fenton',
		children: [
			{
				title: 'Blog',
				url: 'https://www.stevefenton.co.uk/blog/',
				ariaCurrent: false,
				isOpen: false,
				order: 1,
				section: '',
				children: []
			 },
			 {
				title: 'Publications',
				url: 'https://www.stevefenton.co.uk/publications/',
				ariaCurrent: false,
				isOpen: false,
				order: 2,
				section: '',
				children: []
			 },
			 {
				title: 'About',
				url: 'https://www.stevefenton.co.uk/about-me/',
				ariaCurrent: false,
				isOpen: false,
				order: 3,
				section: '',
				children: []
			 },
		]
 	},
];

*/