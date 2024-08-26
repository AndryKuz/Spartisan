import style from "./OurReviews.module.scss";

import { Arrow } from "../../common/Arrow";

import Title from "../../common/Title";
import ReviewCart from "../ReviewsCart/ReviewsCart";
import Navigation from "../../common/Navigation";

import { nameTitle } from "../../constants/common";
import { reviewsData } from "../../constants/reviewsData";

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
                {reviewsData.map((item) => {
                    return <ReviewCart key={item.id} item={item}/>
                })}
            </div>
            <div>
                <Navigation/>
            </div>
        </div>
    );
};

export default OurReviews;
