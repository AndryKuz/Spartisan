import { useState } from "react";

import style from "./Booking.module.scss";

import Title from "../common/Title";
import Button from "../components/Button/Button";
import Form from '../components/Form/Form';
import { MainButton, nameMainButton } from "../components/Button/MainButton";

import { ReactComponent as Data } from "../assets/images/data.svg";
import { ReactComponent as Minus } from "../assets/images/minus.svg";
import { ReactComponent as Plus } from "../assets/images/plus.svg";

import { dateTime } from "../components/Button/dateTime";
import { nameButtonProgram } from "../constants/programCart";
import { nameTitle, randomizeDisable } from "../constants/common";
import RadioButton, { labelRadio } from "../common/RadioButton/RadioButton";
import Calendar from "../components/Calendar/Calendar";
import TimeButton from "../components/Button/TimeButton";
import AddServicesToOrder from "../components/AddServices/AddServicesToOrder";

const Booking = () => {
  const [one, setOne] = useState(1);
  const [selected, useSelected] = useState("");
  const [isVisibleCalendar, setVisibleCalendar] = useState(false);

  const handleChange = (id) => {
    useSelected(id);
  };
  const increment = () => setOne(one + 1);
  const decrement = () => {
    if (one > 1) {
      setOne(one - 1);
    }
  };
  const nameRadio = labelRadio.slice(6, 8);

  const disableShuffle = randomizeDisable(dateTime);

  return (
    <section className={style.booking}>
      <Title titleStart={nameTitle[4][1]} titleEnd={nameTitle[4][2]} />
      <h5>Program</h5>
      <div className={style.buttons}>
        {nameButtonProgram.map((program) => (
          <Button
            key={program.id}
            nameButtonProgram={program.title}
            program={program}
          />
        ))}
      </div>
      <div className={style.time}>
        <h5>Time</h5>
        <div className={style.radio}>
          {nameRadio.map((item) => (
            <RadioButton
              key={item.id}
              checked={selected === item.id}
              label={item.label}
              currency={item.currency}
              id={item.id}
              onChange={handleChange}
            />
          ))}
        </div>
        <span className={style.testLine}></span>
      </div>

      <div className={style.search}>
        <div className={style.data}>
          <span>Date</span>
          <Data onClick={() => setVisibleCalendar(true)} />
        </div>
        {isVisibleCalendar && (
          <Calendar onHide={() => setVisibleCalendar(false)} />
        )}
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
      <div className={style.buttonsTime}>
        {disableShuffle.map((button) => (
          <TimeButton key={button.id} children={button} />
        ))}
      </div>
      <span className={style.divider}></span>
      <p>Booking places will appear after you click the Search button</p>
      <AddServicesToOrder />
      <span className={style.divider}></span>
      <Form styleForm='row'/>
    </section>
  );
};

export default Booking;
