import style from "./PersonalForm.module.scss";

const InputField = (prop) => {
  const {
    placeholder,
    name,
    register,
    errors,
    validation,
    type,
    defaultValue,
  } = prop;

  return (
    <div className={style.input}>
      <input
        placeholder={placeholder}
        autoComplete="off"
        type={type}
        defaultValue={defaultValue}
        {...register(name, validation)}
      />
      <div className={style.errorMessage}>
        {errors[name] && <span>{errors[name].message || "Ошибка!"}</span>}
      </div>
    </div>
  );
};

export default InputField;
