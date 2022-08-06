import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeContextProvider } from "../ui/theme";
import AppLayout from "../ui/app-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
      </Head>

      <AppLayout>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>
      </AppLayout>
    </>
  );
}

export default MyApp;
