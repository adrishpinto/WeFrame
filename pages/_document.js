import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="WeFrame project" />
        <title>WeFrame</title>
        <link rel="preload" href="/logo.svg" as="image"></link>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
