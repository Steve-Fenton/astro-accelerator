/** @format */

import { test, expect } from '@playwright/test';

function getLinks(): string[] {
    return [
        ...(document.querySelectorAll(
            '.site-nav a'
        ) satisfies NodeListOf<HTMLAnchorElement>),
    ].map((a) => a.href);
}

function getIssues() {
    const getSelector = function (el: HTMLElement | null): string {
        if (el == null) {
            return '';
        }

        if (el.tagName.toLowerCase() == 'html') {
            return 'HTML';
        }

        let selector = el.tagName;
        selector += el.id ? '#' + el.id : '';

        if (el.className) {
            const classes = el.className.split(/\s/);
            for (let i = 0; i < classes.length; i++) {
                selector += '.' + classes[i];
            }
        }
        return getSelector(el.parentElement) + ' > ' + selector;
    };

    const issues: string[] = [];

    function warn(el: HTMLElement) {
        // Style the detected issues
        el.style.outline = '2px solid #FFCC00';
        el.style.backgroundColor = '#FFCC00';
        el.style.backgroundImage =
            'linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(255,204,0,1) 35%, rgba(0,212,255,1) 100%)';
    }

    function checkScrollingAncestor(elem: HTMLElement): boolean {
        if (
            !elem.parentElement ||
            elem.parentElement.tagName.toLowerCase() === 'body'
        ) {
            return false;
        }

        const computedStyle = window.getComputedStyle(elem.parentElement);

        if (computedStyle.overflowX == 'auto') {
            return true;
        } else {
            return checkScrollingAncestor(elem.parentElement);
        }
    }

    function getSizedAncestor(elem: HTMLElement): HTMLElement | null {
        if (!elem.parentElement) {
            return null;
        }

        if (elem.parentElement.offsetWidth > 0) {
            return elem.parentElement;
        } else {
            return getSizedAncestor(elem.parentElement);
        }
    }

    function checkElement(el: Element) {
        const elem = el as HTMLElement;
        const hasScrollingAncestor = checkScrollingAncestor(elem);
        if (hasScrollingAncestor) {
            return;
        }

        const isHidden = elem.offsetParent === null;
        if (isHidden) {
            return;
        }

        // Find elements that overflow the document width
        if (elem.offsetWidth > document.documentElement.offsetWidth) {
            warn(elem);
            issues.push(
                `${elem.offsetWidth}>${
                    document.documentElement.offsetWidth
                } (Document) ${getSelector(elem)}`
            );
        }

        const ancestor = getSizedAncestor(elem);
        const info = window.getComputedStyle(elem);

        // Find any negative margins (deliberate outflow)
        const adjustment =
            (info.marginLeft.startsWith('-')
                ? parseFloat(info.marginLeft) * -1
                : 0) +
            (info.marginRight.startsWith('-')
                ? parseFloat(info.marginRight) * -1
                : 0);

        if (ancestor && elem.offsetWidth - adjustment > ancestor.offsetWidth) {
            warn(elem);
            issues.push(
                `Document: ${window.innerWidth} Element: ${
                    elem.offsetWidth - adjustment
                }>${ancestor.offsetWidth} (Ancestor) ${getSelector(
                    elem
                )} Style: ${info.getPropertyValue('display')}`
            );
        }
    }

    document.querySelectorAll('*').forEach(checkElement);

    return issues;
}

/**
 * If this fails, use the script at:
 * https://www.stevefenton.co.uk/blog/2022/12/detect-overflowing-elements/
 */
test('Test pages for layout issues', async ({ page }) => {
    await page.goto('/');
    const links = await page.evaluate(getLinks);
    await page.setViewportSize({ width: 393, height: 851 });

    for (let link of links) {
        await page.goto(link);
        const issues = await page.evaluate(getIssues);
        if (issues.length > 0) {
            console.log(link, issues);
        }

        expect(issues.length).toBe(0);
    }

    console.log('Layout checked', links.length);
});
