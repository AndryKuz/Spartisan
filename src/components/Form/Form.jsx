import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import style from "./Form.module.scss";

import {
  addError,
  formValidated,
  getValueForm,
} from "features/booking/bookingSlice";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";
import TextArea from "./TextArea";
import InputPassword from "./InputPassword";

const Form = ({ styleForm, popupForm }) => {
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
  console.log(classError);

  const methods = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const {
    formState: { isValid },
    getValues,
    trigger,
  } = methods;

  const handleBlurred = async (field) => {
    const result = await trigger(field);
    setIsBlurred((prevState) => ({ ...prevState, [field]: true }));
    return result;
  };

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

  return (
    <>
      {!popupForm ? (
        <FormProvider {...methods}>
          <form>
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
      ) : (
        <FormProvider {...methods}>
          <form>
            <div className={classForm}>
              <div className={style.inputs}>
                <InputEmail
                  handleBlurred={handleBlurred}
                  classError={classError}
                />
                <InputPassword handleBlurred={handleBlurred}
                  classError={classError}/>
              </div>

            </div>
          </form>
        </FormProvider>
      )}
    </>
  );
};

export default Form;
