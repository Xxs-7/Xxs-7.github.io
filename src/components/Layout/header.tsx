import React from "react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

export default function Header() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between px-4">
      <div>厘清逻辑</div>
      <div className="mr-2 flex flex-row items-center justify-between gap-2 text-xl">
        <a
          href="https://github.com/Xxs-7/Xxs-7.github.io"
          className="p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5"
        >
          <AiFillGithub />
        </a>
        <button
          className="block dark:hidden p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5"
          type="button"
          aria-label="Use Dark Mode"
          onClick={() => {
            window.__setPreferredTheme("dark");
          }}
        >
          <MdDarkMode />
        </button>
        <button
          type="button"
          className="hidden dark:block p-1 rounded-full hover:bg-dark/5 hover:dark:bg-light/5"
          aria-label="Use Light Mode"
          onClick={() => {
            window.__setPreferredTheme("light");
          }}
        >
          <MdOutlineWbSunny />
        </button>
      </div>
    </div>
  );
}
