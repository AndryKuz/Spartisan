import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

import style from "./PopupAuth.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { selectFormType, setCurrentUser, setUser } from "auth/redux/authSlice";
import { popupConfig } from "./popupConfig";
import ValidPopup from "./ValidPopup";

const PopupAuth = ({ closePopup }) => {
  const dispatch = useDispatch();
  const db = getFirestore();
  const auth = getAuth();
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const formType = useSelector(selectFormType);

  const dynamicPopup = (type) => {
    return popupConfig[type];
  };
  const resultPopupContent = dynamicPopup(formType);

  const handleLogin = async (email, password) => {
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      const { email: userEmail, uid } = userLogin.user;
      const idToken = await userLogin.user.getIdToken();
      dispatch(setUser({ email: userEmail, id: uid, token: idToken }));
      return true;
    } catch (err) {
      console.error("Firebase error:", err);
      if (err.code === "auth/wrong-password") {
        setErrorPassword("Wrong password. Try again.");
      } else if (err.code === "auth/invalid-email") {
        setErrorPassword("Invalid email format.");
      } else if (err.code === "auth/user-not-found") {
        setErrorPassword("No user found with this email.");
      } else {
        setErrorPassword(`Sign-in error: ${err.message}`);
      }
      return false;
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
      await setDoc(doc(db, "users", userRegister.user.uid), {
        name: name,
        email: email,
        createdAt: new Date(),
      });
      dispatch(setUser({ email: userEmail, id: uid, token: accessToken }));
      return true;
    } catch (err) {
      console.log(err);

      if (err.code === "auth/email-already-in-use") {
        setErrorEmail("This email is already registered.");
      } else {
        setErrorEmail("An error occurred during registration.");
      }
      return false;
    }
  };
  const onSubmit = async (data) => {
    let isSuccessful = false;
    if (formType === "register") {
      isSuccessful = await handleRegister(data.email, data.password);
    } else {
      isSuccessful = await handleLogin(data.email, data.password);
    }

    if (isSuccessful && errorEmail.length === 0) {
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
          <div className={style.wrapperInput}>
            <input
              placeholder="E-mail"
              autoComplete="off"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <ValidPopup error={errors?.email} />
            {errorEmail && <p>{errorEmail}</p>}
          </div>
          {resultPopupContent.input && (
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errorPassword ? <p>{errorPassword}</p> : ""}
              <ValidPopup error={errors?.password} />
            </div>
          )}
          {resultPopupContent.message && (
            <p>We will send you your password to this email</p>
          )}
        </form>
        <div style={{marginTop:"10px"}}>
          <MainButton
            buttonLabel={nameMainButton[resultPopupContent.nameButton]}
            styleArrow="order"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default PopupAuth;
