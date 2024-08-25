
import { MainButton, nameMainButton } from "../Button/MainButton";

import style from "./CartInfo.module.scss";

const CartInfo = ({program}) => {



  return (
    <div className={style.cartInfo}>
      <div className={style.left}>
        <h3>"{program.title}"</h3>
        <span></span>
        <p className={style.price}>€{program.price}per person</p>
        <p className={style.time}>{program.time} minutes / 5 guests maximum</p>
        <MainButton buttonLabel={nameMainButton[1]}/>
      </div>
      <div className={style.right}>
        <div className={style.priceMobile}>
          <p className={style.price}>€{program.price} per person</p>
          <p className={style.time}>{program.time} / 5 guests maximum</p>
        </div>
        <h4>The program includes:</h4>
        <ul className={style.list}>
          {program.program.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={style.button}>
          <MainButton />
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
