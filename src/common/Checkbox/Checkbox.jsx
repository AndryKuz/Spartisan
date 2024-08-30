import style from "./Checkbox.module.scss";


const CheckboxCustom = ({ children= [] }) => {
  return (
    <label className={style.radioContainer}>
      <input
        type="checkbox"
        // checked={checked}
        // onChange={() => onChange(id)}
        // value={id}
        className={style.radioInput}
      />
      <span className={style.radioCheckmark}></span>
      <div className={style.labelName}>
        <span>{children.services}</span>
      </div>
    </label>
    
  );
};

export default CheckboxCustom;
