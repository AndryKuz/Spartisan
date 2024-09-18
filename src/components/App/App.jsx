import { useDispatch, useSelector } from "react-redux";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyMap from "../MyMap/MyMap";
import AppRoutes from "../Routes/AppRoutes";
import Burger from "../Burger/Burger";
import UserForm from "auth/components/UserForm";

import {
  selectFormType,
  selectShowBurger,
  selectShowForm,
  toggleBurger,
} from "auth/redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const showForm = useSelector(selectShowForm);
  const isOpenBurger = useSelector(selectShowBurger);
  const formType = useSelector(selectFormType);

  const openBurger = () => dispatch(toggleBurger(true));
  const closeBurger = () => dispatch(toggleBurger(false));

  return (
    <div className="wrapper">
      <Header openBurger={openBurger}/>
      {isOpenBurger ? <Burger openBurger={openBurger} closeBurger={closeBurger}/> : ''}
      {showForm ? <UserForm /> : ""}
      <main>
        <div className="container">
          <AppRoutes />
        </div>
      </main>
      <MyMap />

      <Footer />
    </div>
  );
}

export default App;
