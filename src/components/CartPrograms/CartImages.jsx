import style from "./CartImages.module.scss";

const CartImages = ({ program }) => {
  return (
    <div className={style.cart} style={{ backgroundColor: `${program.color}` }}>
      <img src={program.image} alt="img" />
    </div>
  );
};

export default CartImages;
