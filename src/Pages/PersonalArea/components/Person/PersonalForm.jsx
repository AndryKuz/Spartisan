import { useForm } from "react-hook-form";
import style from "./PersonalForm.module.scss";
import ErrorInput from "components/Error/ErrorInput";

const PersonalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", {
            required: "Required to fill out",
            minLength: { value: 5, message: "Minimum 5 characters" },
          })}
        />
        <ErrorInput error={errors?.firstName} />
      </div>
      <div>
        <input type="text" placeholder="Last Name" />
        <ErrorInput />
      </div>
      <div>
        <input type="number" placeholder="phone" />
        <ErrorInput />
      </div>
      <div>
        <input type="email" placeholder="email" />
        <ErrorInput />
      </div>
      <div>
        <input type="data" placeholder="data birthday" />
        <ErrorInput />
      </div>
      <div className={style.empty}></div>
      <div>
        <input type="password" placeholder="Old password" />
        <ErrorInput />
      </div>
      <div>
        <input type="password" placeholder="New password" />
        <ErrorInput />
      </div>
      <div>
        <input type="password" placeholder="New password again" />
        <ErrorInput />
      </div>
    </form>
  );
};

export default PersonalForm;
