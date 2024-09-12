import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";

import style from "./SearchPlace.module.scss";

import { dateTimeOneHour, dateTimeTwoHour } from "../Button/dateTime";
import { randomizeDisable } from "constants/common";

import TimeRadioButton from "pages/Booking/components/TimeRadioButton";
import Form from "components/Form/Form";
import TimeButton from "../Button/TimeButton";
import AddServicesToOrder from "../AddServices/AddServicesToOrder";

import TotalBooking from "../TotalBooking/TotalBooking";
import { addTime} from "features/booking/bookingSlice";


const SearchPlace = () => {
  const dispatch = useDispatch();
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [selected, useSelected] = useState(7);

  const handleChange = (id) => {
    useSelected(id);
  };

  const choiceTime = () => {
    let result;
    if (selected === 7) {
      result = randomizeDisable(dateTimeOneHour);
    } else if (selected === 8) {
      result = randomizeDisable(dateTimeTwoHour);
    }
    return result;
  };
  const handleSelectTime = (selectedTime) => {
    dispatch(addTime([selectedTime]));
  };

  useEffect(() => {
    const randomizedTimes = choiceTime();
    setDisabledTimes(randomizedTimes);
  }, [selected]);

  const disableShuffle = randomizeDisable(disabledTimes);

  return (
    <div className={style.searchPlace}>
      <TimeRadioButton handleChange={handleChange} selected={selected}/>
      <div className={style.buttonsTime}>
        {disableShuffle.map((button) => (
          <TimeButton key={button.id} children={button} onClick={() => handleSelectTime(button.hours)} />
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
