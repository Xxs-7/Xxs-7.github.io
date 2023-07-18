import React from "react";
import cn from "classnames";
import { Highlight, themes } from "prism-react-renderer";

const P = (p: JSX.IntrinsicElements["p"]) => (
  <p className="whitespace-pre-wrap my-2 " {...p} />
);

interface IHeadingProps {
  children: React.ReactNode;
  id?: string;
}

const HeadingIcon = () => {
  return (
    <svg width="12" height="12" fill="none" aria-hidden="true">
      <path
        d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>
    </svg>
  );
};

const H1 = ({ children, id }: IHeadingProps) => {
  console.log("H1", id);
  return (
    <h1
      className="inline-block mdx-heading text-3xl font-extrabold text-slate-900 my-4"
      id={id}
    >
      {children}
      <a href={`#${id}`} className="inline-block ml-2">
        <HeadingIcon />
      </a>
    </h1>
  );
};
const H2 = ({ children, id }: IHeadingProps) => {
  return (
    <h2
      className="mdx-heading text-2xl font-bold  whitespace-pre-wrap my-3"
      id={id}
    >
      {children}
      <a href={`#${id}`} className="inline-block">
        <HeadingIcon />
      </a>
    </h2>
  );
};
const H3 = ({ children, id }: IHeadingProps) => {
  return (
    <h3
      className="mdx-heading text-xl font-semibold whitespace-pre-wrap my-2"
      id={id}
    >
      {children}
      <a href={`#${id}`} className="inline-block">
        <HeadingIcon />
      </a>
    </h3>
  );
};

interface IInlineCode {
  children: React.ReactNode;
}
const InlineCode = ({ children }: IInlineCode) => {
  return (
    <code
      className={
        "inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-[rgba(135,131,120,0.15)] text-red-500 whitespace-pre-wrap"
      }
    >
      {children}
    </code>
  );
};

interface IBlockCode {
  children: string;
  className: string;
}

const BlockCode = ({ children, className }: IBlockCode) => {
  return (
    <React.Suspense
      fallback={
        <pre
          className={cn(
            "rounded-lg leading-6 h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg text-[13.6px] overflow-hidden"
          )}
        >
          <div className="py-[18px] pl-5 font-normal ">
            <p className="sp-pre-placeholder overflow-hidden">{children}</p>
          </div>
        </pre>
      }
    >
      <Highlight
        theme={themes.shadesOfPurple}
        code={children}
        language={className}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={style} className="rounded-md p-4 overflow-x-auto text-xs">
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token })}
                    className="whitespace-pre-wrap"
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </Highlight>
    </React.Suspense>
  );
};

const Code = ({ children, className }: JSX.IntrinsicElements["code"]) => {
  const languageMatch = /language-(\w+)/.exec(className || "");

  if (!languageMatch) {
    return <InlineCode children={children} />;
  }

  return (
    <BlockCode children={children as string} className={languageMatch[0]} />
  );
};

const OL = (p: JSX.IntrinsicElements["ol"]) => (
  <ol className="ml-6 my-3 list-decimal" {...p} />
);

const UL = (p: JSX.IntrinsicElements["ul"]) => (
  <ul className="ml-6 my-3 list-disc" {...p} />
);

const LI = (p: JSX.IntrinsicElements["li"]) => (
  <li className="leading-relaxed " {...p} />
);

const Blockquote = ({
  children,
  ...props
}: JSX.IntrinsicElements["blockquote"]) => {
  console.log("Blockquote", props);
  return (
    <blockquote
      className="border-l-2 border-current border-solid py-2 px-4 my-2 shadow-inner bg-[rgba(135,131,120,0.15)] dark:bg-highlight-dark bg-opacity-50 flex relative"
      {...props}
    >
      <span className="block relative">{children}</span>
    </blockquote>
  );
};

const Strong = (strong: JSX.IntrinsicElements["strong"]) => (
  <strong className="font-bold" {...strong} />
);

const Divider = () => (
  <hr className="my-6 block border-b border-border dark:border-border-dark" />
);

const Table = (p: JSX.IntrinsicElements["table"]) => {
  return <table className="border-collapse border-gray-300 border-2" {...p} />;
};

const Td = (p: JSX.IntrinsicElements["td"]) => {
  return <td className="border-gray-300 border-2 p-2" {...p} />;
};

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Blockquote,
  strong: Strong,
  code: Code,
  li: LI,
  ol: OL,
  ul: UL,
  hr: Divider,
  table: Table,
  td: Td,
  // pre: pre,
};
