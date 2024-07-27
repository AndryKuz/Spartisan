import style from "./Button.module.scss";
import { ReactComponent as Info } from "../../assets/images/info.svg";

const Button = ({ nameButtonProgram }) => {
  return (
    <div className={style.buttonWrapper}>
      <button className={style.but}>{nameButtonProgram}</button>
      <div className={style.info}>
        <div className={style.wrapCyrcle}>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Button;
