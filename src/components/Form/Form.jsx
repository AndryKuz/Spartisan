import { useForm } from "react-hook-form";
import style from "./Form.module.scss";
import { GoAlert } from "react-icons/go";

const Form = ({styleForm}) => {

  const classForm = styleForm === 'row' ? style.styleFormRow : style.form;
  const classError = styleForm === 'row' ? style.errorMessageRow : style.errorMessage;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {},
    mode: "onBlur",
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className={classForm}>
          <div className={style.input}>
            <input
              {...register("name", {
                required: "Required to fill out",
                minLength: { value: 5, message: "Минимум 5 символов" },
              })}
              placeholder="Name"
              autoComplete="off"
            />
            <div className={classError}>
              {errors?.name && (
                <div>
                  <GoAlert />
                  <span>{errors?.name.message || "Error!"}</span>
                </div>
              )}
            </div>

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
            <div className={classError}>
              {errors?.phone && (
                <div>
                  <GoAlert />
                  <span>{errors?.phone.message || "Invalid phone number"}</span>
                </div>
              )}
            </div>

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
            <div className={classError}>
              {errors?.email && (
                <div>
                  <GoAlert />
                  <span>{errors?.email.message || "Invalid email address"}</span>
                </div>
              )}
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
