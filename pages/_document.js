import Document, { Head, Html, Main, NextScript } from 'next/document'

// Any time you make changes to document or _app.js, restart the server
class MyDocument extends Document {
  render() {
    // We're accessing the core next/document class for access to the global scope
    // of both the body and Head tags.
    return <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument