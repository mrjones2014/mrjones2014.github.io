import { Card, H1, H4, H6, Menu, Popover } from "@blueprintjs/core";
import { ContactForm } from "components/03-organisms/contact-form/contact-form";
import { SocialLinkMenuItems } from "components/03-organisms/social-links/social-link-menu";
import React from "react";
import Styles from "./contact.module.scss";

const menu = <Menu aria-label="around the web">{SocialLinkMenuItems}</Menu>;
const menuTrigger = (
  <Popover content={menu}>
    <a>around the web</a>
  </Popover>
);

const ContactPage: React.FC = () => (
  <Card className={Styles.contactPage}>
    <div className={Styles.contactPage__header}>
      <H1>Contact Me</H1>
      <H4>Want to hire me or inquire about some work? Contact me here.</H4>
      <H4 className={Styles.contactPage__aroundTheWeb}>
        Or, find me {menuTrigger}.
      </H4>
      <H6>(Please, no marketing emails!)</H6>
    </div>
    <ContactForm />
  </Card>
);

export default ContactPage;
