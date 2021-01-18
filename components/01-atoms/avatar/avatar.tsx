import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./avatar.module.scss";

export interface AvatarProps extends ClassNameProps {
  svg?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  if (props.svg === true) {
    return <img src="/avatar.svg" className={props.className} />;
  }

  return (
    <div className={`${Styles.avatar} ${props.className ?? ""}`}>
      <img src="/avatar.jpg" alt="avatar" width="100%" height="auto" />
    </div>
  );
};
