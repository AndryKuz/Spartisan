import style from "./CartImages.module.scss";

const CartImages = ({ program}) => {


    return (
        <div className={style.cart} style={{ backgroundColor: `${program.color}` }}>
            <div className={style.image}>{program.image}</div>
        </div>
    );
};

export default CartImages;
