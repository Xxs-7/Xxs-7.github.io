import React from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface ITocProps {
  toc: any;
}
export default function Toc({ toc }: ITocProps) {
  const router = useRouter();
  console.log(router);

  return (
    <ul className="">
      <li>{"导航"}</li>
      {toc?.slice(1).map(({ hash, text, depth }: any, index: number) => {
        return (
          <li
            key={hash}
            className={cn(
              "border border-transparent rounded-sm hover:bg-gray-300",
              {
                // "text-blue-700": url === file.path,
                "pl-2": depth === 2,
                "pl-4": depth === 3,
              }
            )}
          >
            <NextLink
              href={hash}
              className={classNames("block", {
                "text-blue-700": router.asPath,
              })}
            >
              {text}
            </NextLink>
          </li>
        );
      })}
    </ul>
  );
}
