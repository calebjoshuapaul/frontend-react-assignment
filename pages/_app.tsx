import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
