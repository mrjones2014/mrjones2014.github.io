import { Button, Menu, MenuItem, Popover, Position } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { SocialLink, SocialLinks } from "data/social-links";
import React from "react";

const menuItems = SocialLinks.map((link: SocialLink) => (
  <MenuItem
    icon={link.icon}
    href={link.href}
    target={link.external === true ? "_blank" : undefined}
    rel={link.external === true ? "noopener noreferrer" : undefined}
    text={link.text}
    key={link.href}
  />
));

const menu = <Menu aria-label="menu">{menuItems}</Menu>;

export const SocialLinkMenu: React.FC = () => (
  <Popover minimal={true} content={menu}>
    <Button icon={IconNames.MENU} />
  </Popover>
);
