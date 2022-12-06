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
     * @returns {Locator}
     */
    robots() {
        return this.page.locator(
            'meta[name=robots]'
        );
    }
}