import { useState } from "react";

import style from "./Gift.module.scss";

import GiftImg from "assets/images/gift.png";

import ThreeReasonsBlock from "common/ThreeReasonsBlock";
import Title from "common/Title/Title";

import { threeReasons } from "common/ThreeReasonsBlock";
import RadioButton from "common/RadioButton/RadioButton";
import { labelRadio } from "common/RadioButton/RadioButton";
import Form from "components/Form/Form";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { nameTitle } from "common/Title/titleData";

const Gift = () => {
  const [selected, setSelected] = useState("");

  const nameLabelButton = labelRadio.slice(0, 5);
  const radioCustomPrice = labelRadio.find(
    (item) => item.label === "Custom amount"
  );

  const handleChange = (id) => {
    setSelected(id);
  };
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
          <div className={style.customAmount}>
            <div>
              <RadioButton label={radioCustomPrice.label} />
            </div>
            <input
              type="number"
              placeholder="Your amount"
              className={style.amount}
              title="Only numbers are allowed"
            />
          </div>
        </div>
      </div>
      <Form />
      <br />
      <div style={{ display: "flex" }}>
        <MainButton buttonLabel={nameMainButton[2]} />
      </div>
    </section>
  );
};

export default Gift;
