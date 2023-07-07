const P = (p: JSX.IntrinsicElements["p"]) => (
  <p className="whitespace-pre-wrap my-2 " {...p} />
);
const Code = (p: JSX.IntrinsicElements["div"]) => (
  <div className="whitespace-pre-wrap my-2" {...p} />
);

export const MDXComponents = {
  p: P,
  // code: Code,
};
