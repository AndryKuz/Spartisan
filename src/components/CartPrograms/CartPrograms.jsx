import { ReactComponent as Svg } from "../../assets/images/cart/short.svg";
import style from './CartPrograms.module.scss'
import CartImages from "./CartImages";
import CartInfo from "./CartInfo";


const CartPrograms = ({program}) => {
    return (
        <section className={style.cartProgram}>
            <div className={style.images}>
                <CartImages program={program} />
                <h3>{program.title}</h3>
            </div>
            <span></span>
            <div>
                <CartInfo program={program}/>
            </div>
        </section>
    );
};

export default CartPrograms;
