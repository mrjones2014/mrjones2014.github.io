import { AnchorButton } from "@blueprintjs/core";
import { SocialLink, SocialLinks } from "data/social-links";
import React from "react";

export interface SocialLinkButtonsProps {
  minimal?: boolean;
  showIcons?: boolean;
}

export const SocialLinkButtons: React.FC<SocialLinkButtonsProps> = (
  props: SocialLinkButtonsProps
) => (
  <React.Fragment>
    {SocialLinks.map((link: SocialLink) => (
      <AnchorButton
        minimal={props.minimal}
        target={link.external === true ? "_blank" : undefined}
        rel={link.external === true ? "noopener noreferrer" : undefined}
        href={link.href}
        icon={props.showIcons !== false ? link.icon : undefined}
        key={link.href}
      >
        {link.text}
      </AnchorButton>
    ))}
  </React.Fragment>
);
