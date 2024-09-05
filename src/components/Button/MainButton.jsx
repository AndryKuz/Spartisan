import style from "./Button.module.scss";

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
];

export const MainButton = ({
  buttonLabel,

  handleSearch,
}) => {
 

  return (
    <button
      className={style.mainButton}
      onClick={() => handleSearch()}
    >
      {buttonLabel}{" "}
    </button>
  );
};
