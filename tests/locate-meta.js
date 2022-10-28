// @ts-check

export class Model {
    constructor(page) {
        this.page = page;
     }

    /**
     * Gets the site title
     * @returns {Locator}
     */
    robots() {
        return this.page.locator(
            'meta[name=robots]'
        );
    }
}