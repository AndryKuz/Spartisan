import style from "./Button.module.scss";

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
];

export const MainButton = ({ buttonLabel, onClick, widthButton }) => {

 const styleButton = {
  width: widthButton
 };

  return (
    <button className={style.mainButton} onClick={onClick} style={{width:styleButton.width}}>
      {buttonLabel}
    </button>
  );
};
