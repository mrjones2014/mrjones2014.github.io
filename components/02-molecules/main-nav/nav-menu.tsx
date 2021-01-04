import { Button, Menu, MenuItem, Popover } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { NavLink, NavLinks } from "data/nav-links";
import Link from "next/link";
import React from "react";

const menuItems = NavLinks.map((link: NavLink) =>
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
);

const menu = <Menu aria-label="menu">{menuItems}</Menu>;

export const NavMenu: React.FC = () => (
  <Popover minimal={true} content={menu}>
    <Button icon={IconNames.MENU} />
  </Popover>
);
