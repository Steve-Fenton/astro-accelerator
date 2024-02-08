/**
 * @typedef { import("@playwright/test").Locator } Locator
 * @typedef { import("@playwright/test").Page } Page
 */
export class Model {
    /**
     * @param {Page} page
     */
    constructor(page: Page);
    page: import("@playwright/test").Page;
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
export type Locator = import("@playwright/test").Locator;
export type Page = import("@playwright/test").Page;
