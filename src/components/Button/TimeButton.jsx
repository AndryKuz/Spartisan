
import style from './Button.module.scss';


const TimeButton = ({children}) => {


  if (!children) {
    return null; 
  } 
  const disabledClass = children.dis === true ? style.disableButton : style.timeButton;

  
  return (
    <button className={disabledClass}>
      {children.hours}
    </button>
  );
};

export default TimeButton;