
import style from './Button.module.scss';


const TimeButton = ({children = [], onClick}) => {

  const disabledClass = children.dis === true ? style.disableButton : style.timeButton;

  
  return (
    <button className={disabledClass} onClick={onClick}>
      {children.hours}
    </button>
  );
};

export default TimeButton;