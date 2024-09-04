import style from './CartPrograms.module.scss'

import CartImages from "./CartImages";
import CartInfo from "./CartInfo";
import { useSelector } from 'react-redux';
import { selectPrograms } from '../../features/booking/bookingSlice';


const CartPrograms = () => {

    const program = useSelector(selectPrograms);

 
    return (
        <section className={style.cartProgram}>
            <div className={style.images}>
                <CartImages program={program[0]} />
                <h3>{program[0].title}</h3>
            </div>
            <span></span>
            <div>
                <CartInfo program={program[0]}/>
            </div>
        </section>
    );
};

export default CartPrograms;
