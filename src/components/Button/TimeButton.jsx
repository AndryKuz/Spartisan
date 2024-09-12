
import style from './Button.module.scss';


const TimeButton = ({children = [], onClick, isActiveTime}) => {

  const disabledClass = children.dis === true ? style.disableButton : style.timeButton;

  
  return (
    <button className={`${disabledClass} ${isActiveTime ? style.activeButtonTime : ''}`} onClick={onClick}>
      {children.hours}
    </button>
  );
};

export default TimeButton;