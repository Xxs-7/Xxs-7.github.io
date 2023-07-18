import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Nav from "./Nav";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <header className="w-full fixed t-0 h-14 border-b border-gray-500 bg-gray-700 z-10">
        顶部
      </header>
      <div className="pt-14 flex max-h-screen max-w-screen overflow-y-scroll">
        <nav className="hidden lg:block fixed top-14 lg:bottom-0 lg:h-screen w-[19.5rem] pb-10 px-4 overflow-y-auto min-h-screen z-10">
          <Nav />
        </nav>
        <main className="relative min-h-screen lg:ml-[19.5rem] min-w-0 flex-1 px-4 ">
          <article className="max-w-3xl mx-auto xl:max-w-none overflow-x-hidden xl:ml-0 xl:mr-[19.5rem]">
            {children}
          </article>
          {/* <aside className="hidden xl:block fixed top-14 right-0 w-[19.5rem] py-10 overflow-y-auto">
            侧边
          </aside> */}
        </main>
      </div>
    </>
  );
}
