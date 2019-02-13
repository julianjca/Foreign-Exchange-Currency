import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
margin : 0;
-webkit-text-size-adjust: 100%;
font-family : 'Lato';
color : black;
}
html {
background-color : #FFF;
font-weight : 500;
color : #FFF;
margin: 0;
padding: 0;
border: 0;
outline: 0;
font-size: 16px;
height : 100%;
font-family : 'Lato';
text-align: center;
}
h1, h2, h3,h4, h5, h6 {
padding : 0;
margin : 0;
font-family : 'Lato';
font-weight : 500;
text-align: center;
}
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {/* Step 5: Output the styles in the head  */}
          <GlobalStyle/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}