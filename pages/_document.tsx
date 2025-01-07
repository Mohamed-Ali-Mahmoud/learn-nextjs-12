import Document, { Html, Head, Main, NextScript } from "next/document";

// use this file if you need to add custom meta tags for seo
// right click on the page and view source to see the meta tags
export default class CustomeDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="My page title" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
