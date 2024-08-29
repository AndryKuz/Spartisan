import style from './Checkbox.module.scss';

const Checkbox = () => {
    return (
      <label className={style.customCheckbox}>
        <input type="checkbox" />
        <span className={style.checkboxBox}></span>
      </label>
    );
  };

export default Checkbox;