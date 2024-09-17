import { useSelector } from "react-redux";
import { MainButton, nameMainButton } from "../Button/MainButton";
import { Link } from "react-router-dom";

import style from "./CartInfo.module.scss";
import { selectPrograms } from "features/booking/bookingSlice";

const CartInfo = ({ program = [] }) => {
  const programSelected = useSelector(selectPrograms);

  return (
    <div className={style.cartInfo}>
      <div className={style.left}>
        <h3>"{program.title}"</h3>
        <span></span>
        <p className={style.price}>€{program.price}per person</p>
        <p className={style.time}>{program.time} minutes / 5 guests maximum</p>
        <div style={{ display: "flex" }}>
          <Link to={`/booking/${programSelected[0].id}`}>
            <MainButton buttonLabel={nameMainButton[1]} styleArrow="order" />
          </Link>
        </div>
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
