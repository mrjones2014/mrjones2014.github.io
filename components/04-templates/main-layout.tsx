import { FocusStyleManager } from "@blueprintjs/core";
import { MainNav } from "components/02-molecules/main-nav/main-nav";
import useSafariVhWorkaround from "hooks/utils/use-safari-vh-workaround";
import { ChildrenProps } from "interfaces/children-props";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./main-layout.module.scss";
import { AppFooter } from "components/02-molecules/app-footer/app-footer";
import { HeadMeta } from "components/04-templates/head";
import { useRouter } from "next/router";

export const MainLayout: React.FC<ChildrenProps> = (props: ChildrenProps) => {
  const router = useRouter();

  const contentRef = useRef<HTMLDivElement>(null);

  useSafariVhWorkaround();

  useEffect(() => {
    FocusStyleManager.onlyShowFocusOnTabs();
  }, []);

  useEffect(() => {
    if (contentRef.current == null) {
      return;
    }

    contentRef.current.scrollTop = 0;
  }, [router.pathname]);

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
      <HeadMeta />
      <div className={classNames.join(" ")}>
        <MainNav useDarkTheme={useDarkTheme} onThemeToggled={toggleDarkTheme} />
        <div className={Styles.mainLayout__background} />
        <div className={Styles.mainLayout__content} ref={contentRef}>
          {props.children}
          <AppFooter />
        </div>
      </div>
    </React.Fragment>
  );
};
