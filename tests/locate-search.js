// @ts-check

export class Model {
    constructor(page) {
        this.page = page;
     }

    /**
     * Gets the search box
     * @returns {Locator}
     */
    searchBox() {
        return this.page.locator(
            '#site-search-query'
        );
    }

    /**
     * Gets the search results title
     * @returns {Locator}
     */
    searchResultsTitle() {
        return this.page.locator(
            '#site-search-results h2',
            { hasText: 'Results' }
        );
    }

    /**
     * Gets the search results list items
     * @returns {Locator}
     */
    searchResults() {
        return this.page.locator(
            '#site-search-results ol > li'
        );
    }
}