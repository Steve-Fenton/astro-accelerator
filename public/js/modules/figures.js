/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qs, qsa } from './query.js';

const activeClass = 'magnify-icon';

const icon = `<!--
version: "2.28"
unicode: "fb79"
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="none"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M12.597 17.981a9.467 9.467 0 0 1 -.597 .019c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.205 .342 -.415 .67 -.63 .983" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
</svg>
`;

/**
 * Enables opening image in new tab
 */
function enhanceFigures() {
    qsa(`figure > p > img, [data-image] > .image__img`).forEach(node => {
        const src = node.src;

        const magnify = document.createElement('button');

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
