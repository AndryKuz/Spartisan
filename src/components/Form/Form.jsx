import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import style from "./Form.module.scss";

import ErrorMessage from "./ErrorMessage";
import {
  addError,
  formValidated,
  getValueForm,
} from "features/booking/bookingSlice";

const Form = ({ styleForm }) => {
  const dispatch = useDispatch();

  const [isBlurred, setIsBlurred] = useState({
    name: false,
    phone: false,
    email: false,
    text: false
  });
  
  const allBlurred = Object.values(isBlurred).every(Boolean);
  const classForm = styleForm === "row" ? style.styleFormRow : style.form;
  const classError =
    styleForm === "row" ? style.errorMessageRow : style.errorMessage;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
  } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  useEffect(() => {
    if (isValid && allBlurred) {
      const formValues = {
        name: getValues("name"),
        phone: getValues("phone"),
        email: getValues("email"),
        text: getValues("text")
      };
      dispatch(getValueForm(formValues));
      dispatch(formValidated(true));
      dispatch(addError({ index: 1, error: [] }));
    } else {
      dispatch(formValidated(null));
    }
  }, [isValid, allBlurred]);

  const handleBlurred = async (field) => {
    const result = await trigger(field);
    setIsBlurred((prevState) => ({ ...prevState, [field]: true }));
    return result;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classForm}>
          <div className={style.inputs}>
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
                onBlur={() => handleBlurred("email")}
              />
              <ErrorMessage error={errors?.email} className={classError} />
            </div>
          </div>
          <div className={style.textArea}>
            <textarea
              {...register("text", {
                required: "Required to fill out",
                minLength: { value: 1, message: "Minimum 1 characters" },
              })}
              placeholder="Text"
              onBlur={() => handleBlurred("text")}
            ></textarea>
            <ErrorMessage error={errors?.text} className={classError} />
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
