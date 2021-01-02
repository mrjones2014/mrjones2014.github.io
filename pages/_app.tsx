import React from "react";
import NextApp from "next/app";
import { MainLayout } from "components/04-templates/main-layout";
import "./_app.scss";

export default class App extends NextApp {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  }
}
