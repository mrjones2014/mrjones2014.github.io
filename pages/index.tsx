import { Avatar } from "components/01-atoms/avatar/avatar";
import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";
import FrontpageBlurb from "data/frontpage-blurb.md";
import Styles from "./index.module.scss";

const IndexPage: React.FC = () => (
  <div className={Styles.indexPage}>
    <div className={Styles.indexPage__content}>
      <div className={Styles.indexPage__avatar}>
        <Avatar svg={true} />
      </div>
      <FrontpageBlurb />
      <div className={Styles.indexPage__content__socialLinks}>
        <SocialLinkButtons />
      </div>
    </div>
  </div>
);

export default IndexPage;
