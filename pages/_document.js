import Document, { Html, Head, Main, NextScript } from "next/document";
import { RiSpeakerLine } from "react-icons/ri";
import Helmet from 'react-helmet'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      helmet: Helmet.renderStatic()
    }
  }
  render() {
    const { helmet } = this.props
    return (
      <Html lang="es">
        <Head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}