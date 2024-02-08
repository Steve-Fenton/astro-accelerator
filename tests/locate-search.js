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
     * Gets the search box
     * @returns {Locator}
     */
    searchBox() {
        return this.page.locator(
            'input.site-search-query'
        );
    }

    /**
     * Gets the search results title
     * @returns {Locator}
     */
    searchResultsTitle() {
        return this.page.locator(
            '[data-site-search-results] h2',
            { hasText: 'Results' }
        );
    }

    /**
     * Gets the search results list items
     * @returns {Locator}
     */
    searchResults() {
        return this.page.locator(
            'a.result-wrapper'
        );
    }
}