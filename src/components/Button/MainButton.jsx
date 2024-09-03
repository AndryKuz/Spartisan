import style from "./Button.module.scss";

import ArrowButton from '../../assets/images/arrowButton.svg';

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
];

export const MainButton = ({ buttonLabel, isActive }) => {
  return (
      <button className={style.mainButton} onClick={() => isActive(true)}>{buttonLabel} </button>
  );
};
