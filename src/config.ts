export const SITE = {
	title: 'Astro Boilerplate',
	description: 'An Astro boilerplate.',
	defaultLanguage: 'en',
	themeColor: '#333',
    owner: 'Steve Fenton',
	search: {
		fallbackUrl: 'https://www.google.com/search',
		fallbackSite: 'q',
		fallbackQuery: 'q',
	},
};

export type Frontmatter = {
	title: string;
	navTitle: string;
	navSection: string;
	navOrder: number;
	date: Date;
	keywords: string;
	description: string;
	layout: string;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;

export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const OPEN_GRAPH = {
	image: {
		src: 'surface-accessories-700.webp',
		alt: 'Alt text for image goes here',
	}
};