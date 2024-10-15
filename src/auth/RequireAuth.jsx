import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "./redux/authSlice";


const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector(selectCurrentUser);

  if (!auth) {
    return <Navigate to={'/'} state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
