export const SITE = {
	url: 'https://astro.stevefenton.co.uk',
	feedUrl: '/articles/feed.xml',
	title: 'Astro Accelerator',
	description: 'An Astro quick start project.',
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
	pageLinks: 5,
	rssLimit: 20,
	dateOptions: {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
	images: {
		contentSize: '(max-width: 860px) 100vw, 66vw',
		listerSize: '(max-width: 860px) 90vw, 350px'
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

type Mapped<T> = {
    [P in keyof T]?: any
}

export type Site = Mapped<typeof SITE>;

export type Frontmatter = {
	layout: string;
	title: string;
	keywords: string;
	description: string;
	pubDate: Date;
	modDate: Date;
	categories?: string[];
	tags?: string[];
	id?: string;
	authors?: string[];
	navTitle?: string;
	navSection?: string;
	navOrder?: number;
	bannerImage?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
	paged?: boolean;
	navSearch?: boolean;
	navSitemap?: boolean;
	navMenu?: boolean;
	redirect?: string;
};