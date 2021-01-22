import { Navbar } from "@blueprintjs/core";
import { BuildStatusBadge } from "components/00-particles/build-status/build-status-badge";
import { LastBuildDateBadge } from "components/00-particles/build-status/last-build-date-badge";
import React from "react";
import Styles from "./app-footer.module.scss";

export const AppFooter: React.FC = () => {
  const lastUpdatedText = process.env.NEXT_PUBLIC_LAST_UPDATED_DATE;

  return (
    <Navbar className={Styles.appFooter}>
      <div className={Styles.appFooter__content}>
        <p>
          &copy; {new Date(Date.now()).getFullYear()} M. Jones Software Systems,
          LLC.
        </p>
        <div className={Styles.appFooter__content__buildStatus}>
          <BuildStatusBadge />
          <LastBuildDateBadge />
        </div>
        {/* {lastUpdatedText != null && lastUpdatedText.length > 0 && (
          <p>Last build: {lastUpdatedText}</p>
        )} */}
      </div>
    </Navbar>
  );
};
