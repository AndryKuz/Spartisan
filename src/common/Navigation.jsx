import { Arrow } from './Arrow';
import style from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <div className={style.wrapperArrow}>
        <Arrow direction="left" />
        <div className={style.left}></div>
      </div>
      <div>
        <Arrow direction="right" />
      </div>
    </div>
  );
};

export default Navigation;
