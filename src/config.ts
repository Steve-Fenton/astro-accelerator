export const SITE = {
	title: 'Astro Boilerplate',
	description: 'An Astro boilerplate.',
	defaultLanguage: 'en',
	themeColor: '#222255',
    owner: 'Steve Fenton',
	default: {
		lang: 'en',
		locale: 'en-GB',
		ogLocale: 'en_GB',
		dir: 'ltr'
	},
	search: {
		fallbackUrl: 'https://www.google.com/search',
		fallbackSite: 'q',
		fallbackQuery: 'q',
	},
	pageSize: 4,
	pageLinks: 5
};

export type Frontmatter = {
	title: string;
	pubDate: Date;
	keywords: string;
	description: string;
	layout: string;
	navTitle?: string;
	navSection?: string;
	navOrder?: number;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
	paged?: boolean;
};

// Default image for OG: Tags
export const OPEN_GRAPH = {
	image: {
		src: '/surface-accessories-700.webp',
		alt: 'Alt text for image goes here',
	}
};