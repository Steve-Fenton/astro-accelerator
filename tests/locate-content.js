// @ts-checl

export class Model {
    constructor(page) {
        this.page = page;
     }

    /**
     * Gets the site title
     * @returns {Locator}
     */
    title() {
        return this.page.locator(
            '.site-title'
        );
    }
}