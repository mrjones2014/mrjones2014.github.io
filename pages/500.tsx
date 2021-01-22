import { Card, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import Styles from "./errors.module.scss";

const Error500Page: React.FC = () => (
  <Card className={Styles.errorCard}>
    <NonIdealState
      icon={IconNames.WARNING_SIGN}
      title="Oop! 500 Error!"
      description="Something went wrong."
    />
  </Card>
);

export default Error500Page;
