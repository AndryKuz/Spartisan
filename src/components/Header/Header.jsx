import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa";

import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <section className={style.test}>
      <div className="container">
        <header>
          <div className={style.header}>
            <div className={style.instagram}>
              <FaInstagram />
            </div>
            <Logo sizeWidth="140px" sizeHeight="136px" />
            <div className={style.navigation}>
              <div className={style.menu}>
                <button>Book now</button>
              </div>
              <button type="button" class={style.burger}>
                <span></span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
