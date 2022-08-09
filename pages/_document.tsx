import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    const { styles } = this.props;

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="application-name" content="App" />
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbHev08CqaxIB7fgKEa7OUxqGLPjuxWCU&callback=initMap&libraries=&v=weekly`}
            async
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
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
