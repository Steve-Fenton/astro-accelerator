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
     * Gets the main menu nav
     * @returns {Locator}
     */
    menu(): Locator;
    /**
     * Gets a main navigation link with matching text
     * @param {string} text
     * @returns {Locator}
     */
    menuItem(text: string): Locator;
    /**
     * Gets breadcrumbs nav
     * @returns {Locator}
     */
    breadcrumbs(): Locator;
    /**
     * Gets a breadcrumb link with matching text
     * @param {string} text
     * @returns {Locator}
     */
    breadcrumb(text: string): Locator;
    /**
     * Gets a paging link with matching text
     * @param {string} text
     * @returns {Locator}
     */
    pageLink(text: string): Locator;
    /**
     * Gets a paging span with matching text
     * @param {string} text
     * @returns {Locator}
     */
    pageSpan(text: string): Locator;
    /**
     * Gets the skiplinks nav
     * @returns {Locator}
     */
    skipLinks(): Locator;
    /**
     * Gets table of contents nav
     * @returns {Locator}
     */
    tableOfContents(): Locator;
    /**
     * Gets back to top nav
     * @returns {Locator}
     */
    backToTop(): Locator;
}
export type Locator = import("@playwright/test").Locator;
export type Page = import("@playwright/test").Page;
