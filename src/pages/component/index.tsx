import cn from "classnames";
// export interface HeadingProps {
//   className?: string;
//   isPageAnchor?: boolean;
//   children: React.ReactNode;
//   id?: string;
//   as?: any;
// }

export const H1 = ({ className, ...props }) => (
  <h1
    as="h1"
    className={cn(className, "text-5xl font-bold leading-tight")}
    {...props}
  />
);

const Strong = (strong: JSX.IntrinsicElements["strong"]) => (
  <strong className="font-bold" {...strong} />
);

export const MDXComponents = {
  h1: H1,
};
