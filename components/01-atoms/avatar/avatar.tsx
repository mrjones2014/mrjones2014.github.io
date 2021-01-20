import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./avatar.module.scss";

export const Avatar: React.FC<ClassNameProps> = (props: ClassNameProps) => (
  <div className={`${Styles.avatar} ${props.className ?? ""}`}>
    <img src="/avatar.jpg" alt="avatar" width="100%" height="auto" />
  </div>
);
