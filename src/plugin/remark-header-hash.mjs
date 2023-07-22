import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";
import { slug } from "github-slugger";

const loader = () => {
  return (tree, file) => {
    visit(tree, "heading", (node) => {
      let text = toString(node.children[0]);
      if (node.children[1]) {
        text = node.children[1].value.match(/\/\*(.*?)\*\//)[1];
      }
      let hash = `#${slug(text)}`;
      console.log("hash", hash);

      const data = node.data || (node.data = {});
      const htmlAttributes = data.htmlAttributes || (data.htmlAttributes = {});
      const hProperties = data.hProperties || (data.hProperties = {});
      data.hash = hash;
      hProperties.hash = hash;
      htmlAttributes.hash = hash;
    });
  };
};

export default loader;
