import { qsa } from './query.js';

function setExternalLinkAttributes() {
    // Open external links in a new tab
    qsa('a[href^=http]').forEach((link) => {
        // Open external links in a new tab
        const destination = new URL(link.href);
        if (destination.hostname != window.location.hostname) {
            if (!link.target) {
                link.setAttribute('target', '_blank');
            }
            const rel = (link.rel) ? `${link.rel} noopener` : 'noopener';
            link.setAttribute('rel', rel);
        }
    });
}

export { setExternalLinkAttributes }