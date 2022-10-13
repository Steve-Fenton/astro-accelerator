// @ts-check
import { addIntersectionObserver, addListImageIntersectionObserver } from './modules/animation.js';
import { addResizedEvent } from './modules/resizing.js';
import { addStickyNavigation } from './modules/nav-sticky.js';
import { addMobileNavigation } from './modules/nav-mobile.js';
import { setClickableBlocks } from './modules/click-blocks.js';
import { enhanceYoutubeLinks } from './modules/youtube.js';
import { enhanceCodeBlocks } from './modules/code-blocks.js';
import { enhanceFigures } from './modules/figures.js';

const resizedEventName = addResizedEvent();

setClickableBlocks();
addStickyNavigation('.site-header', '#site-nav', '#site-nav > ul', resizedEventName);
addMobileNavigation('.navigation-icon', '#site-nav', resizedEventName);
addIntersectionObserver('.anim-show-parent img, .anim-show-parent > *:not(h1, h2, h3, h4, h5, h6)');
addListImageIntersectionObserver('.post-list img');
enhanceYoutubeLinks();
enhanceCodeBlocks();
enhanceFigures();
