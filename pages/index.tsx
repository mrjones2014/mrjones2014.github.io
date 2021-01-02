import { BioCard } from "components/03-organisms/bio-card/bio-card";
import Styles from "./index.module.scss";

const IndexPage: React.FC = () => (
  <div className={Styles.indexPage}>
    <div className={Styles.indexPage__content}>
      <BioCard className={Styles.indexPage__content__bioCard} />
    </div>
  </div>
);

export default IndexPage;
