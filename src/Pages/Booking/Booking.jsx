import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./Booking.module.scss";

import Title from "common/Title";
import Button from "components/Button/Button";
import Search from "./components/Search";
import SearchPlace from "components/SearchPlace/SearchPlace";

import { nameButtonProgram } from "constants/programCart";
import { nameTitle } from "constants/common";

import {
  selectPrograms,
  selectValidForm,
  validatedForm,
} from "../../features/booking/bookingSlice";
import { MainButton, nameMainButton } from "components/Button/MainButton";

const Booking = () => {
  const dispatch = useDispatch();

  const validatedFormSearch = useSelector(selectValidForm);
  const programList = useSelector(selectPrograms);

  const isActive = (program) => program.id === programList[0]?.id;

  const handleValidation = () => {
    dispatch(validatedForm());
  };

  const handleClickBookNow = () => {

    
  }

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
      <Search handleValidation={handleValidation} />
      {!validatedFormSearch ? (
        <p>Booking places will appear after you click the Search button</p>
      ) : (
        <>
          <SearchPlace />
          <div style={{ marginBottom: "20px"}}>
            <MainButton buttonLabel={nameMainButton[1]} widthButton={"90%"} styleArrow='book'/>
          </div>
        </>
      )}
    </section>
  );
};

export default Booking;
