import { AnchorButton } from "@blueprintjs/core";
import { NavLink, NavLinks } from "data/nav-links";
import Link from "next/link";
import React from "react";

export const NavLinkButtons: React.FC = () => (
  <React.Fragment>
    {NavLinks.map((link: NavLink) => (
      <Link href={link.href} passHref={true} key={link.href}>
        <AnchorButton minimal={true} key={link.href}>
          {link.text}
        </AnchorButton>
      </Link>
    ))}
  </React.Fragment>
);
