import { Callout, Card, Classes, Intent } from "@blueprintjs/core";
import { Avatar } from "components/01-atoms/avatar/avatar";
import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./bio-card.module.scss";
import FullBio from "data/full-bio.md";

export const BioCard: React.FC<ClassNameProps> = (props: ClassNameProps) => (
  <Card
    className={`${Styles.bioCard} ${props.className ?? ""} ${
      Classes.RUNNING_TEXT
    }`}
  >
    <Avatar className={Styles.bioCard__avatar} />
    <FullBio />
  </Card>
);
