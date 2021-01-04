import { H1, H4, Menu, Popover } from "@blueprintjs/core";
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
  <div className={Styles.contactPage}>
    <H1>Contact Me</H1>
    <H4>Want to hire me or inquire about some work? Contact me here.</H4>
    <H4>Or, find me {menuTrigger}.</H4>
    <ContactForm />
  </div>
);

export default ContactPage;
