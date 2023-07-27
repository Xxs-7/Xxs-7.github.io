import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import routes from "@/config/dir.json";
import classNames from "classnames";

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
                  "pl-1 border border-transparent rounded-sm font-bold hover:bg-hover text-lg",
                  {
                    "text-highlight": asPath === `posts/${book.path}`,
                  }
                )}
              >
                <NextLink href={`posts/${book.path}`} className="block">
                  {book.title}
                </NextLink>
              </div>
              <ul>
                {book.routes.map((file) => (
                  <li
                    key={file.path}
                    className={classNames(
                      "pl-2 border border-transparent rounded-sm hover:bg-hover text-sm py-1",
                      {
                        "text-highlight": asPath.includes(`posts/${file.path}`),
                      }
                    )}
                  >
                    <NextLink href={`posts/${file.path}`} className="block">
                      {file.title}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </React.Suspense>
      </ul>
    </nav>
  );
}
