import style from "./CartImages.module.scss";

const CartImages = ({ color, svg }) => {


    return (
        <div className={style.cart} style={{ backgroundColor: color }}>
            <div className={style.image}>{svg}</div>
        </div>
    );
};

export default CartImages;
