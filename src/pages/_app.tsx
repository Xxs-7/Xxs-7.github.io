import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import React from "react";

import "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Regular/result.css";
import "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Bold/result.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
