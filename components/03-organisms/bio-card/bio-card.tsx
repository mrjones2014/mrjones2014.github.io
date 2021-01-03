import { Card, Classes, Elevation } from "@blueprintjs/core";
import { Avatar } from "components/01-atoms/avatar/avatar";
import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./bio-card.module.scss";
import FrontpageBlurb from "data/frontpage-blurb.md";
import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";

export interface BioCardProps extends ClassNameProps {
  body: React.ReactNode;
  showSocialLinks?: boolean;
}

export const BioCard: React.FC<BioCardProps> = (props: BioCardProps) => (
  <Card
    elevation={Elevation.TWO}
    className={`${Styles.bioCard} ${props.className ?? ""} ${
      Classes.RUNNING_TEXT
    }`}
  >
    <Avatar className={Styles.bioCard__avatar} />
    {props.body}
    {props.showSocialLinks !== false && (
      <div className={Styles.bioCard__links}>
        <SocialLinkButtons />
      </div>
    )}
  </Card>
);
