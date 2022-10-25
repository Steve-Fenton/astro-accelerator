import type { Locator } from "@playwright/test";

export class Model {
    constructor(page: any);
    page: any;

    robots(): Locator;
}
