import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/images/logo.svg";

import style from "./Logo.module.scss";

const Logo = ({ sizeWidth, sizeHeight }) => {
    const svgStyle = {
        width: sizeWidth || "169px",
        height: sizeHeight || "165px",
    };
    return (
        <div className={style.logo}>
            <Link to='/'>
                <LogoSvg style={svgStyle} />
            </Link>
        </div>
    );
};

export default Logo;
