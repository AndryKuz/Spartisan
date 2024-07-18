import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";

import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <section>
            <footer>
                <div className='container'>
                    <div className={style.footer}>
                        <div>
                            <Logo sizeWidth='70px' sizeHeight='68px' />
                        </div>
                        <div>
                            <nav className={style.menu}>
                                <Link>Gallery</Link>
                                <Link>About Spartisan</Link>
                                <Link>Gift certificates</Link>
                                <Link>Booking</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
