import { toggleForm } from "auth/redux/authSlice";
import { useDispatch} from "react-redux";

import style from './PopupAuth.module.scss'

import PopupAuth from "./PopupAuth";
import { useEffect } from "react";

const UserForm = () => {
  const dispatch = useDispatch();

  const closePopup = () => dispatch(toggleForm(false));

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    }
  },[])

  return (
    <>
      <div className={style.overlayPopup} onClick={closePopup}/>
      <PopupAuth closePopup={closePopup}/>
    </>
  );
};

export default UserForm;
