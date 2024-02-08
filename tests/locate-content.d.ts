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
     * @returns {Locator}
     */
    title(): Locator;
    /**
     * @returns {Locator}
     */
    authorImage(): Locator;
    /**
     * @returns {Locator}
     */
    authorLink(): Locator;
    /**
     * @returns {Locator}
     */
    pubDate(): Locator;
    /**
     * @returns {Locator}
     */
    modDate(): Locator;
    /**
     * @returns {Locator}
     */
    categories(): Locator;
    /**
     * @returns {Locator}
     */
    tags(): Locator;
}
export type Locator = import("@playwright/test").Locator;
export type Page = import("@playwright/test").Page;
