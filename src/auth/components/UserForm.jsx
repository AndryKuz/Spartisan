import { selectFormType, toggleForm } from "auth/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";

import PopupAuth from "./PopupAuth";

const UserForm = () => {
  const dispatch = useDispatch();
  const showForm = useSelector(selectFormType);
  const formType = useSelector(selectFormType);

  const closeForm = () => dispatch(toggleForm(false));

  const toggleCurrentFormType = (type) => dispatch(toggleForm(type));
  return (
    <>
      <div className="overlay" />
      <PopupAuth />
    </>
  );
};

export default UserForm;
