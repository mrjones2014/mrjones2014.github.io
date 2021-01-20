import { SocialLinkButtons } from "components/03-organisms/social-links/social-link-buttons";
import FrontpageBlurb from "data/frontpage-blurb.md";
import SvgAvatar from "public/avatar.svg";
import Styles from "./index.module.scss";

const IndexPage: React.FC = () => (
  <div className={Styles.indexPage}>
    <div className={Styles.indexPage__content}>
      <div className={Styles.indexPage__avatar}>
        <SvgAvatar />
      </div>
      <FrontpageBlurb />
      <div className={Styles.indexPage__content__socialLinks}>
        <SocialLinkButtons
          className={Styles.indexPage__content__socialLinks__link}
        />
      </div>
    </div>
  </div>
);

export default IndexPage;
