import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import style from "./Booking.module.scss";

import Button from "components/Button/Button";
import Search from "./components/Search";
import SearchPlace from "components/SearchPlace/SearchPlace";
import { MainButton, nameMainButton } from "components/Button/MainButton";

import { nameButtonProgram } from "constants/programCart";
import { nameTitle } from "constants/common";
import Title from "common/Title";

import {
  selectPrograms,
  selectValidForm,
  isOpenSearchPlace,
  selectFormValid,
  addErrorButtonBook,
  selectErrors,
  selectTime,
  addErrorTimeSelect,
} from "../../features/booking/bookingSlice";
import { ROUTES } from "components/Routes";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isOpenSearchPlaceSearch = useSelector(selectValidForm);
  const programList = useSelector(selectPrograms);
  const validBookNow = useSelector(selectFormValid);
  const errors = useSelector(selectErrors);
  const hours = useSelector(selectTime);



  const isActive = (program) => program.id === programList[0]?.id;

  const handleValidation = () => {
    dispatch(isOpenSearchPlace());
  };

  const handleClickBookNow = () => {
    if (hours.length === 0) {
      dispatch(addErrorTimeSelect(["You need to select Time"]));
    } else {
      dispatch(addErrorTimeSelect([]));
    }

    if (!validBookNow) {
      dispatch(addErrorButtonBook(["fill out a valid form"]));
    } else  {
      dispatch(addErrorButtonBook([]));
    } 
    if (hours.length > 0 && validBookNow) {
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
            nameButtonProgram={program.title}
            program={program}
            isActive={isActive(program)}
          />
        ))}
      </div>
      <Search handleValidation={handleValidation} />
      {!isOpenSearchPlaceSearch ? (
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
            {errors[2].length > 0 ? (
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
