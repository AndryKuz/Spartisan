import { useSelector } from "react-redux";

import style from "./PopupAuth.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { selectFormType } from "auth/redux/authSlice";

const PopupAuth = ({ closePopup}) => {

  const { register, handleSubmit } = useForm();
  const formType = useSelector(selectFormType);

  const onSubmit = (data) => {
    console.log(data);
  };

  const dynamicPopup = (type) => {
    const popupConfig = {
      login: {
        title: "Registration",
        input: true,
        message: false,
        nameButton: 3
      },
      signup: {
        title: "Authorization",
        input: true,
        message: false,
        nameButton: 4
      },
      recovery: {
        title: "Password recovery",
        input: false,
        message: true,
        nameButton: 4
      }
    };
  
    return popupConfig[type];
  };
  const resultPopupContent = dynamicPopup(formType);


  return (
    <div className={style.popupWindow}>
      <div className={style.wrapper}>
        <CloseIcon className={style.close} onClick={closePopup} />
        <h3>{resultPopupContent.title}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="E-mail/Phone"
            {...register("emailPhone", { required: true, maxLength: 20 })}
          />
          {resultPopupContent.input ? (
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
          ) : (
            ""
          )}
          {resultPopupContent.message ? (
            <p>We will send you your password to this email</p>
          ) : (
            ""
          )}
        </form>
        <MainButton buttonLabel={nameMainButton[resultPopupContent.nameButton]} styleArrow="order" />
      </div>
    </div>
  );
};

export default PopupAuth;
