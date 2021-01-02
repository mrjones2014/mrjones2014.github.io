import {
  Alignment,
  AnchorButton,
  Divider,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";
import React from "react";

export interface MainNavProps {
  useDarkTheme: boolean;
  onThemeToggled: () => void;
}

export const MainNav: React.FC<MainNavProps> = (props: MainNavProps) => (
  <Navbar fixedToTop={true}>
    <NavbarGroup>
      <NavbarHeading>Mat Jones</NavbarHeading>
    </NavbarGroup>
    <NavbarGroup>
      <AnchorButton
        minimal={true}
        href="https://mjones44.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Blog
      </AnchorButton>
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
