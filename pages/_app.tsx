import "normalize.css";
import "./globalStyles.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travis Kaufman</title>
        <meta name="googlebot" content="index,follow" />
        <meta name="robots" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://traviskaufmancodes.com" />
        <meta name="twitter:creator" content="@traviskaufman" />
        <meta property="og:title" content="Travis Kaufman" />
        <meta property="og:url" content="https://traviskaufmancodes.com" />
        <meta
          property="og:image"
          content="https://traviskaufmancodes.com/headshot.jpg"
        />
        <link rel="canonical" href="https://traviskaufmancodes.com" />
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
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
