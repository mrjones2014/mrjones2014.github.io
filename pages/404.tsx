import { IconNames } from "@blueprintjs/icons";
import { ErrorPage } from "components/04-templates/error-pages/error-page";
import React from "react";

const Error404Page: React.FC = () => (
  <ErrorPage
    code={404}
    icon={IconNames.SEARCH}
    title="That's a 404"
    subtitle="This is not the page you're looking for."
  />
);

export default Error404Page;
