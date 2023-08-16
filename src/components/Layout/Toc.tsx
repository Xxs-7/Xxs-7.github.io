import React, { useEffect, useState, useSyncExternalStore } from "react";
import cn from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import _ from "lodash";

function getHeaderAnchors(): HTMLAnchorElement[] {
  return Array.prototype.filter.call(
    document.getElementsByClassName("mdx-heading"),
    function (testElement) {
      return (
        testElement.nodeName === "H1" ||
        testElement.nodeName === "H2" ||
        testElement.nodeName === "H3"
      );
    }
  );
}

function getHeaderHighlight() {
  const headerAnchors = getHeaderAnchors();
  let index = 0;
  let headerLen = headerAnchors.length;
  const TOP_OFFSET = 56;

  while (index < headerLen) {
    const headerAnchor = headerAnchors[index];
    const { top } = headerAnchor.getBoundingClientRect();

    if (top >= TOP_OFFSET) {
      break;
    }

    index++;
  }

  return headerAnchors[index]?.id;
}

interface ITocProps {
  toc: any;
}
export default function Toc({ toc }: ITocProps) {
  const router = useRouter();
  const slash = decodeURI(router.asPath).split("#")[1];
  const [currentSlash, setCurrentSlash] = useState<string | undefined>();

  useEffect(() => {
    setCurrentSlash(`#${slash}`);
    const onScrollPage = _.throttle(() => {
      const currentHeaderID = getHeaderHighlight();
      setCurrentSlash(`#${currentHeaderID}`);
    }, 100);
    document.addEventListener("scroll", onScrollPage);

    return () => {
      document.removeEventListener("scroll", onScrollPage);
    };
  }, []);

  if (!toc && !toc.length) {
    return null;
  }

  return (
    <ul className="text-sm font-medium">
      <li className="pl-2 text-base">{toc[0].text}</li>
      {toc?.slice(1).map(({ hash, text, depth }: any, index: number) => {
        // console.log("hash", hash);
        const isActive = hash === currentSlash;
        return (
          <li
            key={hash}
            className={cn("border-l hover:text-hover", {
              "border-slate-900/10 dark:border-slate-300/10": !isActive,
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
