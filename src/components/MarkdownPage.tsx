import { useRouter } from "next/router";
import React from "react";

interface IPageProps {
  children: React.ReactNode;
}

export default function MarkdownPage({ children }: IPageProps) {
  const { asPath } = useRouter();

  return (
    <React.Suspense fallback={null}>
      {/* <div className="lg:hidden h-16 mb-2" /> */}
      <article key={asPath}>{children}</article>

      {/* <div className="bg-[#FBC03E] hidden xl:block w-[19.5rem] py-10 overflow-y-auto  min-h-screen">
        摘要
      </div> */}
    </React.Suspense>
  );
}
