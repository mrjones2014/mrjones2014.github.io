import { IconName, MaybeElement } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  Github,
  Icon,
  Linkedin,
  Medium,
  Telegram,
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
    external: true,
    href: "https://mjones44.medium.com/",
    text: "Blog",
    icon: wrapIcon(Medium),
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
    href: "mailto:mat@mjones.network",
    text: "Email",
    icon: IconNames.ENVELOPE,
  },
  {
    external: true,
    href: "https://www.linkedin.com/in/mjones44/",
    text: "LinkedIn",
    icon: wrapIcon(Linkedin),
  },
];
