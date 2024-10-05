import { toggleForm } from "auth/redux/authSlice";
import { useDispatch} from "react-redux";

import style from './PopupAuth.module.scss'

import PopupAuth from "./PopupAuth";

const UserForm = () => {
  const dispatch = useDispatch();

  const closePopup = () => dispatch(toggleForm(false));


  return (
    <>
      <div className={style.overlayPopup} onClick={closePopup}/>
      <PopupAuth closePopup={closePopup}/>
    </>
  );
};

export default UserForm;
