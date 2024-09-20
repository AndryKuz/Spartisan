import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

import style from "./Form.module.scss";

const TextArea = ({ handleBlurred, classError }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={style.textArea}>
      <textarea
        {...register("text", {
          required: "Required to fill out",
          // minLength: { value: 1, message: "Minimum 1 characters" },
        })}
        placeholder="Text"
        onBlur={() => handleBlurred("text")}
      />
      <ErrorMessage error={errors?.text} className={classError} />
    </div>
  );
};

export default TextArea;
