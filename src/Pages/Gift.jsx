import ThreeReasonsBlock from "../common/ThreeReasonsBlock";
import Title from "../common/Title";
import { nameTitle } from "../constants/common";
import style from "./Gift.module.scss";

const Gift = () => {
  return (
    <section className={style.gift}>
      <Title titleStart={nameTitle[5][1]} titleEnd={nameTitle[5][2]} />
      <div className={style.subtitle}>
        <span>THE BATHHOUSE GIFT VOUCHER:</span>
        <span className={style.bold}>UNIQUE GIFT!</span>
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
      <div className={style.reasons}>
        <span>three reasons TO BUY THE GIFT VOUCHER CARD</span>
      </div>
      <div className={style.test}>
        <ThreeReasonsBlock/>
        <ThreeReasonsBlock/>
        <ThreeReasonsBlock/>
      </div>
    </section>
  );
};

export default Gift;
