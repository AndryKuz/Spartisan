
import { GoAlert } from "react-icons/go";
import style from './PopupAuth.module.scss';

const ValidPopup = ({ error }) => {
  
  return (
    <div className={style.errorMessage}>
      {error && (
        <div>
          <GoAlert />
          <span>{error.message || "Error!"}</span>
        </div>
      )}
    </div>
  );
};

export default ValidPopup;
