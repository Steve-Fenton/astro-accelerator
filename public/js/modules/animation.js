/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qsa } from './query.js';

/**
 * Assists animation by setting "--shown" CSS property
 *
 * As an item enters/exits the viewport, --shown moves from 0..1
 * This allows CSS transitions and calculated properties to animate elements
 *
 * Example
 *     transition: all 0.2s ease-in;
 *     scale: calc(0.75 + (var(--shown, 1) * 0.25));
 *
 * @param {string} listItemQuery
 */
function addIntersectionObserver(listItemQuery) {
    function handleIntersection(entries, observer) {
        for (let entry of entries) {
            const value = entry.isIntersecting ? entry.intersectionRatio : 0;
            entry.target.style.setProperty('--shown', value);
        }
    }

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: thresholds,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    qsa(listItemQuery).forEach(elem => observer.observe(elem));
}

/**
 * Assists animation by setting "--shown" CSS property
 *
 * As an item enters/exits the viewport, --img-shown moves from 0..1
 * This allows CSS transitions and calculated properties to animate elements
 *
 * Example
 *     transition: all 0.2s ease-in;
 *     scale: calc(0.75 + (var(--shown, 1) * 0.25));
 *
 * @param {string} imgItemQuery
 */
function addListImageIntersectionObserver(imgItemQuery) {
    function handleIntersection(entries, observer) {
        for (let entry of entries) {
            const value = entry.isIntersecting ? entry.intersectionRatio : 0;
            entry.target.style.setProperty('--img-shown', value);
        }
    }

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: thresholds,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    qsa(imgItemQuery).forEach(elem => observer.observe(elem));
}

export { addIntersectionObserver, addListImageIntersectionObserver };
