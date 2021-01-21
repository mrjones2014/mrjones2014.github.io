import { Classes } from "@blueprintjs/core";
import { MainNav } from "components/02-molecules/main-nav/main-nav";
import { ChildrenProps } from "interfaces/children-props";
import React from "react";
import Styles from "./main-layout.module.scss";
import { AppFooter } from "components/02-molecules/app-footer/app-footer";
import useMainLayout from "hooks/component-logic/use-main-layout";

export const MainLayout: React.FC<ChildrenProps> = (props: ChildrenProps) => {
  const { darkTheme, toggleDarkTheme, contentRef } = useMainLayout();

  return (
    <React.Fragment>
      <div className={`${Styles.mainLayout} ${darkTheme ? Classes.DARK : ""}`}>
        <MainNav useDarkTheme={darkTheme} onThemeToggled={toggleDarkTheme} />
        <div className={Styles.mainLayout__content} ref={contentRef}>
          {props.children}
          <AppFooter />
        </div>
      </div>
    </React.Fragment>
  );
};
