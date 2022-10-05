// @ts-check

import { qsa } from './modules/query.js';
import { addResizedEvent } from './modules/resizing.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { addIntersectionObserver } from './modules/animation.js';
import { enhanceYoutubeLinks } from './modules/youtube.js';

const resizedEventName = addResizedEvent();

setClickableBlocks();
addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '.site-nav', resizedEventName);
addIntersectionObserver('.post-list .list-item, main img, main .note, main blockquote');
enhanceYoutubeLinks();

// Make code blocks focusable, so they can be keyboard scrolled
qsa('pre.astro-code').forEach((elem) => elem.setAttribute('tabindex', '0'));

// Open external links in a new tab
qsa('a[href^=http]').forEach((link) => {
    // Open external links in a new tab
    const destination = new URL(link.href);
    if (destination.hostname != window.location.hostname) {
        link.setAttribute('target', '_blank');
    }
});