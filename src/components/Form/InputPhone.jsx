import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import style from "./Form.module.scss";

const InputPhone = ({ handleBlurred, classError }) => {
  
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={style.input}>
      <input
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[0-9]{10,15}$/,
            message: "Enter a valid phone number (10-15 digits)",
          },
        })}
        placeholder="Phone"
        autoComplete="off"
        onBlur={() => handleBlurred("phone")}
      />
      <ErrorMessage error={errors?.phone} className={classError} />
    </div>
  );
};

export default InputPhone;
