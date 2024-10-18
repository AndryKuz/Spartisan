import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./Gift.module.scss";

import GiftImg from "assets/images/gift.png";

import ThreeReasonsBlock from "common/ThreeReasonsBlock";
import Title from "common/Title/Title";

import Form from "components/Form/Form";
import RadioButton from "common/RadioButton/RadioButton";
import { threeReasons } from "common/ThreeReasonsBlock";
import { labelRadio } from "common/RadioButton/RadioButton";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { nameTitle } from "common/Title/titleData";
import { selectFormValid } from "features/booking/bookingSlice";
import { ROUTES } from "components/Routes";

const Gift = () => {
  const [selected, setSelected] = useState("");
  const [isCustomChecked, setCustomChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [priceAmount, setPriceAmount] = useState("");
  const [errorsAmount, setErrorAmount] = useState('');
  const [errorsForm, setErrorAmountForm] = useState('');
  const formValid = useSelector(selectFormValid);
  const navigate = useNavigate();


  

  const nameLabelButton = labelRadio.slice(0, 6);
  const handleChange = (id) => {
    setSelected(id);
    const res = labelRadio.find((item) => item.id === id);

    if (res && res.label === "Custom amount") {
      setCustomChecked(true);
      setPriceAmount(inputValue);
    } else {
      setCustomChecked(false);
      setInputValue(0);
      setPriceAmount(res ? res.label : "");
    }
  };
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
    if (isCustomChecked) {
      setPriceAmount(event.target.value);
    }
  };

  const hanldeClickOrder = () => {
    if (priceAmount <= 0) {
      setErrorAmount("You need choise amount");
    }
    if(!formValid) {
      setErrorAmountForm('Fill out a valid form');
    }
    if (formValid && priceAmount > 0) {
      navigate(ROUTES.RESULT, { state: { status: "paymentSucc" } });
    }
  };
  useEffect(() => {
    if (priceAmount > 0) {
      setErrorAmount([]);
    }
  }, [priceAmount]);

  return (
    <section className={style.gift}>
      <Title titleStart={nameTitle[5][1]} titleEnd={nameTitle[5][2]} />
      <div className={style.subtitle}>
        <span>THE BATHHOUSE GIFT VOUCHER:</span>
        <span className={style.bold}>UNIQUE GIFT!</span>
        <img src={GiftImg} alt="gift voucher" />
      </div>
      <div className={style.textWrapper}>
        <p>
          Whether you are looking for the ideal present for your friend, a
          parting gift for a colleague or the perfect Christmas present for your
          friends and family, the bathhouse gift card is a definite
          crowd-pleaser. Our bathhouse gift cards are valid for one year.
        </p>
      </div>
      <div className={style.subtitle}>
        <span>BUY A GIFT VOUCHER </span>
      </div>
      <div className={style.textWrapper}>
        <p>
          Your gift card will be sent to you by email you will have the choice
          to forward the email or to print the Gift{" "}
        </p>
        <p>Card (pdf format). No email will be sent to the beneficiary.</p>
      </div>
      <div className={style.giftImgMobile}>
        <img src={GiftImg} alt="gift voucher" />
      </div>
      <div className={style.reasons}>
        <span>three reasons TO BUY THE GIFT VOUCHER CARD</span>
      </div>
      <div className={style.reasonsToBuy}>
        {threeReasons.map((item) => (
          <ThreeReasonsBlock key={item.count} {...item} />
        ))}
      </div>
      <div className={style.select}>
        <div className={style.radio}>
          {nameLabelButton.map((label) => (
            <RadioButton
              key={label.id}
              checked={selected === label.id}
              onChange={handleChange}
              label={label.label}
              currency={label.currency}
              id={label.id}
            />
          ))}
          <div className={style.input}>
            <input
              type="number"
              placeholder="Your amount"
              className={style.amount}
              title="Only numbers are allowed"
              onChange={handleChangeInput}
              disabled={!isCustomChecked}
              value={inputValue}
            />
            {errorsAmount && <p>{errorsAmount}</p>}
          </div>
        </div>
      </div>
      <Form />
      <br />
      <div style={{ display: "flex" }}>
        <MainButton
          buttonLabel={nameMainButton[2]}
          onClick={hanldeClickOrder}
        />
      </div>
      {errorsForm && <p className={style.errors}>{errorsForm}</p>}
    </section>
  );
};

export default Gift;
