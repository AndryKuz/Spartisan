import { useRef } from "react";
import Slider from "react-slick";

import style from "./OurReviews.module.scss";

import { Arrow } from "common/Arrow";

import Title from "common/Title/Title";
import ReviewCart from "../ReviewsCart/ReviewsCart";
import Navigation from "common/Navigation";

import { nameTitle } from "common/Title/titleData";
import { reviewsData } from "constants/reviewsData";

const OurReviews = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={style.ourReviews}>
      <div className={style.title}>
        <Title titleStart={nameTitle[2][1]} titleEnd={nameTitle[2][2]} />
        <div className={style.navigation}>
          <div className={style.wrapperArrow} onClick={goToPrev}>
            <Arrow direction="left" />
            <div className={style.left}></div>
          </div>
          <div onClick={goToNext}>
            <Arrow direction="right" />
          </div>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {reviewsData.map((item) => {
          return <ReviewCart key={item.id} item={item} />;
        })}
      </Slider>
      <div>
        <Navigation onPrev={goToPrev} onNext={goToNext} />
      </div>
    </div>
  );
};

export default OurReviews;
