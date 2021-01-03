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
import { NavMenu } from "components/02-molecules/main-nav/nav-menu";
import Link from "next/link";
import React from "react";
import Styles from "./main-nav.module.scss";

export interface MainNavProps {
  useDarkTheme: boolean;
  onThemeToggled: () => void;
}

export const MainNav: React.FC<MainNavProps> = (props: MainNavProps) => (
  <Navbar fixedToTop={true} className={Styles.mainNav}>
    <NavbarGroup>
      <NavbarHeading className={Styles.mainNav__brand}>
        <Link href="/" passHref={true}>
          <AnchorButton minimal={true} icon={IconNames.CONSOLE}>
            mjones.network
          </AnchorButton>
        </Link>
      </NavbarHeading>
      <NavbarDivider />
      <div className={Styles.mainNav__navLinks}>
        <NavLinkButtons />
      </div>
      <div className={Styles.mainNav__navMenu}>
        <NavMenu />
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
