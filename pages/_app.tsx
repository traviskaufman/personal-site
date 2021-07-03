import "normalize.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    color: rgb(32, 30, 32);
    font-family: "Open Sans", sans-serif;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Travis Kaufman"
        description="Front-end developer from New York City."
        canonical="https://traviskaufmancodes.com"
        openGraph={{
          title: "Travis Kaufman",
          images: [
            {
              url: "https://traviskaufmancodes.com/headshot.jpg",
            },
          ],
        }}
        twitter={{
          handle: "@traviskaufman",
          site: "https://traviskaufmancodes.com",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@1,100&family=Open+Sans:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
