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

  const dinamicPopup = (type) => {
    const obj = [];
    if (type === "login") {
      obj.title = "Registration";
      obj.input = true;
      obj.message = false;
    } else if (type === "signup") {
      obj.title = "Authorization";
      obj.input = true;
      obj.message = false;
    } else {
      obj.title = "Password recovery";
      obj.input = false;
      obj.message = true;
    }
    return obj;
  };

  const resultPopupContent = dinamicPopup(formType);


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
        <MainButton buttonLabel={nameMainButton[3]} styleArrow="order" />
      </div>
    </div>
  );
};

export default PopupAuth;
