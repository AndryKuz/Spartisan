import { nameMainButton } from "../Button/MainButton";
import style from "./Form.module.scss";

import { MainButton } from "../Button/MainButton";
import { useForm } from "react-hook-form";

import { GoAlert } from "react-icons/go";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
    mode:"onBlur"
  });
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className={style.form}>
          <div className={style.input}>
            <input
              {...register("name", {
                required: "Required to fill out",
                minLength: { value: 5, message: "Минимум 5 символов" },
              })}
              placeholder="Name"
              autoComplete="off"
            />
            <div className={style.errorMessage}>
              {errors?.name && (
                <div>
                  <GoAlert />
                  <span>{errors?.name.message || "Error!"}</span>
                </div>
              )}
            </div>
            <input
              {...register("phone")}
              placeholder="Phone"
              autoComplete="off"
            />
            <input
              {...register("email")}
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className={style.textArea}>
            <textarea {...register("text")} placeholder="Text"></textarea>
          </div>
        </div>
        <MainButton buttonLabel={nameMainButton[2]} />
      </form>
    </>
  );
};

export default Form;
