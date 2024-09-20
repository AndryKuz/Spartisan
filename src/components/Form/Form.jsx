import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import style from "./Form.module.scss";

import ErrorMessage from "./ErrorMessage";
import {
  addError,
  formValidated,
  getValueForm,
} from "features/booking/bookingSlice";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import TextArea from "./TextArea";

const Form = ({ styleForm }) => {
  const dispatch = useDispatch();

  const [isBlurred, setIsBlurred] = useState({
    name: false,
    phone: false,
    email: false,
    text: false,
  });

  const allBlurred = Object.values(isBlurred).every(Boolean);
  const classForm = styleForm === "row" ? style.styleFormRow : style.form;
  const classError =
    styleForm === "row" ? style.errorMessageRow : style.errorMessage;

  const methods = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    trigger,
    register,
  } = methods;

  useEffect(() => {
    if (isValid && allBlurred) {
      const formValues = {
        name: getValues("name"),
        phone: getValues("phone"),
        email: getValues("email"),
        text: getValues("text"),
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <div className={classForm}>
            <div className={style.inputs}>
              <InputName
                handleBlurred={handleBlurred}
                classError={classError}
              />

              <InputPhone
                handleBlurred={handleBlurred}
                classError={classError}
              />

              <InputEmail
                handleBlurred={handleBlurred}
                classError={classError}
              />
            </div>
            <TextArea handleBlurred={handleBlurred} classError={classError} />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Form;
