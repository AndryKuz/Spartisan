import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import style from "./Booking.module.scss";

import Button from "components/Button/Button";
import Search from "./components/Search";
import SearchPlace from "components/SearchPlace/SearchPlace";
import { MainButton, nameMainButton } from "components/Button/MainButton";

import { nameButtonProgram } from "constants/programCart";

import Title from "common/Title/Title";

import {
  selectPrograms,
  selectValidForm,
  isOpenSearchPlace,
  selectFormValid,
  selectErrors,
  addError,
  successOrder,
  defaultInitialState,
} from "../../features/booking/bookingSlice";
import { ROUTES } from "components/Routes";
import { nameTitle } from "common/Title/titleData";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isErrorMessageTime, setErrorMessageTime] = useState(null);
  const openSearchPlace = useSelector(selectValidForm);
  const [programList] = useSelector(selectPrograms);
  const validBookNow = useSelector(selectFormValid);
  const errors = useSelector(selectErrors);

  const isActive = (program) => program.id === programList?.id;

  const handleValidation = () => {
    dispatch(isOpenSearchPlace());
  };

  const handleClickBookNow = () => {
    if (!validBookNow) {
      dispatch(addError({index:1, error:["fill out a valid form"]}))
    } 
    if(errors[2].length > 0) {
      setErrorMessageTime(true);
    }
    if (validBookNow && errors[2].length === 0) {
      setErrorMessageTime(null);
      dispatch(successOrder());
      dispatch(defaultInitialState());
      navigate(ROUTES.RESULT, { state: { status: "booking" } });
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
            program={program}
            isActive={isActive(program)}
          />
        ))}
      </div>
      <Search handleValidation={handleValidation} />
      {!openSearchPlace ? (
        <p>Booking places will appear after you click the Search button</p>
      ) : (
        <>
          <SearchPlace />
          <div style={{ marginBottom: "20px" }}>
            <MainButton
              buttonLabel={nameMainButton[1]}
              widthButton={"90%"}
              styleArrow="book"
              onClick={handleClickBookNow}
            />
            {errors[1].length > 0 ? (
              <p className={style.error}>{errors[1]}</p>
            ) : (
              ""
            )}
            {isErrorMessageTime > 0 ? (
              <p className={style.error}>{errors[2]}</p>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Booking;
