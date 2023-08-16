import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import React from "react";

// Font files can be colocated inside of `app`
const CustomeFont = localFont({
  src: [
    {
      path: "./../styles/font/LXGWWenKai-Light.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./../styles/font/LXGWWenKai-Bold.ttf",
      style: "normal",
      weight: "700",
    },
  ],
});

// If loading a variable font, you don't need to specify the font weight

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={CustomeFont.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
