import { Card, IconName, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import Styles from "./error-page.module.scss";

interface ErrorPageProps {
  code: number;
  icon: IconName;
  title: string;
  subtitle: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props: ErrorPageProps) => (
  <React.Fragment>
    <Card className={Styles.errorPage}>
      <NonIdealState
        icon={props.icon}
        title={props.title}
        description={props.subtitle}
      />
    </Card>
    <div className={Styles.errorPage__spacer} />
  </React.Fragment>
);
