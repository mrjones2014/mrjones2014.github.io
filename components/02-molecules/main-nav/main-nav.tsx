import {
  Alignment,
  AnchorButton,
  Divider,
  H1,
  Icon,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";
import React from "react";
import Styles from "./main-nav.module.scss";

export interface MainNavProps {
  useDarkTheme: boolean;
  onThemeToggled: () => void;
}

export const MainNav: React.FC<MainNavProps> = (props: MainNavProps) => (
  <Navbar fixedToTop={true} className={Styles.mainNav}>
    <NavbarGroup>
      <NavbarHeading className={Styles.mainNav__brand}>
        <Icon icon={IconNames.CONSOLE} />
        mjones.network
      </NavbarHeading>
      <NavbarDivider />
      <SocialLinkButtons minimal={true} showIcons={false} />
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Switch
        alignIndicator={Alignment.RIGHT}
        label="Theme"
        innerLabel="Light"
        innerLabelChecked="Dark"
        checked={props.useDarkTheme}
        onChange={props.onThemeToggled}
      />
    </NavbarGroup>
  </Navbar>
);
