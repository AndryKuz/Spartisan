import { useState } from "react";
import { useSelector } from "react-redux";

import style from "./Booking.module.scss";

import Title from "common/Title";
import Button from "components/Button/Button";

import { MainButton, nameMainButton } from "components/Button/MainButton";

import { ReactComponent as Data } from "assets/images/data.svg";
import { ReactComponent as Minus } from "assets/images/minus.svg";
import { ReactComponent as Plus } from "assets/images/plus.svg";

import { nameButtonProgram } from "constants/programCart";
import { nameTitle } from "constants/common";
import RadioButton, { labelRadio } from "common/RadioButton/RadioButton";
import Calendar from "components/Calendar/Calendar";
import SearchPlace from "components/SearchPlace/SearchPlace";
import { selectPrograms } from "../../features/booking/bookingSlice";

const Booking = () => {
  const [one, setOne] = useState(0);
  const [selected, useSelected] = useState(7);
  const [isVisibleCalendar, setVisibleCalendar] = useState(false);
  const { date = [] } = useSelector((state) => state.booking);
  const [openSearch, setOpenSearch] = useState(false);
  const [errors, setErrors] = useState([]);

  const programList = useSelector(selectPrograms);

  const isActive = (program) => program.id === programList[0]?.id;

  const increment = () => setOne(one + 1);
  const decrement = () => {
    if (one > 1) {
      setOne(one - 1);
    }
  };
  const nameRadio = labelRadio.slice(6, 8);

  const handleChange = (id) => {
    useSelected(id);
  };
  const validateForm = () => {
    let newErrors = [];
    if (date.length === 0) {
      newErrors.push("Select Date");
    }
    if (one === 0) {
      newErrors.push("Select number of people");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSearch = () => {
    if (validateForm()) {
      setOpenSearch(true);
    } else {
      setOpenSearch(false);
    }
  };

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
            isActive={isActive(program)}
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
          <span>Date: {date}</span>
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
        <MainButton
          buttonLabel={nameMainButton[0]}
          isActive={setOpenSearch}
          handleSearch={handleSearch}
        />
        {errors.length > 0 && (
          <div className={style.errors}>
            {errors.map((errors, i) => (
              <div key={i}>{errors}</div>
            ))}
          </div>
        )}
      </div>
      {!openSearch ? (
        <p>Booking places will appear after you click the Search button</p>
      ) : (
        <SearchPlace time={selected} />
      )}
    </section>
  );
};

export default Booking;
