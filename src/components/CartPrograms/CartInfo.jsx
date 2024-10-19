import { useSelector } from "react-redux";
import { MainButton, nameMainButton } from "../Button/MainButton";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import style from "./CartInfo.module.scss";
import { selectPrograms } from "features/booking/bookingSlice";
import { ROUTES } from "components/Routes";

const CartInfo = ({ program = [] }) => {
  const [programSelected] = useSelector(selectPrograms);
  const navigate = useNavigate();

  const subTitleAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        suration: 0.3,
      },
    },
  };
  const handleClick = () => {
    navigate(ROUTES.BOOKING);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.cartInfo}
    >
      <div className={style.left}>
        <h3>"{program.title}"</h3>
        <span></span>
        <p className={style.price}>€{program.price}per person</p>
        <p className={style.time}>{program.time} minutes / 5 guests maximum</p>
        <div style={{ display: "flex" }}>
          <Link to={`/booking/${programSelected.id}`}>
            <MainButton buttonLabel={nameMainButton[1]} />
          </Link>
        </div>
      </div>
      <motion.div variants={subTitleAnimation} className={style.right}>
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
          <div style={{ display: "flex" }}>
            <MainButton
              buttonLabel={nameMainButton[1]}
              onClick={handleClick}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CartInfo;
