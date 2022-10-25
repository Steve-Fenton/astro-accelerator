import type { Locator } from "@playwright/test";

export class Model {
    constructor(page: any);
    page: any;

    menu(): Locator;

    menuItem(text: string): Locator;

    breadcrumbs(): Locator;

    breadcrumb(text: string): Locator;

    pageLink(text: string): Locator;

    pageSpan(text: string): Locator;

    skipLinks(): Locator;

    tableOfContents(): Locator;

    backToTop(): Locator;
}
