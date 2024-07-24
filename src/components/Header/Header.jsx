import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa";

import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className={style.head}>
      <div className="container">
        <div className={style.header}>
          <div className={style.instagram}>
            <FaInstagram />
          </div>
          <LogoSvg className={style.logo} />

          <div className={style.navigation}>
            <div className={style.menu}>
              <button>Book now</button>
            </div>
            <button type="button" class={style.burger}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
