import { useSelector } from "react-redux";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useForm } from "react-hook-form";

import style from "./PopupAuth.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { selectFormType } from "auth/redux/authSlice";
import { popupConfig } from "./popupConfig";


const PopupAuth = ({ closePopup }) => {
  const { register, handleSubmit } = useForm();
  const formType = useSelector(selectFormType);
  const auth = getAuth();

  
  const dynamicPopup = (type) => {
    return popupConfig[type];
  };
  const resultPopupContent = dynamicPopup(formType);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
      
  }
  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
      
  }
  const onSubmit = (data) => {
    handleRegister(data.email, data.password)
  };


  return (
    <div className={style.popupWindow}>
      <div className={style.wrapper}>
        <CloseIcon className={style.close} onClick={closePopup} />
        <h3>{resultPopupContent.title}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="E-mail"
            type="email"
            {...register("email", { required: true, maxLength: 20 })}
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
        <MainButton
          buttonLabel={nameMainButton[resultPopupContent.nameButton]}
          styleArrow="order"
        />
      </div>
    </div>
  );
};

export default PopupAuth;
