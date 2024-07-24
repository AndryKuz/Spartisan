import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.footer}>
          <div>
            <LogoSvg className={style.logo} />
          </div>
          <nav className={style.menu}>
            <Link>Gallery</Link>
            <Link>About Spartisan</Link>
            <Link>Gift certificates</Link>
            <Link>Booking</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
