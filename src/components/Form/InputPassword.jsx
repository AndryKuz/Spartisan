import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import style from './Form.module.scss';

const InputPassword = ({ handleBlurred, classError }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={style.input}>
      <input
        {...register("password", {
          required: "Required to fill out",
          minLength: { value: 8, message: "Minimum 8 characters" },
        })}
        placeholder="Password"
        autoComplete="off"
        onBlur={() => handleBlurred("name")}
      />
      <ErrorMessage error={errors?.password} className={classError} />
    </div>
  );
};

export default InputPassword;
