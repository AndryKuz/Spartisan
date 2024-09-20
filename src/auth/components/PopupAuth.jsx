import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";

import style from "./PopupAuth.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { selectFormType, setCurrentUser, setUser } from "auth/redux/authSlice";
import { popupConfig } from "./popupConfig";


const PopupAuth = ({ closePopup }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const formType = useSelector(selectFormType);
  const auth = getAuth();

  const dynamicPopup = (type) => {
    return popupConfig[type];
  };
  const resultPopupContent = dynamicPopup(formType);

  const handleLogin = async (email, password) => {
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      const { email: userEmail, uid, accessToken } = userLogin.user;
      dispatch(
        setUser({ email:userEmail, id: uid, token: accessToken })
      );
    } catch (error) {
      const resEr = () => alert(`'Invalid user' ${error}`)
      return resEr;
    }
  };
  const handleRegister = async (email, password) => {
    try {
      const userRegister = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { email: userEmail, uid, accessToken } = userRegister.user;
      dispatch(
        setUser({ email:userEmail, id: uid, token: accessToken })
      );
    } catch (error) {
      console.error(error);
    }
  };
  const onSubmit = (data) => {
    if (formType === "register") {
      handleRegister(data.email, data.password);
      dispatch(setCurrentUser(true));
      closePopup();
    } else {
      handleLogin(data.email, data.password);
      dispatch(setCurrentUser(true));
      closePopup();
    }
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
            {...register("email", { required: true, maxLength: 30 })}
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
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default PopupAuth;
