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
    <div className="flex max-h-screen max-w-screen">
      <div className="hidden lg:block sticky top-0 lg:bottom-0 lg:h-screen w-[19.5rem] min-h-screen ">
        <Nav />
      </div>
      <main className="min-h-screen min-w-0 flex-1 flex mx-auto px-4 sm:px-6 md:px-8 overflow-x-hidden overflow-y-scroll">
        {children}
      </main>
    </div>
  );
}
