import React from 'react';

import {
  Document,
  Head,
  Main,
} from '@react-ssr/express';

export default class extends Document {
  render() {
    return (
      <html lang="en">
      <Head>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <title>Tweedr App</title>
      </Head>
      <body>
      <Main />
      </body>
      </html>
    );
  }
};