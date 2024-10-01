import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { inputFirst, inputSecond, inputThird } from "./inputData";
import InputField from "./InputField";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { updateInfo } from "pages/PersonalArea/personalSlice";


const PersonalForm = () => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.personal);
 
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur",defaultValues: {
    ...personalInfo,
  }, });

  const onSubmit = (data) => {
    dispatch(updateInfo(data));
  };
  
const valueInputFirstRow = Object.values(personalInfo.info).slice(0,3);
const valueInputSecondRow = Object.values(personalInfo.info).slice(3,5);
const valueInputThirdRow = Object.values(personalInfo.info).slice(5,8);

  return (
    <div style={{ marginBottom: 150 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {inputFirst.map((field, index) => (
            <InputField
              key={field.name}
              placeholder={field.placeholder}
              name={field.name}
              register={register}
              type={field.type}
              errors={errors}
              validation={field.validation}
              defaultValue={valueInputFirstRow[index] || ""}
            />
          ))}
        </div>
        <div>
          {inputSecond.map((field,index) => (
            <InputField
              key={field.name}
              placeholder={field.placeholder}
              name={field.name}
              register={register}
              type={field.type}
              errors={errors}
              validation={field.validation}
              defaultValue={valueInputSecondRow[index] || ""}
            />
          ))}
        </div>
        <div>
          {inputThird.map((field,index) => (
            <InputField
              key={field.name}
              placeholder={field.placeholder}
              name={field.name}
              register={register}
              type={field.type}
              errors={errors}
              validation={field.validation}
              defaultValue={valueInputThirdRow[index] || ""}
            />
          ))}
        </div>
        <div style={{ display: "flex" }}>
          <MainButton buttonLabel={nameMainButton[6]} />
        </div>
      </form>
      {/* {!isValid && <p>not valid form</p>} */}
    </div>
  );
};

export default PersonalForm;
