import { visit } from "unist-util-visit";
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";

const remarkToc = (options) => {
  return (tree) =>
    visit(tree, "heading", (node, index, parent) => {
      let text = toString(node.children[0]);
      if (node.children[1]) {
        text = node.children[1].value.match(/\/\*(.*?)\*\//)[1];
      }
      console.log("text", text);

      options.exportRef.push({
        text,
        hash: `#${slug(text)}`,
        depth: node.depth,
      });
    });
};

export default remarkToc;
