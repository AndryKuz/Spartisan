import style from "./OurReviews.module.scss";

import Title from "../../common/Title";
import { nameTitle } from "../../constants/common";
import { Arrow } from "../../common/Arrow";
import ReviewCart from "../ReviewsCart/ReviewsCart";

const OurReviews = () => {
    return (
        <div className={style.ourReviews}>
            <div className={style.title}>
                <Title titleStart={nameTitle[2][1]} titleEnd={nameTitle[2][2]} />
                <div className={style.navigation}>
                    <div className={style.wrapperArrow}>
                        <Arrow direction='left' />
                        <div className={style.left}></div>
                    </div>
                    <div>
                        <Arrow direction='right' />
                    </div>
                </div>
            </div>
            <div className={style.reviews}>
                <ReviewCart/>
                <ReviewCart/>
            </div>
        </div>
    );
};

export default OurReviews;
