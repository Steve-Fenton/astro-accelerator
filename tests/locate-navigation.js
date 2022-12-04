// @ts-check

/**
 * @typedef { import("@playwright/test").Locator } Locator
 * @typedef { import("@playwright/test").Page } Page
 */

export class Model {
    /**
     * @param {Page} page 
     */
    constructor(page) {
        this.page = page;
     }

     /**
      * Gets the main menu nav
      * @returns {Locator}
      */
     menu() {
        return this.page.locator(
            '.site-nav'
        );
     }

     /**
      * Gets a main navigation link with matching text
      * @param {string} text 
      * @returns {Locator}
      */
    menuItem(text) {
        return this.page.locator(
            '#site-nav a',
            { hasText: text }
        );
    }

    /**
     * Gets breadcrumbs nav
     * @returns {Locator}
     */
    breadcrumbs() {
        return this.page.locator(
            '.site-breadcrumbs'
        );
    }

    /**
     * Gets a breadcrumb link with matching text
     * @param {string} text 
     * @returns {Locator}
     */
    breadcrumb(text) {
        return this.page.locator(
            '.site-breadcrumbs a',
            { hasText: text }
        );
    }

    /**
     * Gets a paging link with matching text
     * @param {string} text 
     * @returns {Locator}
     */
    pageLink(text) {
        return this.page.locator(
            '.post-paging a',
            { hasText: text }
        );
    }

    /**
     * Gets a paging span with matching text
     * @param {string} text 
     * @returns {Locator}
     */
    pageSpan(text) {
        return this.page.locator(
            '.post-paging span',
            { hasText: text }
        );
    }

    /**
     * Gets the skiplinks nav
     * @returns {Locator}
     */
    skipLinks() {
        return this.page.locator(
            '.skip-links'
        );
    }

    /**
     * Gets table of contents nav
     * @returns {Locator}
     */
    tableOfContents() {
        return this.page.locator(
            '.page-toc'
        );
    }

    /**
     * Gets back to top nav
     * @returns {Locator}
     */
    backToTop() {
        return this.page.locator(
            '.site-footer nav'
        );
    }
}