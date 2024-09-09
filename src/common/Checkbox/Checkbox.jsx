import { useDispatch } from "react-redux";
import style from "./Checkbox.module.scss";
import { addServices } from "features/booking/bookingSlice";

const CheckboxCustom = ({ children = []}) => {
  const dispatch = useDispatch();

  const handleServices = (item) => {
    dispatch(addServices(item));
  };

  return (
    <label className={style.radioContainer}>
      <input
        type="checkbox"
        value={children.id}
        className={style.radioInput}
        onClick={() => handleServices(children)}
      />
      <span className={style.radioCheckmark}></span>
      <div className={style.labelName}>
        <span>{children.services}</span>
      </div>
    </label>
  );
};

export default CheckboxCustom;
