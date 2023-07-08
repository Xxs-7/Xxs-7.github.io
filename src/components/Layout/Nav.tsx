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
    "block border-l pl-4 -ml-px  border-current font-semibold dark:text-sky-400 hover:bg-gray",
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
    <aside className="hidden lg:block h-screen sticky top-0 lg:bottom-0 w-[19.5rem] ">
      <div className="dark:bg-gray-600 rounded-md min-h-screen p-2 m-2 overflow-scroll">
        <nav>
          <ul>
            {routes.map((book) => (
              <li className="mt-12 lg:mt-8 " key={book.path}>
                <Book
                  title={book.title}
                  path={book.path}
                  files={book.routes}
                ></Book>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
