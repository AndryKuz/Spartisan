import { useEffect, useState } from "react";

import style from "./SearchPlace.module.scss";

import { dateTimeOneHour,dateTimeTwoHour } from "../Button/dateTime";
import { randomizeDisable } from "constants/common";

import TimeButton from "../Button/TimeButton";
import Form from "components/Form/Form";
import AddServicesToOrder from "../AddServices/AddServicesToOrder";

import TotalBooking from "../TotalBooking/TotalBooking";

const SearchPlace = ({time}) => {

  const [disabledTimes, setDisabledTimes] = useState([]);

  const choiceTime  = () => {
    let result;
    if(time === 7) {
      result = randomizeDisable(dateTimeOneHour);

    } else if (time === 8) {
      result = randomizeDisable(dateTimeTwoHour);
    }
    return result;
  }

 
  
useEffect(() => {
  const randomizedTimes = choiceTime();
  setDisabledTimes(randomizedTimes);
},[time])

const disableShuffle = randomizeDisable(disabledTimes);
  
  return (
    <div className={style.searchPlace}>
      <div className={style.buttonsTime}>
        {disableShuffle.map((button) => (
          <TimeButton key={button.id} children={button} />
        ))}
      </div>
      <span className={style.divider}></span>

      <AddServicesToOrder />
      <span className={style.divider}></span>
      <Form styleForm="row" />
      <br />
      <TotalBooking />
      <br />
    </div>
  );
};

export default SearchPlace;
