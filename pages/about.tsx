import { BioCard } from "components/03-organisms/bio-card/bio-card";
import React from "react";
import Styles from "./about.module.scss";

const AboutPage: React.FC = () => (
  <div className={Styles.aboutPage}>
    <div className={Styles.aboutPage__content}>
      <BioCard className={Styles.aboutPage__content__bioCard} />
    </div>
  </div>
);

export default AboutPage;
