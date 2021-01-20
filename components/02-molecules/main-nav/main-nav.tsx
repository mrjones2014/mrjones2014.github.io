import {
  Alignment,
  AnchorButton,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import { NavLinkButtons } from "components/02-molecules/main-nav/nav-link-buttons";
import Link from "next/link";
import Image from "next/image";
import React from "react";
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
          <AnchorButton aria-label="Home" minimal={true}>
            <div className={Styles.mainNav__left__brand__container}>
              <Image src="/avatar.svg" alt="Home" width="32px" height="32px" />
              <span className={Styles.mainNav__left__brand__container__text}>
                mjones.network
              </span>
            </div>
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
