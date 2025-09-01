/** @format */

import { toString } from 'mdast-util-to-string';

/**
 * Remark plugin for calculating reading time
 */
export function readingTime() {
    return function (tree, { data }) {
        const wordsPerMinute = 200;
        const textOnPage = toString(tree);
        const readingTime = Math.ceil(
            textOnPage.split(' ').length / wordsPerMinute
        );

        data.astro.frontmatter.readingTime = readingTime;
    };
}
