/**
 * This javascript file comes from Astro Accelerator
 * Edits will be overwritten if you change the file locally
 *
 * @format
 */

// @ts-check

import { qs, qsa } from './query.js';
import { removeScroll, resetScroll } from './scrollbar.js';
import { getFocusableElement, trapFocusForward, trapReverseFocus } from './focus.js';

/**
 * Provides an overlay with the navigation for mobile users.
 *
 * Example: You have site navigation on the page, but demote it (closer to the footer) on mobile to avoid
 * the content being pushed below the fold. You provide an icon that bookmarks to the
 * navigation.
 *
 * The mobile navigation intercepts the bookmark link and opens the navigation in a modal
 * overlay, trapping keyboard focus until the overlay is closed.
 *
 * @param {string} resizedEventName
 */
function addMobileNav(resizedEventName) {
    const icons = qsa('[data-navigation-id]');
    for (let icon of icons) {
        addMobileNavigation(icon, resizedEventName);
    }

    const details = qsa('[data-openon]');
    for (let detail of details) {
        const minWidth = parseInt(detail.dataset.openon, 10);
        const width = window.innerWidth;
        if (width > minWidth) {
            detail.setAttribute('open', 'open');
        }
    }
}

/**
 * @param {HTMLElement} icon
 * @param {string} resizedEventName
 */
function addMobileNavigation(icon, resizedEventName) {
    const navigationSelector = icon.getAttribute('data-navigation-id') || '';
    const iconType = icon.firstElementChild && icon.firstElementChild.tagName == 'svg' ? 'svg' : 'element';

    const originalIcon = icon.innerHTML;
    const overlay = document.createElement('div');
    const dataOpen = 'data-open';

    icon.setAttribute('aria-expanded', 'false');
    icon.setAttribute('aria-controls', navigationSelector);

    // Focus trap (forwards the tab / shift-tab back to the menu)
    icon.addEventListener('keydown', function (e) {
        if (icon.getAttribute(dataOpen) === dataOpen) {
            var focusElements = getFocusableElement(overlay);
            trapFocusForward(e, focusElements.first);
            trapReverseFocus(e, focusElements.last);
        }
    });

    // Close menu on escape-key press
    document.addEventListener('keydown', function (e) {
        if (icon.getAttribute(dataOpen) === dataOpen) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        }
    });

    // Opens and closes menu
    function handleIconInteraction() {
        if (icon.dataset.open == dataOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    function openMobileMenu() {
        removeScroll();

        const menuElement = qs('#' + navigationSelector);

        overlay.innerHTML = menuElement.outerHTML;
        overlay.className = 'overlay overlay-menu';
        overlay.style.display = 'block';
        menuElement.style.display = 'none';

        qsa('[id]', overlay).forEach(elem => {
            elem.id = 'overlay__' + elem.id;
        });

        // Modal Accessibility
        const title = menuElement.getAttribute('aria-label') ?? '';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', title);

        // Trap Focus to Visible Overlay
        const focusElements = getFocusableElement(overlay);

        focusElements.first.addEventListener('keydown', function (e) {
            trapReverseFocus(e, icon);
        });
        focusElements.last.addEventListener('keydown', function (e) {
            trapFocusForward(e, icon);
        });

        if (iconType === 'svg') {
            icon.innerHTML = `
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
                </svg>
`;
        }

        document.body.appendChild(overlay);
        icon.setAttribute(dataOpen, dataOpen);
        icon.setAttribute('aria-expanded', 'true');
        focusElements.first.focus();
    }

    function closeMobileMenu() {
        const menuElement = qs('#' + navigationSelector);
        menuElement.style.display = '';
        resetScroll();

        if (icon.getAttribute(dataOpen) === dataOpen) {
            overlay.innerHTML = '';
            overlay.style.display = 'none';
            document.body.removeChild(overlay);
        }

        icon.innerHTML = originalIcon;
        icon.removeAttribute(dataOpen);
        icon.setAttribute('aria-expanded', 'false');
    }

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        handleIconInteraction();
        return false;
    });

    document.addEventListener(resizedEventName, function (/** @type {any} */ e) {
        if (e.detail.change.width > 0) {
            closeMobileMenu();
        }
    });
}

export { addMobileNav };
