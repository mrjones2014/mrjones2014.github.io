import { Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import useSafariVhWorkaround from "hooks/utils/use-safari-vh-workaround";
import { ChildrenProps } from "interfaces/children-props";
import React from "react";

export const MainLayout: React.FC<ChildrenProps> = (props: ChildrenProps) => {
  useSafariVhWorkaround();

  return (
    <div className="bp3-dark">
      <Navbar fixedToTop={true}>
        <NavbarGroup>
          <NavbarHeading>Mat Jones</NavbarHeading>
        </NavbarGroup>
      </Navbar>
      {props.children}
    </div>
  );
};
