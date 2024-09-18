import { selectFormType, toggleForm } from "auth/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

import PopupAuth from "./PopupAuth";

const UserForm = () => {
  const dispatch = useDispatch();
  const showForm = useSelector(selectFormType);
  const formType = useSelector(selectFormType);

  const closePopup = () => dispatch(toggleForm(false));


  return (
    <>
      <div className="overlay" onClick={closePopup}/>
      <PopupAuth closePopup={closePopup}/>
    </>
  );
};

export default UserForm;
