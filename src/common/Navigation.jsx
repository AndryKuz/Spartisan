import { Arrow } from './Arrow';
import style from './Navigation.module.scss'

const Navigation = ({ onPrev, onNext }) => {

  
  return (
    <div className={style.navigation}>
      <div className={style.wrapperArrow} onClick={onPrev}>
        <Arrow direction="left" />
        <div className={style.left}></div>
      </div>
      <div onClick={onNext}>
        <Arrow direction="right" />
      </div>
    </div>
  );
};

export default Navigation;
