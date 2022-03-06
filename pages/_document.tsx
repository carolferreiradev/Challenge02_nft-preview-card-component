import { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/favicon-32x32.png.png"
            type="image/png"
          />
          <meta
            name="description"
            content="NFT preview card component - Frontend Mentor | Challenge 02 | Meta: implementar todos os desafios free do site Frontend Mentor."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
