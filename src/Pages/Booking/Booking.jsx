import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Booking.module.scss";

import Title from "common/Title";
import Button from "components/Button/Button";
import Search from "./components/Search";
import SearchPlace from "components/SearchPlace/SearchPlace";

import { nameButtonProgram } from "constants/programCart";
import { nameTitle } from "constants/common";
import RadioButton, { labelRadio } from "common/RadioButton/RadioButton";

import {
  selectPrograms,
  selectValidForm,
  validatedForm,
} from "../../features/booking/bookingSlice";

const Booking = () => {
  const dispatch = useDispatch();
  const [selected, useSelected] = useState(7);
  const validatedFormSearch = useSelector(selectValidForm);
  const programList = useSelector(selectPrograms);
  
  

  const isActive = (program) => program.id === programList[0]?.id;

  const nameRadio = labelRadio.slice(6, 8);

  const handleChange = (id) => {
    useSelected(id);
  };
  const handleValidation = () => {
    dispatch(validatedForm());
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
      <Search handleValidation={handleValidation} />
      {!validatedFormSearch ? (
        <p>Booking places will appear after you click the Search button</p>
      ) : (
        <SearchPlace time={selected} />
      )}
    </section>
  );
};

export default Booking;
