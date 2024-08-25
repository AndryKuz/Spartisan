import style from "./Button.module.scss";
import { ReactComponent as Info } from "../../assets/images/info.svg";

const Button = ({ id, isActive, nameButtonProgram, onClick }) => {

  
  return (
    <div className={style.buttonWrapper}>
      <button className={`${style.but} ${isActive ? style.activeButton : ''}`} onClick={onClick}>{nameButtonProgram}</button>
      <div className={style.info}>
        <div className={style.wrapCyrcle}>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Button;
