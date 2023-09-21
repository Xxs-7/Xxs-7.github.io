import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import routes from "@/config/dir.json";
import classNames from "classnames";
import path from "path";

export default function Nav() {
  const router = useRouter();
  const { asPath } = router;

  return (
    <nav>
      <ul className="mt-6">
        <React.Suspense fallback={null}>
          {routes.map((book) => (
            <li className="mt-1" key={book.path}>
              <div
                className={classNames(
                  "pl-1 border border-transparent rounded-sm font-bold text-lg",
                  //  hover:bg-dark/5  hover:dark:bg-light/5
                  {
                    "text-highlight": asPath === `${book.path}`,
                  }
                )}
              >
                {/* <NextLink href={`${book.path}`} className="block"> */}
                {book.title}
                {/* </NextLink> */}
              </div>
              <ul>
                {book.routes.map((file) => {
                  const linkPath = path.join(book.path, file.path);
                  return (
                    <li
                      key={linkPath}
                      className={classNames(
                        "pl-4 border border-transparent rounded-sm font-bold hover:bg-dark/5 text-sm py-0.5 hover:dark:bg-light/5",
                        {
                          "text-highlight": asPath.includes(linkPath),
                        }
                      )}
                    >
                      <NextLink href={linkPath} className="block">
                        {file.title}
                      </NextLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </React.Suspense>
      </ul>
    </nav>
  );
}
