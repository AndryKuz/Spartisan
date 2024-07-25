import style from "./ReviewsCart.module.scss";
import Avatar from "../../assets/images/avatarReview.jpg";

const Review = () => {
    return (
        <div className={style.review}>
            <div className={style.main}>
                <div className={style.avatar}>
                    <div className={style.image}>
                        <img src={Avatar} alt='avatar customer' />
                    </div>
                    <h5>Alena K.</h5>
                </div>
                <p>
                    From the first minutes, entering the room, you plunge into
                    the dusk of the taiga forest. Every detail has been thought
                    out! Over the past year I have visited many spas of
                    different levels ... And then I immediately feel the
                    quality! Freestanding bathtubs are just love. And what an
                    understanding and professional staff. I came to relax, not
                    to think about what and how to do.
                </p>
            </div>
            <div className={style.border}></div>
        </div>
    );
};

export default Review;
