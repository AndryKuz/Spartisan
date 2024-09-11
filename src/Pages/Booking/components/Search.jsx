import { useState } from "react";
import { useSelector } from "react-redux";

import style from "./Search.module.scss";

import Calendar from "components/Calendar/Calendar";
import PeopleCounter from "./PeopleCounter";

import { ReactComponent as Data } from "assets/images/data.svg";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { selectDate, selectErrors } from "features/booking/bookingSlice";

const Search = ({ handleValidation }) => {
  const [isVisibleCalendar, setVisibleCalendar] = useState(false);
  const date = useSelector(selectDate);

  const errors = useSelector(selectErrors);

  return (
    <div className={style.search}>
      <div className={style.data}>
        <span>Date: {date}</span>
        <Data onClick={() => setVisibleCalendar(true)} />
      </div>
      {isVisibleCalendar && (
        <Calendar onHide={() => setVisibleCalendar(false)} />
      )}
      <PeopleCounter />
      <h6>People</h6>
      <MainButton
        buttonLabel={nameMainButton[0]}
        onClick={handleValidation}
        styleArrow='search'
        widthButton='250px'
      />
      {errors.length > 0 && (
        <div className={style.errors}>
          {errors.map((errors, i) => (
            <div key={i}>{errors}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
