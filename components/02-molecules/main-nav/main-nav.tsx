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
import { NavLinkMenu } from "components/02-molecules/main-nav/nav-link-menu";
import Link from "next/link";
import React from "react";
import AvatarSvgDataUri from "utils/avatar-png-data-uri";
import Styles from "./main-nav.module.scss";

export interface MainNavProps {
  darkTheme: boolean;
  onThemeToggled: () => void;
}

export const MainNav: React.FC<MainNavProps> = (props: MainNavProps) => (
  <Navbar fixedToTop={true} className={Styles.mainNav}>
    <NavbarGroup className={Styles.mainNav__left}>
      <NavbarHeading className={Styles.mainNav__left__brand}>
        <Link href="/" passHref={true}>
          <AnchorButton aria-label="Home" minimal={true}>
            <div className={Styles.mainNav__left__brand__container}>
              <img
                src={AvatarSvgDataUri}
                className={Styles.mainNav__left__brand__container__img}
                alt={"Logo"}
              />
              <span className={Styles.mainNav__left__brand__container__text}>
                mjones.network
              </span>
            </div>
          </AnchorButton>
        </Link>
      </NavbarHeading>
      <NavbarDivider />
      <div className={Styles.mainNav__left__navLinks}>
        <NavLinkButtons className={Styles.mainNav__left__navLinks__links} />
        <NavLinkMenu
          className={Styles.mainNav__left__navLinks__menu}
          darkTheme={props.darkTheme}
          onThemeToggled={props.onThemeToggled}
        />
      </div>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Switch
        className={Styles.mainNav__themeSwitcher}
        alignIndicator={Alignment.RIGHT}
        label="Theme"
        innerLabel="Light"
        innerLabelChecked="Dark"
        checked={props.darkTheme}
        onChange={props.onThemeToggled}
      />
    </NavbarGroup>
  </Navbar>
);
