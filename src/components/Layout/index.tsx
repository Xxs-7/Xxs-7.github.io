import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "./Nav";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="min-h-screen flex max-w-screen dark:bg-gray-800 text-white">
      <Nav />
      <main className="min-h-screen min-w-0 flex-1 flex mx-auto px-4 sm:px-6 md:px-8 overflow-x-hidden overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
