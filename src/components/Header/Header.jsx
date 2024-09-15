import { Link} from "react-router-dom";

import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa";

import { ROUTES } from "../Routes";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";

const Header = ({ handleBurger }) => {
 

  return (
    <header className={style.head}>
      <div className="container">
        <div className={style.header}>
          <div className={style.instagram}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
            <Link to={ROUTES.HOME} className={style.linkLogo}>
              <LogoSvg className={style.large} />
            </Link>
          <div className={style.navigation}>
            <div className={style.menu}>
              <button>Book now</button>
            </div>
            <button onClick={handleBurger} type="button" class={style.burger}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
