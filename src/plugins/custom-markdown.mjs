import { h } from 'hastscript';
import { visit } from 'unist-util-visit'

// This plugin is an example to turn `::note` into divs, passing arbitrary
// attributes.
/** @type {import('unified').Plugin<[], import('mdast').Root>} */
export function customMarkdown() {
    return (tree) => {
      visit(tree, (node) => {
        if (
          node.type === 'textDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'containerDirective'
        ) {
          if (node.name !== 'note') {
            return;
          }
  
          const data = node.data || (node.data = {})
          const tagName = node.type === 'textDirective' ? 'span' : 'div'
  
          data.hName = tagName
          data.hProperties = h(tagName, node.attributes).properties
        }
      })
    }
  }