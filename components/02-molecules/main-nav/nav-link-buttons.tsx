import { AnchorButton } from "@blueprintjs/core";
import { NavLink, NavLinks } from "data/nav-links";
import { ClassNameProps } from "interfaces/class-name-props";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Styles from "./nav-link-buttons.module.scss";

export const NavLinkButtons: React.FC<ClassNameProps> = (
  props: ClassNameProps,
) => {
  const { className } = props;
  const router = useRouter();

  return (
    <React.Fragment>
      {NavLinks.map((link: NavLink) =>
        link.external !== true ? (
          <Link href={link.href} passHref={true} key={link.href}>
            <AnchorButton
              aria-label={link.text}
              className={`${Styles.navLinkButtons__button} ${className ?? ""}`}
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
