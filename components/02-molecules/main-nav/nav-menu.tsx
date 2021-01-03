import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { NavLink, NavLinks } from "data/nav-links";
import React from "react";

const menuItems = NavLinks.map((link: NavLink) => (
  <MenuItem href={link.href} text={link.text} key={link.href} />
));

const menu = <Menu aria-label="menu">{menuItems}</Menu>;

export const NavMenu: React.FC = () => (
  <Popover minimal={true} content={menu}>
    <Button icon={IconNames.MENU} />
  </Popover>
);
