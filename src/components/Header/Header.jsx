import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa";

import { ROUTES } from "../Routes";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";
import ActiveUser from "components/ActiveUser/ActiveUser";
import { selectCurrentUser } from "auth/redux/authSlice";


const Header = ({ openBurger }) => {
  const currentUser = useSelector(selectCurrentUser);
  
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
          <div className={style.linkLogo}>
            <Link to={ROUTES.HOME} >
              <LogoSvg className={style.large} />
            </Link>
          </div>
          <div className={style.userWrapper}>
            {currentUser && (<ActiveUser/>)}
          </div>
          <div className={style.navigation}>
            <div className={style.menu}>
              <Link to={ROUTES.BOOK}>Book now</Link>
            </div>
            <button type="button" className={style.burger} onClick={openBurger}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
