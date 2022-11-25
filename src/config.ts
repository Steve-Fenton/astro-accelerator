import { Config } from 'astro-accelerator-utils';

const SITE = Config.getDefault();
SITE.owner = 'Steve Fenton';
SITE.url = 'https://astro.stevefenton.co.uk';
SITE.feedUrl = '/articles/feed.xml';
SITE.title= 'Astro Accelerator';
SITE.description = 'An Astro quick start project.';
SITE.themeColor = '#222255';
SITE.defaultLanguage = 'en';
SITE.default.locale = 'en-GB';
SITE.pageSize = 2; // Allows testing of paging

// Default image for OG: Tags
const OPEN_GRAPH = {
	image: {
		src: '/img/surface-accessories.png',
		alt: 'Alt text for image goes here',
	}
};

const HEADER_SCRIPTS = `
<!-- HEADER SCRIPTS -->
`.trim();

export { SITE, OPEN_GRAPH, HEADER_SCRIPTS }

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