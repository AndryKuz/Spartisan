import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

import style from "./PopupAuth.module.scss";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from "@mui/icons-material/Close";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import {
  selectFormType,
  setCurrentUser,
  setUser,
  toggleFormType,
} from "auth/redux/authSlice";
import { popupConfig } from "./popupConfig";
import ValidPopup from "./ValidPopup";

const PopupAuth = ({ closePopup }) => {
  const dispatch = useDispatch();
  const db = getFirestore();
  const auth = getAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [errorEmail,  ] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const formType = useSelector(selectFormType);

  const gapFormInput = (error) => {
    let removeGapWithErrorInput ;
    if ("email" in error ) {
      removeGapWithErrorInput = style.withoutGap;
    } else return removeGapWithErrorInput = style.form;

    return removeGapWithErrorInput;
  };
  const styleForForm = gapFormInput(errors);

  const dynamicPopup = (type) => {
    return popupConfig[type];
  };
  const resultPopupContent = dynamicPopup(formType);

  const handleTypePopup = (typePopup) => {
    reset();

    if (typePopup === "signup") {
      dispatch(toggleFormType("register"));
    } else {
      dispatch(toggleFormType("signup"));
    }
  };
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
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
}

  return (
    <div className={style.popupWindow}>
      <div className={style.wrapper}>
        <CloseIcon className={style.close} onClick={closePopup} />
        <h3>{resultPopupContent.title}</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styleForForm}
        >
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
            <div className={style.inputPassword}>
              <input
                type={showPassword ? 'text' : 'password'}
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
              <VisibilityIcon onClick={togglePasswordVisibility} id='isVisiblePassword'/>
              <ValidPopup error={errors?.password} />
              {errorPassword && <p>{errorPassword}</p>}
            </div>
          )}
          {resultPopupContent.message && (
            <p>We will send you your password to this email</p>
          )}
        </form>
        <div className={style.changePopup}>
          <h4>Already have an account? </h4>{" "}
          <button onClick={() => handleTypePopup(formType)}>Sign up</button>
        </div>
        <div>
          <MainButton
            buttonLabel={nameMainButton[resultPopupContent.nameButton]}
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </div>
  );
};

export default PopupAuth;
