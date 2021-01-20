import { AnchorButton } from "@blueprintjs/core";
import { SocialLink, SocialLinks } from "data/social-links";
import React from "react";

export interface SocialLinkButtonsProps {
  className?: string;
  minimal?: boolean;
  showIcons?: boolean;
  largeButtons?: boolean;
}

export const SocialLinkButtons: React.FC<SocialLinkButtonsProps> = (
  props: SocialLinkButtonsProps,
) => (
  <React.Fragment>
    {SocialLinks.map((link: SocialLink) => (
      <AnchorButton
        aria-label={link.text}
        className={props.className}
        minimal={props.minimal}
        target={link.external === true ? "_blank" : undefined}
        rel={link.external === true ? "noopener noreferrer" : undefined}
        href={link.href}
        icon={props.showIcons !== false ? link.icon : undefined}
        key={link.href}
        large={props.largeButtons}
      >
        {link.text}
      </AnchorButton>
    ))}
  </React.Fragment>
);
