import { toggleForm } from "auth/redux/authSlice";
import { useDispatch} from "react-redux";

import PopupAuth from "./PopupAuth";

const UserForm = () => {
  const dispatch = useDispatch();

  const closePopup = () => dispatch(toggleForm(false));


  return (
    <>
      <div className="overlay" onClick={closePopup}/>
      <PopupAuth closePopup={closePopup}/>
    </>
  );
};

export default UserForm;
