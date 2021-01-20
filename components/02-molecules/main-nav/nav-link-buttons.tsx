import { AnchorButton } from "@blueprintjs/core";
import { NavLinkMenu } from "components/02-molecules/main-nav/nav-link-menu";
import { NavLink, NavLinks } from "data/nav-links";
import useWindowSize from "hooks/utils/use-window-size";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BreakPoints } from "utils/breakpoints";
import Styles from "./nav-link-buttons.module.scss";

export const NavLinkButtons: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  if (width <= BreakPoints.phablet) {
    return <NavLinkMenu />;
  }

  return (
    <React.Fragment>
      {NavLinks.map((link: NavLink) =>
        link.external !== true ? (
          <Link href={link.href} passHref={true} key={link.href}>
            <AnchorButton
              aria-label={link.text}
              className={Styles.navLinkButtons__button}
              active={router.route.startsWith(link.href)}
              minimal={true}
            >
              {link.text}
            </AnchorButton>
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
};
