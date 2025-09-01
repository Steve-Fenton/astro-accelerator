/** @format */

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
    title() {
        return this.page.locator('.site-title');
    }

    /**
     * @returns {Locator}
     */
    authorImage() {
        return this.page.locator('.post-meta:not(.mini) img.author-image');
    }

    /**
     * @returns {Locator}
     */
    authorLink() {
        return this.page.locator('.post-meta:not(.mini) .author-info a');
    }

    /**
     * @returns {Locator}
     */
    pubDate() {
        return this.page.locator('.post-meta:not(.mini) time[itemprop="datePublished"]');
    }

    /**
     * @returns {Locator}
     */
    modDate() {
        return this.page.locator('.post-meta:not(.mini) time[itemprop="dateModified"]');
    }

    /**
     * @returns {Locator}
     */
    categories() {
        return this.page.locator('.post-cat li > a');
    }

    /**
     * @returns {Locator}
     */
    tags() {
        return this.page.locator('.post-tag li > a');
    }
}
