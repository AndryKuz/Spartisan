import { useDispatch, useSelector } from 'react-redux';
import style from './ActiveUser.module.scss';
import { ReactComponent as User } from "assets/images/person.svg";
import { removeUser, selectEmail, setCurrentUser } from 'auth/redux/authSlice';
const ActiveUser = () => {
    const dispatch = useDispatch();
    const currentEmail = useSelector(selectEmail);
    const [headerUserName] = (typeof currentEmail === 'string' && currentEmail.includes('@')) ? currentEmail.split('@'): [''];

   
   
    const handleCurrentUser = () => {
      dispatch(setCurrentUser(null));
      dispatch(removeUser());
    };
    
  return (
    <div className={style.user}>
      <div>
        <User />
        <span>Hello {headerUserName || "user"} | </span>
      </div>
      <div>
        <button onClick={handleCurrentUser}> Go out</button>
      </div>
    </div>
  );
};

export default ActiveUser;
