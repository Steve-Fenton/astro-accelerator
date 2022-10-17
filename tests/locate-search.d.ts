export class Model {
    constructor(page: any);
    page: any;
    /**
     * Gets the search box
     * @returns {Locator}
     */
    searchBox(): Locator;
    /**
     * Gets the search results title
     * @returns {Locator}
     */
    searchResultsTitle(): Locator;
    /**
     * Gets the search results list items
     * @returns {Locator}
     */
    searchResults(): Locator;
}
