import "../styles/globals.css";

import { useState, useEffect } from "react";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <AnimatePresence key={loading} mode="wait" initial={true}>
      <Transition />

      {!loading && (
        <Layout>
          <Head>
            <title>klpod221 | Portfolio</title>
            <meta name="description" content="klpod221" />
            <meta name="author" content="klpod221" />
            <meta
              data-n-head="ssr"
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="keywords"
              content="klpod221, portfolio, nextjs, tailwindcss"
            />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="google" content="notranslate" />
            <meta
              name="google-site-verification"
              content="1nzDcNaPTgJOrPDUsrQomChD5eThl3aWCAd_CMrhJlk"
            />
            <meta
              data-n-head="ssr"
              data-hid="description"
              name="description"
              content="klpod221 portfolio"
            />

            <link rel="icon" href="/favicon.png" />
          </Head>

          <Component {...pageProps} />
        </Layout>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
