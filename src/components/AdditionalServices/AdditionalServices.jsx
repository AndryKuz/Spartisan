import style from "./AdditionalServices.module.scss";
import Title from "../../common/Title";
import { nameTitle } from "../../constants/common";
import ServiceCart from "./ServiceCart";

const AdditionalServices = () => {
    return (
        <section className={style.service}>
            <Title titleStart={nameTitle[1][1]} titleEnd={nameTitle[1][2]} />
            <div className={style.icon}>
                <ServiceCart />
            </div>
        </section>
        
    );
};

export default AdditionalServices;
