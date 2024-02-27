/** @format */

import type { MenuItem } from 'astro-accelerator-utils/types/NavPage';

export const menu: (MenuItem | 'categories' | 'tags' | 'toptags')[] = [
    'categories',
    'tags',
    {
        title: 'Quick Links',
        order: 1,
        children: [
            {
                title: 'Steve Fenton',
                url: 'https://www.stevefenton.co.uk/',
                order: 1,
            },
            {
                title: 'Astro',
                url: 'https://astro.build',
                order: 1,
            },
            {
                title: 'GitHub',
                url: 'https://github.com/Steve-Fenton/astro-accelerator',
                order: 1,
            },
        ],
    },
];

/*
See navigation.ts
Allows customisation of the footer navigation

'categories' -> Auto columns of links for categories
'tags' -> Auto columns of links for tags

*/
