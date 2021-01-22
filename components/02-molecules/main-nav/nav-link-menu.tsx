import {
  Alignment,
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
  Switch,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { MainNavProps } from "components/02-molecules/main-nav/main-nav";
import { NavLink, NavLinks } from "data/nav-links";
import { ClassNameProps } from "interfaces/class-name-props";
import Link from "next/link";
import React from "react";
import Styles from "./nav-link-menu.module.scss";

export interface NavLinkMenuProps
  extends ClassNameProps,
    Pick<MainNavProps, "darkTheme" | "onThemeToggled"> {}

const MenuItems: React.FC<NavLinkMenuProps> = (props: NavLinkMenuProps) => (
  <React.Fragment>
    {NavLinks.map((link: NavLink) =>
      link.external !== true ? (
        <Link href={link.href} passHref={true} key={link.href}>
          <MenuItem text={link.text} key={link.href} />
        </Link>
      ) : (
        <MenuItem
          href={link.href}
          target={"_blank"}
          rel={"noopener noreferrer"}
          text={link.text}
          key={link.href}
        />
      ),
    )}
    <MenuDivider />
    <MenuItem
      title="Theme"
      text={
        <div className={Styles.navLinkMenu__themeSwitcher}>
          <Switch
            alignIndicator={Alignment.RIGHT}
            label="Theme"
            innerLabel="Light"
            innerLabelChecked="Dark"
            checked={props.darkTheme}
            onChange={props.onThemeToggled}
          />
        </div>
      }
    />
  </React.Fragment>
);

const NavMenu: React.FC<NavLinkMenuProps> = (props: NavLinkMenuProps) => (
  <Menu aria-label="menu">
    <MenuItems {...props} />
  </Menu>
);

export const NavLinkMenu: React.FC<NavLinkMenuProps> = (
  props: NavLinkMenuProps,
) => (
  <Popover
    className={props.className}
    minimal={true}
    content={<NavMenu {...props} />}
  >
    <Button icon={IconNames.MENU} />
  </Popover>
);
