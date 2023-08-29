import "../styles/globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>klpod221 | Portfolio</title>
        <meta name="description" content="klpod221" />
        <meta name="author" content="klpod221" />
        <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="klpod221, portfolio, nextjs, tailwindcss" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="1nzDcNaPTgJOrPDUsrQomChD5eThl3aWCAd_CMrhJlk" />
        <meta data-n-head="ssr" data-hid="description" name="description" content="klpod221 portfolio" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
