import {
  Alignment,
  AnchorButton,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { NavLinkButtons } from "components/02-molecules/main-nav/nav-link-buttons";
import useWindowSize from "hooks/utils/use-window-size";
import Link from "next/link";
import React from "react";
import { BreakPoints } from "utils/breakpoints";
import Styles from "./main-nav.module.scss";

export interface MainNavProps {
  useDarkTheme: boolean;
  onThemeToggled: () => void;
}

export const MainNav: React.FC<MainNavProps> = (props: MainNavProps) => (
  <Navbar fixedToTop={true} className={Styles.mainNav}>
    <NavbarGroup className={Styles.mainNav__left}>
      <NavbarHeading className={Styles.mainNav__left__brand}>
        <Link href="/" passHref={true}>
          <AnchorButton minimal={true} icon={IconNames.HOME}>
            <span className={Styles.mainNav__left__brand__text}>
              mjones.network
            </span>
          </AnchorButton>
        </Link>
      </NavbarHeading>
      <NavbarDivider />
      <div className={Styles.mainNav__left__navLinks}>
        <NavLinkButtons />
      </div>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Switch
        className={Styles.mainNav__themeSwitcher}
        alignIndicator={Alignment.RIGHT}
        label="Theme"
        innerLabel="Light"
        innerLabelChecked="Dark"
        checked={props.useDarkTheme}
        onChange={props.onThemeToggled}
      />
    </NavbarGroup>
  </Navbar>
);
