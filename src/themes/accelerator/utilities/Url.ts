import { SITE } from '@config';

export function addSlashToUrl (url: URL) {
    url.pathname += url.pathname.endsWith('/') ? '' : '/';
    return url;
}

export function addSlashToAddress (address: string | undefined) {
    if (!address) {
        address = '/';
    }

    if (address.indexOf('://') > -1) {
        return address;
    }

    const url = addSlashToUrl(new URL(address, SITE.url));
    return url.pathname + url.search;
}
