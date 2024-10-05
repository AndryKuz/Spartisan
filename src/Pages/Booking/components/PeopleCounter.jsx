import { useDispatch, useSelector } from "react-redux";

import style from "./PeopleCounter.module.scss";

import { FaMinus, FaPlus } from "react-icons/fa6";

import {
  changedCountPeople,
  selectCountPeople,
} from "features/booking/bookingSlice";
import { useCallback } from "react";

const PeopleCounter = () => {
  const dispatch = useDispatch();
  const countPeople = useSelector(selectCountPeople);

  const handlePlusCount = useCallback(() => {
    if(countPeople < 20) {
        dispatch(changedCountPeople(countPeople + 1)); 
    }
    
  });
  const handleMinusCount = useCallback(() => {
    if(countPeople > 1 ) {
        dispatch(changedCountPeople(countPeople - 1));    
    }
   
  });

  return (
    <div className={style.people}>
      <div className={style.minus} onClick={handleMinusCount}>

        <FaMinus/>
      </div>
      <div className={style.count}>{countPeople}</div>
      <div className={style.plus} onClick={handlePlusCount}>
       <FaPlus/>
      </div>
    </div>
  );
};

export default PeopleCounter;
