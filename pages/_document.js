import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="klpod221" />
        <meta name="author" content="klpod221" />
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

      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
