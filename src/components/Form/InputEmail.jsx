import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import style from "./Form.module.scss";

const InputEmail = ({ handleBlurred, classError }) => {

  
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={style.input}>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email address",
          },
        })}
        type="email"
        placeholder="Email"
        autoComplete="off"
        onBlur={() => handleBlurred("email")}
      />
      <ErrorMessage error={errors?.email} className={classError} />
    </div>
  );
};

export default InputEmail;
