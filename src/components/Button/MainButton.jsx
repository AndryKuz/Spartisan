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
  isActive,
  styleDisabled,
  handleSearch,
}) => {
  const handleClick = () => {
    // isActive(true);
    handleSearch();
  };

  return (
    <button
      className={`${style.mainButton} ${
        styleDisabled ? style.disabledSearchButton : ""
      } `}
      onClick={handleClick}
    >
      {buttonLabel}{" "}
    </button>
  );
};
