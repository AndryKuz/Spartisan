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
  const [errors] = useSelector(selectErrors);

  return (
    <div className={style.search}>
      <div className={style.data}>
        <span>Date: {date}</span>
        <Data onClick={() => setVisibleCalendar(true)} />
      </div>
      {isVisibleCalendar && (
        <Calendar onHide={() => setVisibleCalendar(false)} />
      )}
      <div className={style.counterPeople}>
        <PeopleCounter />
        <h6 style={{marginLeft:20}}>People</h6>
      </div>
      <div style={{ paddingRight: 40 }}>
        <MainButton
          buttonLabel={nameMainButton[0]}
          onClick={handleValidation}
          widthButton="250px"
        />
      </div>
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
