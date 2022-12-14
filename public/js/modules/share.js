import { qs, qsa } from './query.js';

function handleClick() {

    const title = this.dataset.sharetitle ?? qs('meta[property="og:title"]').content;
    const text = this.dataset.sharetext ?? qs('meta[property="og:description"]').content;
    const url = this.dataset.shareurl ?? document.location;

    const share = {
        title: title,
        text: text,
        url: url
    };

    navigator.share(share);
}

function enableSharing() {
    qsa('[data-share]').forEach((elem) => {
        elem.addEventListener('click', handleClick);
    });
}

export { enableSharing }