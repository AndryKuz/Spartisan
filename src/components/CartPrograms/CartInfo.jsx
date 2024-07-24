import { nameButton } from "../../constants/common";
import { BookNow } from "../Button/BookNow";

import style from "./CartInfo.module.scss";

const CartInfo = () => {
    const programData = nameButton.find((item) => item.id === 1);

    return (
        <div className={style.cartProgram}>
            <div className={style.left}>
                <h3>"Short pleasure"</h3>
                <span></span>
                <p className={style.price}>€120 per person</p>
                <p className={style.time}>120 minutes / 5 guests maximum</p>
                <BookNow />
            </div>
            <div className={style.right}>
                <h4>The program includes:</h4>
                <ul className={style.list}>
                    {programData.program.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CartInfo;
