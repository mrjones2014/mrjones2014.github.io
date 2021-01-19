import { Navbar } from "@blueprintjs/core";
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
        {lastUpdatedText != null && lastUpdatedText.length > 0 && (
          <p>Content last updated: {lastUpdatedText}</p>
        )}
      </div>
    </Navbar>
  );
};
