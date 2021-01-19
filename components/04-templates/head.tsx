import Head from "next/head";
import React from "react";

export const HeadMeta: React.FC = () => (
  <Head>
    <title>mjones.network</title>
    <link rel="shortcut icon" href="https://mjones.network/avatar_svg.png" />
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
);
