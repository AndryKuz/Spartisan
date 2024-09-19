import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import style from "./Header.module.scss";
import { FaInstagram } from "react-icons/fa";

import { ROUTES } from "../Routes";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";
import { ReactComponent as User } from "assets/images/person.svg";
import { selectCurrentUser, selectEmail, setCurrentUser } from "auth/redux/authSlice";

const Header = ({ openBurger }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const currentEmail = useSelector(selectEmail);
  
  const [headerUserName] = (typeof currentEmail === 'string' && currentEmail.includes('@')) ? currentEmail.split('@'): [''];
 
 
  const handleCurrentUser = () => {
    dispatch(setCurrentUser(null));
  };
  
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
            {currentUser ? (
              <div className={style.user}>
                <div>
                  <User />
                  <span>Hello {headerUserName || 'user'} | </span>
                </div>
                <div>
                  <button onClick={handleCurrentUser}> Go out</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={style.navigation}>
            <div className={style.menu}>
              <Link to={ROUTES.BOOK}>Book now</Link>
            </div>
            <button type="button" class={style.burger} onClick={openBurger}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
