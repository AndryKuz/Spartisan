import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import style from "./Form.module.scss";

import ErrorMessage from "./ErrorMessage";
import { addError, formValidated, selectTime } from "features/booking/bookingSlice";

const Form = ({ styleForm }) => {
  const dispatch = useDispatch();
  const hour = useSelector(selectTime);

  const classForm = styleForm === "row" ? style.styleFormRow : style.form;
  const classError =
    styleForm === "row" ? style.errorMessageRow : style.errorMessage;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });


  useEffect(() => {
    if (!isValid) {
      dispatch(formValidated(null));
      
    } else {
      dispatch(formValidated(true));
      dispatch(addError({index:1, error:[]}));
    }
  }, [isValid]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classForm}>
          <div className={style.inputs}>
            <div className={style.input}>
              <input
                {...register("name", {
                  required: "Required to fill out",
                  minLength: { value: 5, message: "Минимум 5 символов" },
                })}
                placeholder="Name"
                autoComplete="off"
              />
              <ErrorMessage error={errors?.name} className={classError} />
            </div>
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
              />
              <ErrorMessage error={errors?.phone} className={classError} />
            </div>
            <div className={style.input}>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="Email"
                autoComplete="off"
              />
              <ErrorMessage error={errors?.email} className={classError} />
            </div>
          </div>
          <div className={style.textArea}>
            <textarea {...register("text")} placeholder="Text"></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
