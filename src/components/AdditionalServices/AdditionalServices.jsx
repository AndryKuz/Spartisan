import Title from "../../common/Title";
import { nameTitle } from "../../constants/common";
import style from "./AdditionalServices.module.scss";
import ServiceCart from "./ServiceCart";

const AdditionalServices = () => {
    return (
        <section className={style.service}>
            <Title title1={nameTitle[1][1]} title2={nameTitle[1][2]} />
            <div className={style.icon}>
                <ServiceCart />
            </div>
        </section>
    );
};

export default AdditionalServices;
