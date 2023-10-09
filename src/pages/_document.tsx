/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from "react";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  //  @todo specify language in HTML?
  return (
    <Html lang="cn">
      <Head />
      <body className=" bg-light text-light-text dark:bg-dark dark:text-dark-text max-sm:text-sm">
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5PX24PZR11"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5PX24PZR11');
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
