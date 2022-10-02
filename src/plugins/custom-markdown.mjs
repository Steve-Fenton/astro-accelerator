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

*/

export function getDestination(uri, s) {
  return uri.replace(/^\/img\//, '/i/' + s.toString() + '/');
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
          let uri = hast.properties.src;
          uri = uri.replace(/.jpg|.jpeg|.png/, '.webp');

          const imgFallback = hast.properties.src.replace(/^\/img\//, '/i/x/');

          const imgSmall = getDestination(uri, size.small);
          const imgMedium = getDestination(uri, size.medium);
          const imgLarge = getDestination(uri, size.large);

          hast.properties.src = imgFallback;
          hast.properties.srcset = `${imgSmall} ${size.small}w, ${imgMedium} ${size.medium}w, ${imgLarge}, ${size.large}w`;
          hast.properties.sizes = `(max-width: 860px) 100vw, 66vw`;
          hast.properties.class = (hast.properties.class ?? '' + ' resp-img').trim();
        }

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    })
  }
}