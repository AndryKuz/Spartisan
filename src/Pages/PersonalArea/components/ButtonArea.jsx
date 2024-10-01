import { useDispatch, useSelector } from "react-redux";
import style from "./ButtonArea.module.scss";
import { changeButton } from "../personalSlice";
import { personalButton } from "./Person/personalButtonData";

const ButtonArea = () => {
  const dispatch = useDispatch();
  const { activeButton } = useSelector((state) => state.personal);

  const styleActive = (button) =>
    activeButton.id === button.id ? style.activeButton : "";

  const handleButton = (button) => {
    dispatch(changeButton(button));
  };

  return (
    <div className={style.wrapperButton}>
      {personalButton.map((item) => (
        <button
          key={item.id}
          className={` ${style.button} ${styleActive(item)}`}
          onClick={() => handleButton(item)}
        >
          {item.title}{" "}
        </button>
      ))}
    </div>
  );
};

export default ButtonArea;
