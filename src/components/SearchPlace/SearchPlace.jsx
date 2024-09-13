import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";

import style from "./SearchPlace.module.scss";

import { dateTimeOneHour, dateTimeTwoHour } from "../Button/dateTime";
import { initialStateTimeDisable, randomizeDisable } from "constants/common";

import TimeRadioButton from "pages/Booking/components/TimeRadioButton";
import Form from "components/Form/Form";
import TimeButton from "../Button/TimeButton";
import AddServicesToOrder from "../AddServices/AddServicesToOrder";

import TotalBooking from "../TotalBooking/TotalBooking";
import { addTime, selectTime} from "features/booking/bookingSlice";


const SearchPlace = () => {
  const dispatch = useDispatch();
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [selected, useSelected] = useState(7);
  const timeSelect = useSelector(selectTime);

  const isActiveTime = (button) => button.id === timeSelect[0]?.id;

  const handleSelectTime = (selectedTime) => {
    dispatch(addTime([selectedTime]));
  };

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
 

  useEffect(() => {
    const randomizedTimes = choiceTime();
    setDisabledTimes(randomizedTimes);
  }, [selected]);


 
  return (
    <div className={style.searchPlace}>
      <TimeRadioButton handleChange={handleChange} selected={selected}/>
      <div className={style.buttonsTime}>
        {disabledTimes.map((button) => (
          <TimeButton key={button.id} isActiveTime={isActiveTime(button)} children={button} onClick={() => handleSelectTime(button)} />
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
