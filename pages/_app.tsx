import type { AppProps } from "next/app";
import Head from "next/head";
import "normalize.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #171717;
    color: white;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* TODO: SEO */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
