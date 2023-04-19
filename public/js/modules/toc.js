// @ts-check

import { qsa } from './query.js';

let links = [];
let current = '';
const headings = [];
const highlightClass = 'highlight';

/**
 * Makes an entire block clickable based on a data-attribute, usually "data-destination"
 * 
 * Example: You have a list of blog posts, including featured images. If you make the title
 * clickable, clicks on the image won't open the blog. Adding links to the images means
 * keyboard users have to tab twice as much to get through the list.
 * 
 * Use clickable blocks to allow keyboard users to tab through the real links, but still
 * capture clicks elsewhere on the block.
 * 
 */
function highlightCurrentHeading(tocSelector) {
    links = qsa(tocSelector);

    links.forEach((link) => {
        const linkParts = link.href.split('#');
        if (linkParts.length === 2) {
            const id = linkParts[1];
            headings.push(document.getElementById(id));
        }
    });

    recheck();
}

function highlight(id) {
    links.forEach((link) => {
        link.classList.remove(highlightClass);

        if (link.href.indexOf(`#${id}`) > -1) {
            link.classList.add(highlightClass);
        }
    });
}

function recheck() {
    const docTop = Math.floor(document.documentElement.scrollTop);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    const validItems = [];

    headings.forEach((elem) => {
        
        const isValid = (docTop + vh) - elem.offsetTop > (vh / 3);
        if (isValid) {
            validItems.push(elem);
        }
    });

    const item = validItems.pop();

    if (item && item.id !== current) {
        console.log('Reading', item.id);
        current = item.id;
        highlight(item.id);
    }

    window.setTimeout(recheck, 1000);
}

export { highlightCurrentHeading };