import style from "./Button.module.scss";

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
];

export const MainButton = ({ buttonLabel, onClick }) => {

 

  return (
    <button className={style.mainButton} onClick={onClick}>
      {buttonLabel}
    </button>
  );
};
