import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import style from './Form.module.scss';

const InputName = ({ handleBlurred, classError }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={style.input}>
      <input
        {...register("name", {
          required: "Required to fill out",
          minLength: { value: 5, message: "Minimum 5 characters" },
        })}
        placeholder="Name"
        autoComplete="off"
        onBlur={() => handleBlurred("name")}
      />
      <ErrorMessage error={errors?.name} className={classError} />
    </div>
  );
};

export default InputName;
