import style from "./CartPrograms.module.scss";

import CartInfo from "./CartInfo";
import { useSelector } from "react-redux";
import { selectPrograms } from "../../features/booking/bookingSlice";

const CartPrograms = () => {
  const [program] = useSelector(selectPrograms);

  return (
    <section className={style.cartProgram}>
      <div
        className={style.images}
        style={{ backgroundColor: `${program.color}` }}
      >
        <img src={program.image} alt="img" />

      </div>
        <h3>{program.title}</h3>
      <span></span>
      <div className={style.info}>
        <CartInfo program={program} />
      </div>
    </section>
  );
};

export default CartPrograms;
