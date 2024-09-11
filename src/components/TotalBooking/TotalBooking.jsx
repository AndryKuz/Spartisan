import { useSelector } from "react-redux";

import style from "./TotalBooking.module.scss";

import {
  selectDate,
  selectTime,
  selectCountPeople,
  selectPrograms,
  selectServices,
} from "../../features/booking/bookingSlice";
import { changeDate, parseToNumber} from "constants/common";
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

  
  const resSumServices = parseToNumber(services);
 const totalPrice = resSumServices + program[0].price;

 console.log(services);
 

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
          <ul>
            {services.map((item) => (
              <li key={item.id}>

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
