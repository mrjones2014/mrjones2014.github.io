import { H1, H4 } from "@blueprintjs/core";
import { ContactForm } from "components/03-organisms/contact-form/contact-form";
import React from "react";
import Styles from "./contact.module.scss";

const ContactPage: React.FC = () => (
  <div className={Styles.contactPage}>
    <H1>Contact Me</H1>
    <H4>Want to hire me or inquire about some work? Contact me here.</H4>
    <H4>
      Or, find me <a href="#around-the-web">around the web</a>.
    </H4>
    <ContactForm />
  </div>
);

export default ContactPage;
