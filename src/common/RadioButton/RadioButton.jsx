import React from "react";
import style from "./RadioButton.module.scss";

export const labelRadio = [
    {currency:'€', label: '50',id:1},
    {currency:'€', label: '100',id:2},
    {currency:'€', label: '150',id:3},
    {currency:'€', label: '200',id:4},
    {currency:'€', label: '250',id:5},
    {currency:'', label: 'Custom amount',id:6},
    {currency:'60', label: 'minutes',id:7},
    {currency:'120', label: 'minutes',id:8},
];

const RadioButton = ({ checked, onChange, currency, label, id }) => {
  return (
    <label className={style.radioContainer}>
      <input
        type="radio"
        checked={checked}
        onChange={() => onChange(id)}
        value={id}
        className={style.radioInput}
      />
      <span className={style.radioCheckmark}></span>
      <div className={style.labelName}>
        <span>{currency}</span>
        <span>{label}</span>
      </div>
    </label>
  );
};

export default RadioButton;
