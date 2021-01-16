import { IconName, MaybeElement } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  Github,
  Icon,
  Linkedin,
  Telegram,
  DevDotTo,
} from "@icons-pack/react-simple-icons";

export interface SocialLink {
  external?: boolean;
  href: string;
  text: string;
  icon?: IconName | MaybeElement;
}

const wrapIcon = (IconComponent: Icon) => (
  <span className="bp3-icon">
    <IconComponent width={16} height={16} />
  </span>
);

export const SocialLinks: Array<SocialLink> = [
  {
    href: "/blog",
    text: "Blog",
    icon: wrapIcon(DevDotTo),
  },
  {
    external: true,
    href: "https://github.com/mrjones2014",
    text: "GitHub",
    icon: wrapIcon(Github),
  },
  {
    external: true,
    href: "https://t.me/mjones44",
    text: "Telegram",
    icon: wrapIcon(Telegram),
  },
  {
    external: true,
    href: "https://www.linkedin.com/in/mjones44/",
    text: "LinkedIn",
    icon: wrapIcon(Linkedin),
  },
];
