import { AnchorButton, Card, Classes, Elevation } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Avatar } from "components/01-atoms/avatar/avatar";
import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./bio-card.module.scss";
import BioContents from "data/bio-contents.md";
import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";

export const BioCard: React.FC<ClassNameProps> = (props: ClassNameProps) => (
  <Card
    elevation={Elevation.TWO}
    className={`${Styles.bioCard} ${props.className ?? ""}`}
  >
    <div className={Styles.bioCard__left}>
      <Avatar />
    </div>
    <div className={`${Styles.bioCard__right} ${Classes.RUNNING_TEXT}`}>
      {<BioContents />}
      <div className={Styles.bioCard__right__links}>
        <SocialLinkButtons />
      </div>
    </div>
  </Card>
);
