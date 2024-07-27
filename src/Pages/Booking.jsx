import Title from "../common/Title";
import Button from "../components/Button/Button";
import { nameButtonProgram, nameTitle } from "../constants/common";
import style from "./Booking.module.scss";
import { MainButton, nameMainButton } from "../components/Button/MainButton";

import { ReactComponent as Data } from "../assets/images/data.svg";
import { ReactComponent as Minus } from "../assets/images/minus.svg";
import { ReactComponent as Plus } from "../assets/images/plus.svg";
import { useState } from "react";

const Booking = () => {
  const [one, setOne] = useState(1);
  const increment = () => setOne(one + 1);
  const decrement = () => {
    if(one > 1) {
      setOne(one - 1);
    }
  };
  return (
    <section className={style.booking}>
      <Title titleStart={nameTitle[4][1]} titleEnd={nameTitle[4][2]} />
      <h5>Program</h5>
      <div className={style.buttons}>
        {nameButtonProgram.map(({ title }) => (
          <Button key={title} nameButtonProgram={title} />
        ))}
      </div>
      <div className={style.time}>
        <h5>Time</h5>
        <form className={style.toggleTime}>
          <div>
            <input type="radio" id="option1" name="options" value="1" />
            <label className={style.first} for="option1">
              60
            </label>
            <label className={style.second} for="option1">
              minutes
            </label>
          </div>
          <div>
            <input type="radio" id="option2" name="options" value="2" />
            <label className={style.first} for="option2">
              120
            </label>
            <label className={style.second} for="option1">
              minutes
            </label>
          </div>
        </form>
      </div>
      <div className={style.search}>
        <div className={style.data}>
          <span>Date</span>
          <Data />
        </div>
        <div className={style.people}>
          <div className={style.minus} onClick={decrement}>
            <Minus />
          </div>
          <div className={style.count}>{one}</div>
          <div className={style.plus} onClick={increment}>
            <Plus />
          </div>
        </div>
        <h6>People</h6>
        <MainButton buttonLabel={nameMainButton[0]} />
      </div>
      <p>Booking places will appear after you click the Search button</p>
    </section>
  );
};

export default Booking;
