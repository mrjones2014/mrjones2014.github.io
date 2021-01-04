import { ClassNameProps } from "interfaces/class-name-props";
import React from "react";
import Styles from "./avatar.module.scss";

const svgAvatarImgSrc =
  "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=Default&mouthType=Serious&skinColor=Light";

export interface AvatarProps extends ClassNameProps {
  svg?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  if (props.svg === true) {
    return <img src={svgAvatarImgSrc} />;
  }

  return (
    <div className={`${Styles.avatar} ${props.className ?? ""}`}>
      <img src="/avatar.jpg" alt="avatar" width="100%" height="auto" />
    </div>
  );
};
