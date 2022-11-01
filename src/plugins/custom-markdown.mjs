import { SITE } from '../config';
import { h } from 'hastscript';
import { visit } from 'unist-util-visit';
import { size } from './image-size.mjs';

/* Based on https://github.com/remarkjs/remark-directive
* Examples:

## Inline

This is an inline :abbr[I18n]{ title="Internationalization" } element

## Images

:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }

## Block

:::div{.note}
This is a custom div element with the class `note`
:::

## Combinations
:::figure
:img{ src="/img/frankenstein.png" alt="Book cover" loading="lazy" }
::figcaption[The modern hardback edition of Frankenstein]
:::

*/

export function getDestination(uri, s) {
  const fromRegEx = new RegExp('^' + SITE.subfolder + '/img/');
  const replacement = SITE.subfolder + '/i/' + s.toString() + '/';
  return uri.replace(fromRegEx, replacement);
}

export function getImageInfo(src, className, sizes) {
  const info = {};

  let uri = src;
  uri = uri.replace(/.jpg|.jpeg|.png/, '.webp');

  const imgFallback = getDestination(src, 'x');

  const imgSmall = getDestination(uri, size.small);
  const imgMedium = getDestination(uri, size.medium);
  const imgLarge = getDestination(uri, size.large);

  info.src = imgFallback;
  info.srcset = `${imgSmall} ${size.small}w, ${imgMedium} ${size.medium}w, ${imgLarge}`;
  info.sizes = sizes;
  info.class = (className ?? '' + ' resp-img').trim();

  return info;
}

/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function attributeMarkdown() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes);

        if (hast.properties.src) {
          const info = getImageInfo(hast.properties.src, hast.properties.class, SITE.images.contentSize);

          hast.properties.src = info.src;
          hast.properties.srcset = info.srcset;
          hast.properties.sizes = info.sizes;
          hast.properties.class = info.class;
        }

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    })
  }
}