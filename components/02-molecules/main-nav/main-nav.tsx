import {
  Alignment,
  AnchorButton,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";
import { SocialLinkMenu } from "components/03-organisms/social-links/social-link-menu";
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
        <AnchorButton href="/" minimal={true} icon={IconNames.CONSOLE}>
          mjones.network
        </AnchorButton>
      </NavbarHeading>
      <NavbarDivider />
      <div className={Styles.mainNav__socialLinks}>
        <SocialLinkButtons minimal={true} showIcons={false} />
      </div>
      <div className={Styles.mainNav__socialMenu}>
        <SocialLinkMenu />
      </div>
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Switch
        className={Styles.mainNav__themeSwitcher}
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
