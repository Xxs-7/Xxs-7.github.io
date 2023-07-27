import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Nav from "./Nav";
import Toc from "./Toc";
import Header from "./header";

interface ILayoutProps {
  toc: any;
  children: React.ReactNode;
}

export default function Layout({ toc, children }: ILayoutProps) {
  return (
    <>
      <header className="w-full fixed t-0 h-14 border-b backdrop-blur border-slate-900/10  dark:border-slate-300/10 z-10">
        <Header />
      </header>
      <div className="pt-14 flex max-w-screen overflow-y-scroll">
        <nav className="hidden lg:block fixed top-14 lg:bottom-0 lg:h-screen w-[18rem] pb-10 px-4 overflow-y-auto min-h-screen z-10">
          <Nav />
        </nav>
        <main className="relative lg:ml-[18rem] min-w-0 flex-1 px-4 ">
          <article className="mx-auto xl:max-w-none overflow-x-hidden xl:ml-0 xl:mr-[18rem]">
            {children}
          </article>
          {toc.length ? (
            <aside className="hidden xl:block fixed top-14 right-0 w-[18rem] py-6 overflow-y-auto">
              <Toc toc={toc} />
            </aside>
          ) : null}
        </main>
      </div>
    </>
  );
}
