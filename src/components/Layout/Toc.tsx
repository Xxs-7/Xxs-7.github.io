import React, { useEffect, useState, useSyncExternalStore } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import _ from "lodash";

interface ITocProps {
  toc: any;
}
export default function Toc({ toc }: ITocProps) {
  const router = useRouter();
  const slash = decodeURI(router.asPath).split("#")[1];

  const [currentSlash, setCurrentSlash] = useState<string | undefined>(slash);
  if (!toc && !toc.length) {
    return null;
  }

  return (
    <ul className="text-sm">
      <li className="pl-2 text-base">{toc[0].text}</li>
      {toc?.slice(1).map(({ hash, text, depth }: any, index: number) => {
        // console.log("hash", hash);
        const isActive = hash.includes(currentSlash);
        console.log("isActive", isActive);
        return (
          <li
            key={hash}
            className={cn("border-l  hover:text-white ", {
              "border-slate-300/10": !isActive,
              "border-highlight": isActive,
              "pl-2": depth === 1,
              "pl-4": depth === 2,
              "pl-6": depth === 3,
              "text-xs": depth === 3,
            })}
          >
            <a
              href={hash}
              onClick={() => {
                setCurrentSlash(hash);
              }}
              className={classNames("block py-1", {
                "text-highlight": isActive,
              })}
            >
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
