import { getAllPostPath } from "@/lib/posts";
import React from "react";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/components/MDX";

interface IPageProps {
  code: string;
}

export default function Page({ code }: IPageProps) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="flex-1 overflow-x-hidden">
      {/* <header> */}
      {/* <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p> */}
      {/* </header> */}
      {/* <main> */}
      <Component components={MDXComponents} />
      {/* </main> */}
    </div>
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
  const postsDirectory = path.join(process.cwd(), "posts");
  const fullPath = path.join(postsDirectory, `${path.join(...params.id)}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const result = await bundleMDX({
    source: fileContents,
  });
  const { code, frontmatter } = result;

  return {
    props: {
      code,
      // frontmatter,
    },
  };
}
