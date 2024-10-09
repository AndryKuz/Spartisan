
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "./redux/authSlice";


const RequireAuth = ({children}) => {
    const location = useLocation();
    const currentUser = useSelector(selectCurrentUser);

    if(!currentUser) {

    }
  return (
    <div>
      RequireAuth
    </div>
  );
};

export default RequireAuth;