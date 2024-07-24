import { serviceItems } from "../../constants/common";
import style from "./AdditionalServices.module.scss";

const ServiceCart = () => {
    return (
        <div className={style.row}>
            {serviceItems.map((item) => (
                <div key={item.id} className={style.cart}>
                    {item.icon}
                    {item.text}
                </div>
            ))}
        </div>
    );
};

export default ServiceCart;
