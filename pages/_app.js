import "../styles/globals.css";

import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Script from "next/script";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XE1P7GCEZ7"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XE1P7GCEZ7');
          `}
      </Script>

      <Head>
        <title>klpod221 | Portfolio</title>
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
