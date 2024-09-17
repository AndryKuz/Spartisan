import style from "./Button.module.scss";

import { ReactComponent as Info } from "assets/images/info.svg";
import { useDispatch } from "react-redux";
import { addProgram } from "../../features/booking/bookingSlice";

const Button = ({ program, isActive}) => {
  const dispatch = useDispatch();


  let infoTooltip;
  if (program.id === 1) {
    infoTooltip = style.shortInfo;
  } else if (program.id === 2) {
    infoTooltip = style.deepInfo;
  } else if (program.id === 3) {
    infoTooltip = style.steamInfo;
  } else if (program.id === 4) {
    infoTooltip = style.yourOwnInfo;
  } else if (program.id === 5) {
    infoTooltip = style.oneToOneInfo;
  }

  const handleProgram = () => {
    dispatch(addProgram(program));
  };

  return (
    <div className={style.buttonWrapper}>
      <button
        className={`${style.but} ${isActive ? style.activeButton : ""}`}
        onClick={handleProgram}
      >
        {program.title}
      </button>
      <div className={style.info}>
        <div className={style.wrapCircle}>
          <Info />
          <div className={`${style.tooltipCommon} ${infoTooltip}`}>
            <p>The program includes:</p>
            <ul>
              {program.program.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
