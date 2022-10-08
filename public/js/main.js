// @ts-check
import { addResizedEvent } from './modules/resizing.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { addIntersectionObserver, addListImageIntersectionObserver } from './modules/animation.js';
import { enhanceYoutubeLinks } from './modules/youtube.js';
import { enhanceCodeBlocks } from './modules/code-blocks.js';

const resizedEventName = addResizedEvent();

setClickableBlocks();
addStickyNavigation('.site-header', '.site-nav', '.site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '.site-nav', resizedEventName);
addIntersectionObserver('.post-list .list-item, main img, main .note, main blockquote');
addListImageIntersectionObserver('.post-list .list-item img');
enhanceYoutubeLinks();
enhanceCodeBlocks();
