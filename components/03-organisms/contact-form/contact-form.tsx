import {
  Button,
  Callout,
  FormGroup,
  InputGroup,
  Intent,
  TextArea,
  Toaster,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React, { useRef, useState } from "react";
import Styles from "./contact-form.module.scss";

const FORMSPREE_API_URL = "https://formspree.io/f/xgeppgjy";

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toaster = useRef<Toaster>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullName(e.target.value);

  const subjectLine = `Website Contact Form Submission: ${fullName}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Copied from Formspree docs: https://formspree.io/forms/xgeppgjy/integration
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setFullName("");
        setSubmitted(true);
        form.reset();
        return;
      }

      toaster.current?.show({
        intent: Intent.DANGER,
        message: "Failed to submit contact form.",
      });
    };
    xhr.send(data);
  };

  if (submitted) {
    return (
      <Callout intent={Intent.SUCCESS} title="Thanks for reaching out!">
        I'll typically get back to you within a few business days.
      </Callout>
    );
  }

  return (
    <form
      className={Styles.contactForm}
      onSubmit={handleSubmit}
      action={FORMSPREE_API_URL}
      method={"POST"}
    >
      <FormGroup label="Full Name" labelFor="name-input" labelInfo="*">
        <InputGroup
          id="name-input"
          type="text"
          name="name"
          leftIcon={IconNames.PERSON}
          placeholder="Your name..."
          required={true}
          value={fullName}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup label="Your Email" labelFor="email-input" labelInfo="*">
        <InputGroup
          id="email-input"
          type="email"
          name="email"
          leftIcon={IconNames.ENVELOPE}
          placeholder="Your email..."
          required={true}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
      </FormGroup>
      <FormGroup label="Message" labelFor="message-input" labelInfo="*">
        <TextArea
          growVertically={true}
          id="message-input"
          name="message"
          placeholder="Message..."
          required={true}
        />
      </FormGroup>
      <input
        type="hidden"
        name="_subject"
        value={subjectLine}
        style={{ display: "none" }}
      />
      {/* Anti-spam measure, see: https://help.formspree.io/hc/en-us/articles/360013580813-Honeypot-spam-filtering */}
      <input type="hidden" name="_gotcha" style={{ display: "none" }} />
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
      <Toaster ref={toaster} />
    </form>
  );
};
