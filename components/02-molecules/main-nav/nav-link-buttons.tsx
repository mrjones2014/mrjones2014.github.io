import { AnchorButton } from "@blueprintjs/core";
import { NavLink, NavLinks } from "data/nav-links";
import Link from "next/link";
import React from "react";

export const NavLinkButtons: React.FC = () => (
  <React.Fragment>
    {NavLinks.map((link: NavLink) =>
      link.external !== true ? (
        <Link href={link.href} passHref={true} key={link.href}>
          <AnchorButton minimal={true}>{link.text}</AnchorButton>
        </Link>
      ) : (
        <AnchorButton
          minimal={true}
          href={link.href}
          target={"_blank"}
          rel={"noopener noreferrer"}
          key={link.href}
        >
          {link.text}
        </AnchorButton>
      ),
    )}
  </React.Fragment>
);
