import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Mat Jones - Full Stack Software Engineer"
          />
          <link
            rel="shortcut icon"
            href="https://mjones.network/avatar_svg.png"
          />
          <link rel="icon" href="https://mjones.network/avatar_svg.png" />
          <meta property="og:title" content="mjones.network" data-rh="true" />
          <meta
            property="og:description"
            content="I'm a full-stack software engineer, passionate about online privacy, accessibility, and dark themes. 😎"
            data-rh="true"
          />
          <meta
            property="og:image"
            content="https://mjones.network/avatar.png"
            data-rh="true"
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
