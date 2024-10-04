
import style from './TimeRadioButton.module.scss';

import RadioButton, { labelRadio } from "common/RadioButton/RadioButton";


const TimeRadioButton = ({handleChange, selected}) => {
    
  const nameRadio = labelRadio.slice(6, 8);
  return (
    <div className={style.time}>
        <h5>Time</h5>
        <div className={style.radio}>
          {nameRadio.map((item) => (
            <RadioButton
              key={item.id}
              checked={selected === item.id}
              label={item.label}
              currency={item.currency}
              id={item.id}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
  );
};

export default TimeRadioButton;