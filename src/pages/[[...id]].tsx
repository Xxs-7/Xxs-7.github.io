import React from "react";
import remarkGfm from "remark-gfm";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXComponents } from "@/components/MDX";
import remarkHeaderHash from "@/plugin/remark-header-hash.mjs";
import remarkToc from "@/plugin/remark-toc.mjs";
import { getAllPostPath } from "@/lib/posts";
import Layout from "@/components/Layout";
import classNames from "classnames";
import Toc from "@/components/Layout/Toc";

interface IPageProps {
  code: string;
  toc: any;
}

export default function Page({ code, toc }: IPageProps) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <article
        className={classNames(
          "mx-auto xl:max-w-none overflow-x-hidden xl:ml-0",
          { "xl:mr-[18rem]": toc?.length }
        )}
      >
        <Component components={MDXComponents} />
      </article>
      {toc?.length ? (
        <aside className="hidden xl:block fixed top-14 right-0 w-[18rem] py-6 overflow-y-auto">
          <Toc toc={toc} />
        </aside>
      ) : null}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostPath();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const path = require("path");
  const fs = require("fs");
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  let fileContents;
  const toc: any = [];
  let dir = params.id ? params.id : [];
  try {
    fileContents = fs.readFileSync(
      `${path.join(postsDirectory, ...dir)}.mdx`,
      "utf8"
    );
  } catch {
    fileContents = fs.readFileSync(
      path.join(postsDirectory, ...dir, "index.mdx"),
      "utf8"
    );
  }

  // undefined index.mdx
  // css/unit css/unit.mdx
  // css      css/index.mdx
  const result = await bundleMDX({
    source: fileContents,
    cwd: path.join(process.cwd(), "src", "demo"),
    mdxOptions: (options, frontmatter) => {
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
