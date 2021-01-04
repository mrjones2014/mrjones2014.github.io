import { AnchorButton } from "@blueprintjs/core";
import { SocialLink, SocialLinks } from "data/social-links";
import useWindowSize from "hooks/utils/use-window-size";
import React from "react";
import { BreakPoints } from "utils/breakpoints";

export interface SocialLinkButtonsProps {
  minimal?: boolean;
  showIcons?: boolean;
  largeButtons?: boolean;
}

export const SocialLinkButtons: React.FC<SocialLinkButtonsProps> = (
  props: SocialLinkButtonsProps,
) => {
  const { width } = useWindowSize();
  const isMobile = width < BreakPoints.tablet;

  return (
    <React.Fragment>
      {SocialLinks.map((link: SocialLink) => (
        <AnchorButton
          minimal={props.minimal}
          target={link.external === true ? "_blank" : undefined}
          rel={link.external === true ? "noopener noreferrer" : undefined}
          href={link.href}
          icon={props.showIcons !== false ? link.icon : undefined}
          key={link.href}
          large={!isMobile && props.largeButtons}
          small={isMobile}
        >
          {link.text}
        </AnchorButton>
      ))}
    </React.Fragment>
  );
};
