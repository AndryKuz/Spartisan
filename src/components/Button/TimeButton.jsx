
import style from './Button.module.scss';


const TimeButton = ({children}) => {
  return (
    <button className={style.timeButton}>
      10:00-11:00
    </button>
  );
};

export default TimeButton;