import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";
import style from "./Footer.module.scss";
import { ROUTES } from "../Routes";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.footer}>
          <Link to={ROUTES.HOME}>
            <LogoSvg className={style.logo} />
          </Link>
          <nav className={style.menu}>
            <Link to={ROUTES.GALLERY}>Gallery</Link>
            <Link to={ROUTES.ABOUT}>About Spartisan</Link>
            <Link to={ROUTES.GIFT}>Gift certificates</Link>
            <Link to={ROUTES.BOOKING}>Booking</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
