import style from "./TimeButton.module.scss";

const TimeButton = ({ children = [], onClick, isActiveTime }) => {
  const disabledTrue = children.dis === true;
  const disabledClass =
    disabledTrue ? style.disableButton : style.timeButton;

  return (
    <button
      className={`${disabledClass} ${
        isActiveTime ? style.activeButtonTime : ""
      }`}
      onClick={onClick}
      disabled={disabledTrue}
    >
      {children.hours}
    </button>
  );
};

export default TimeButton;
