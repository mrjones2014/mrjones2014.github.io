import { FocusStyleManager } from "@blueprintjs/core";
import { MainNav } from "components/02-molecules/main-nav/main-nav";
import useSafariVhWorkaround from "hooks/utils/use-safari-vh-workaround";
import { ChildrenProps } from "interfaces/children-props";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Styles from "./main-layout.module.scss";

export const MainLayout: React.FC<ChildrenProps> = (props: ChildrenProps) => {
  useSafariVhWorkaround();

  useEffect(() => {
    FocusStyleManager.onlyShowFocusOnTabs();
  }, []);

  const [useDarkTheme, setUseDarkTheme] = useState(true);

  const toggleDarkTheme = () =>
    setUseDarkTheme((prevState: boolean) => !prevState);

  const classNames = [Styles.mainLayout];
  if (useDarkTheme) {
    classNames.push("bp3-dark");
    classNames.push(Styles.dark);
  }

  return (
    <React.Fragment>
      <Head>
        <title>mjones.network</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="mjones.network" data-rh="true"/>
        <meta property="og:description" content="I'm a full-stack software engineer, passionate about online privacy, accessibility, and dark themes. 😎" data-rh="true"/>
        <meta property="og:image" content="/avatar.svg" data-rh="true"/>
      </Head>
      <div className={classNames.join(" ")}>
        <MainNav useDarkTheme={useDarkTheme} onThemeToggled={toggleDarkTheme} />
        {props.children}
      </div>
    </React.Fragment>
  );
};
