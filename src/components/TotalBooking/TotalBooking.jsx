import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import style from "./TotalBooking.module.scss";

import { changeDate, parseToNumber } from "constants/common";

import {
  selectDate,
  selectTime,
  selectCountPeople,
  selectPrograms,
  selectServices,
  selectErrors,
  addError,
} from "../../features/booking/bookingSlice";

const TotalBooking = () => {
  const dispatch = useDispatch();
  const [timeRange, setTimeRange] = useState([]);
  const dateChoose = useSelector(selectDate);
  const time = useSelector(selectTime);
  const countPeople = useSelector(selectCountPeople);
  const program = useSelector(selectPrograms);
  const services = useSelector(selectServices);
  const errors = useSelector(selectErrors);

  const resSumServices = parseToNumber(services);
  const totalPrice = resSumServices + program[0].price;

  const dateNew = changeDate(dateChoose);

  const timeFromTo = (timeItem) => {
    if (!timeItem || timeItem.length === 0) {
      return [];
    } else {
      dispatch(addError({ index: 2, error: [] }));
      const timeArray = timeItem
        .map((item) => item.hours)
        .join()
        .split("-");
      setTimeRange(timeArray);
      return timeArray;
    }
  };

  useEffect(() => {
    if (time.length > 0) {
      timeFromTo(time);
    }
  }, [time]);

  const notSelectTimeStyle = errors[2]?.length ? style.notSelectTime : "";
  return (
    <div className={style.totalBooking}>
      <div className={style.describeTotal}>
        <div>
          <span>Data : </span>
          {dateNew}
        </div>
        <div className={notSelectTimeStyle}>
          <span>Time : </span>
          {errors[2]?.length
            ? errors[2]
            : `from ${timeRange[0]} to ${timeRange[1]}`}
        </div>
      </div>
      <div className={style.describeTotal}>
        <div>
          <span>Number of people : </span>
          {countPeople}
        </div>
      </div>
      <div className={style.describeProgram}>
        <div>
          <span>{program[0].title}:</span>
          {program[0].price}$
        </div>
        <div>
          <ul>
            {services.map((item) => (
              <li key={item.id}>
                <span>{item.title}: </span>
                {item.price}$
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.totalPrice}>
        <h3>Price:</h3>
        <p>{totalPrice}$</p>
      </div>
    </div>
  );
};

export default TotalBooking;
