import { Card, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import Styles from "./errors.module.scss";

const Error404Page: React.FC = () => (
  <Card className={Styles.errorCard}>
    <NonIdealState
      icon={IconNames.SEARCH}
      title="That's a 404"
      description="This is not the page you're looking for."
    />
  </Card>
);

export default Error404Page;
