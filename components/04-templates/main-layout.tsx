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
      </Head>
      <div className={classNames.join(" ")}>
        <MainNav useDarkTheme={useDarkTheme} onThemeToggled={toggleDarkTheme} />
        {props.children}
      </div>
    </React.Fragment>
  );
};
