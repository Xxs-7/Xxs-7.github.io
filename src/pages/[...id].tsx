import React from "react";
import remarkGfm from "remark-gfm";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

import { MDXComponents } from "@/components/MDX";
import remarkHeaderHash from "@/plugin/remark-header-hash.mjs";
import remarkToc from "@/plugin/remark-toc.mjs";
import { getAllPostPath } from "@/lib/posts";
import Layout from "@/components/Layout";

interface IPageProps {
  code: string;
  toc: any;
}

export default function Page({ code, toc }: IPageProps) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <Layout toc={toc}>
      <Component components={MDXComponents} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostPath();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const path = require("path");
  const fs = require("fs");
  const postsDirectory = path.join(process.cwd(), "src");
  const fullPath = path.join(postsDirectory);
  let fileContents;
  const toc: any = [];

  try {
    fileContents = fs.readFileSync(
      `${path.join(postsDirectory, ...params.id)}.mdx`,
      "utf8"
    );
  } catch {
    fileContents = fs.readFileSync(
      path.join(fullPath, ...params.id, "index.mdx"),
      "utf8"
    );
  }
  const result = await bundleMDX({
    source: fileContents,
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // myRemarkPlugin,
        remarkHeaderHash,
        remarkGfm,
        [
          remarkToc,
          {
            exportRef: toc,
          },
        ],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        // myRehypePlugin,
      ];

      return options;
    },
  });

  const { code, frontmatter } = result;

  return {
    props: {
      toc,
      code,
      // frontmatter,
    },
  };
}
