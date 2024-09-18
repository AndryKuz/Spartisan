import { useDispatch } from "react-redux";

import style from "./PopupAuth.module.scss";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { MainButton, nameMainButton } from "components/Button/MainButton";
import { toggleForm } from "auth/redux/authSlice";

const PopupAuth = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const closeForm = () => dispatch(toggleForm(false));

  return (
    <div className={style.popupWindow}>
      <div className={style.wrapper}>
        <CloseIcon className={style.close} onClick={closeForm} />
        <h3>Registration</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="E-mail/Phone"
            {...register("emailPhone", { required: true, maxLength: 20 })}
          />
          <input
          type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              maxLength: 20,
              minLength: 8,
            })}
          />
        </form>
        <MainButton buttonLabel={nameMainButton[3]} styleArrow="order" />
      </div>
    </div>
  );
};

export default PopupAuth;
