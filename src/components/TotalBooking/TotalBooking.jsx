import { useSelector } from "react-redux";

import style from "./TotalBooking.module.scss";

import {
  selectDate,
  selectTime,
  selectCountPeople,
  selectPrograms,
  selectServices,
} from "../../features/booking/bookingSlice";
import { changeDate, summServices } from "constants/common";
import { useEffect, useState } from "react";

const TotalBooking = () => {
  const [notSelectTime, setNotSelectTime] = useState(false);
  const [timeRange, setTimeRange] = useState([]);
  const dateChoose = useSelector(selectDate);
  const time = useSelector(selectTime);
  const countPeople = useSelector(selectCountPeople);
  const program = useSelector(selectPrograms);
  const services = useSelector(selectServices);

  const dateNew = changeDate(dateChoose);


  const timeFromTo = (hours) => {
    if (hours.length === 0) {
      setNotSelectTime("Not selected time");
      return [];

    } else {
      const timeArray = hours.join().split("-");
      setNotSelectTime(false);
      return timeArray;
    }
  };

  useEffect(() => {
    const result = timeFromTo(time);
    setTimeRange(result);
  }, [time]);


// const activeTime = time.length === 2 ? `from ${time[1]}`

  const arrOrice = services.map((item) => item.price);
  const res = (arr) => {
    const one = arr.map((item) => {
      if (typeof item === "string") {
        item = +item;
      }
    });
  };

  return (
    <div className={style.totalBooking}>
      <div className={style.describeTotal}>
        <div>
          <span>Data:</span>
          {dateNew}
        </div>
        <div>
          <span>Time:</span>
          {notSelectTime || `from ${timeRange[0]} to ${timeRange[1]}`}
        </div>
      </div>
      <div className={style.describeTotal}>
        <div>
          <span>Number of people:</span>
          {countPeople}
        </div>
      </div>
      <div className={style.describeTotal}>
        <div>
          <span>Deep delight:</span>
          {program[0].price}$
        </div>
        <div>
          <span>Aroma fan:</span>
          30$
        </div>
      </div>
      <div className={style.totalPrice}>
        <h3>Price:</h3>
        <p>150$</p>
      </div>
    </div>
  );
};

export default TotalBooking;
