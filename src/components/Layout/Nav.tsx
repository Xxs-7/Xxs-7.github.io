import { useRouter } from "next/router";
import NextLink from "next/link";
import React from "react";
import cn from "classnames";
import routes from "@/config/dir.json";

interface INavLink {
  text: string;
  href: string;
  isActive?: boolean;
}
const NavLink = ({ text, href, isActive }: INavLink) => {
  const classes = cn(
    "block border-l pl-4 -ml-px border-current font-semibold dark:text-sky-400 hover:bg-gray",
    { "bg-sky-300": isActive }
  );
  return (
    <NextLink href={href} className={classes}>
      {text}
    </NextLink>
  );
};

interface IFile {
  path: string;
  title: string;
  date: string;
}

interface IBookProps {
  title: string;
  path: string;
  files: IFile[];
}
function Book({ title, path, files }: IBookProps) {
  return (
    <div>
      <div className="font-bold hover:">
        <a href={path}>{title}</a>
      </div>
      <ul className="">
        {files.map((file) => (
          <li key={file.path}>
            <NavLink href={file.path} text={file.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Nav() {
  const router = useRouter();
  const { asPath } = router;

  return (
    <nav>
      <ul className="mt-4">
        {routes.map((book) => (
          <li className="mt-1" key={book.path}>
            <div
              className={cn(
                "pl-1 border border-transparent rounded-sm font-bold hover:bg-gray-300",
                {
                  "text-blue-700": asPath === book.path,
                }
              )}
            >
              <NextLink href={book.path} className="block">
                {book.title}
              </NextLink>
            </div>
            <ul className="">
              {book.routes.map((file) => (
                <li
                  key={file.path}
                  className={cn(
                    "pl-4 border border-transparent rounded-sm hover:bg-gray-300",
                    {
                      "text-blue-700": asPath === file.path,
                    }
                  )}
                >
                  <NextLink href={file.path} className="block">
                    {file.title}
                  </NextLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
