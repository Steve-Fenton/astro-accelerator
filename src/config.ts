import type { Site } from 'astro-accelerator-utils';

export const SITE: Site = {
	url: 'https://astro.stevefenton.co.uk',
	subfolder: '',
	feedUrl: '/articles/feed.xml',
	title: 'Astro Accelerator',
	description: 'An Astro quick start project.',
	defaultLanguage: 'en',
	themeColor: '#222255',
	owner: 'Steve Fenton',
	default: {
		lang: 'en',
		locale: 'en-GB',
		dir: 'ltr'
	},
	search: {
		fallbackUrl: 'https://www.google.com/search',
		fallbackSite: 'q',
		fallbackQuery: 'q',
	},
	pageSize: 2,
	/*
	Refers to "pages in the middle" of the automatically generated links:
	- Prev
	- First Page
	- (A number of links, defined below)
	- Last Page
	- Next
	*/
	pageLinks: 3,
	rssLimit: 20,
	dateOptions: {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
	featureFlags: {
		codeBlocks: ['copy'],
		figures: ['enlarge'],
		youTubeLinks: ['embed'],
	},
	images: {
		contentSize: '(max-width: 860px) 100vw, 620px',
		listerSize: '(max-width: 860px) 90vw, 350px',
		authorSize: '50px',
	}
};

// Default image for OG: Tags
export const OPEN_GRAPH = {
	image: {
		src: '/img/surface-accessories.png',
		alt: 'Alt text for image goes here',
	}
};

export const HEADER_SCRIPTS = `
<!-- HEADER SCRIPTS -->
`.trim();

export type Frontmatter = {
	layout: string;
	title: string;
	subtitle?: string;
	pubDate: Date;
	modDate?: Date;
	tags?: string[];
	id?: string;
	authors?: string[];
	keywords?: string;
	description?: string;
	categories?: string[];
	navTitle?: string;
	navSection?: string;
	navOrder?: number;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	lang?: string;
	paged?: boolean;
	navSearch?: boolean;
	navSitemap?: boolean;
	navMenu?: boolean;
	robots?: string;
	redirect?: string;
};