import type { Locator } from "@playwright/test";

export class Model {
    constructor(page: any);
    page: any;

    searchBox(): Locator;

    searchResultsTitle(): Locator;

    searchResults(): Locator;
}
