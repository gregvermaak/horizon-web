import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
