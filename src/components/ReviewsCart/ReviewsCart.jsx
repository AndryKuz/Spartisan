import style from "./ReviewsCart.module.scss";

const ReviewCart = ({ item }) => {
    return !item ? (
        <div>no reviews</div>
    ) : (
        <div className={style.review}>
            <div className={style.main}>
                <div className={style.avatar}>
                    <div className={style.image}>
                        {/* <img src={item.avatar} alt='avatar customer' /> */}
                    </div>
                    <h5>{item.name}</h5>
                </div>
                <p>{item.text}</p>
            </div>
            <div className={style.border}></div>
        </div>
    );
};


export default ReviewCart;
