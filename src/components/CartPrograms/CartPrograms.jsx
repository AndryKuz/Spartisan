import { ReactComponent as Svg } from "../../assets/images/cart/short.svg";

import CartImages from "./CartImages";
import CartInfo from "./CartInfo";


const CartPrograms = () => {
    return (
        <section style={{ marginBottom: '80px', display: 'flex' }}>
            <div>
                <CartImages color='#1C1C1C' svg={<Svg />} />
            </div>
            <div>
                <CartInfo />
            </div>
        </section>
    );
};

export default CartPrograms;
