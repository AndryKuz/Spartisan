import { ReactComponent as Svg } from "../../assets/images/cart/short.svg";
import style from './CartPrograms.module.scss'
import CartImages from "./CartImages";
import CartInfo from "./CartInfo";


const CartPrograms = () => {
    return (
        <section className={style.cartProgram}>
            <div className={style.images}>
                <CartImages color='#1C1C1C' svg={<Svg />} />
                <h3>"Short pleasure"</h3>
            </div>
            <span></span>
            <div>
                <CartInfo />
            </div>
        </section>
    );
};

export default CartPrograms;
