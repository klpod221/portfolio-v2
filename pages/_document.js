import { Html, Head, Main, NextScript } from "next/document";
import { defaultHead } from "next/head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="klpod221" />
        <meta
          name="keywords"
          content="klpod221, portfolio, nextjs, tailwindcss, home, services, works, testimonials, contact, projects"
        />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
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
          content="Hi, I'm klpod221, mainly a web developer. You can see my work and contact me for services, and you can also see my social media. I can make a website for you or make your website better and many more."
        />

        <meta property="og:title" content="klpod221 | Portfolio" />
        <meta property="og:description" content="klpod221 portfolio" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://klpod221.github.io/" />
        <meta property="og:card" content="summary" />

        <link rel="icon" href="/favicon.png" />

      </Head>

      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
