import type { Site } from "astro-accelerator-utils/types/Site";

const SITE: Site = {
	owner: 'Steve Fenton',
	url: 'https://astro.stevefenton.co.uk',
	useTrailingUrlSlash: true,
	captureStatistics: true,
	feedUrl: '/articles/feed.xml',
	title: 'Astro Accelerator',
	description: 'An Astro quick start project.',
	themeColor: '#222255',
	subfolder: '',
	defaultLanguage: 'en',
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
	pageLinks: 3,
	rssLimit: 20,
	dateOptions: {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	},
	cacheMaxAge: 200,
	featureFlags: {
		stickyNav: { top: 100 },
		codeBlocks: ['copy'],
		figures: ['enlarge'],
		youTubeLinks: ['embed'],
		headers: ['link'],
		details: ['tabs'],
		search: ['dialog','headings'],
	},
	images: {
		// Generated using https://ausi.github.io/respimagelint/
		contentSize: '(min-width: 1280px) 668px, (min-width: 880px) calc(72.11vw - 241px), calc(100vw - 64px)',
		listerSize: '(min-width: 1300px) 350px, (min-width: 880px) calc(34.25vw - 88px), (min-width: 700px) 50vw, calc(100vw - 32px)',
		authorSize: '50px',
	}
};

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