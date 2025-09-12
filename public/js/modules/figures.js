/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qs, qsa } from './query.js';

const activeClass = 'magnify-icon';

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path> <path d="M21 21l-6 -6"></path> </svg>`;

/**
 * Enables opening image in new tab
 */
function enhanceFigures() {
    qsa(`figure > p > img, [data-image] > .image__img`).forEach(node => {
        const src = node.src;

        const magnify = document.createElement('button');
        //magnify.classList.add(activeClass);
        magnify.innerHTML = icon;
        magnify.classList.add('magnify-button');
        magnify.title = 'Enlarge';

        const magnifyContainer = document.createElement('div');
        magnifyContainer.className = 'magnify-container';
        magnifyContainer.appendChild(magnify);

        node.insertAdjacentElement('beforebegin', magnifyContainer);

        magnify.addEventListener('click', async () => {
            window.open(src);
        });
    });
}

export { enhanceFigures };
