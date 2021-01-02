import React from "react";
import Styles from "./avatar.module.scss";

export const Avatar: React.FC = () => (
  <div className={Styles.avatar}>
    <img src="/avatar.jpg" alt="avatar" width="100%" height="auto" />
  </div>
);
