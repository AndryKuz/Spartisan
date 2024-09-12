import style from "./Button.module.scss";
import { ReactComponent as Info } from "assets/images/info.svg";
import { useDispatch} from "react-redux";
import { addProgram } from "../../features/booking/bookingSlice";

const Button = ({ program, isActive, nameButtonProgram }) => {
  const dispatch = useDispatch();

  const tooltipClass = program.id < 3 ? style.tooltip : style.tooltipLeft;

  const handleProgram = () => {
    dispatch(addProgram(program));
    
  };

  return (
    <div className={style.buttonWrapper}>
      <button
        className={`${style.but} ${isActive ? style.activeButton : ""}`}
        onClick={handleProgram}
      >
        {nameButtonProgram}
      </button>
      <div className={style.info}>
        <div className={style.wrapCircle}>
          <Info />
          <div className={tooltipClass}>
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
