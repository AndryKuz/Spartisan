import style from "./Arrow.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Arrow = ({ direction }) => {
    const arrowClass =
        direction === "left" ? style.arrowLeft : style.arrowRight;

    return (
        <div className={`${style.arrowWrapper} ${arrowClass}`}>
            <span className={style.arrow} />
            <MdKeyboardArrowRight className={style.icon} />
            <div className={style.circle}></div>
        </div>
    );
};
