import { useDispatch, useSelector } from "react-redux";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyMap from "../MyMap/MyMap";
import AppRoutes from "../Routes/AppRoutes";
import Burger from "../Burger/Burger";
import UserForm from "auth/components/UserForm";

import {  selectShowBurger, selectShowForm, toggleBurger } from "auth/redux/authSlice";

function App() {

  const dispatch = useDispatch();
  const showForm = useSelector(selectShowForm);
  const isOpenBurger = useSelector(selectShowBurger);

  const openBurgerMenu = (boolean) => {
    dispatch(toggleBurger(boolean));
  };
  
  return (
    <div className="wrapper">
      <Header openBurger={() => openBurgerMenu(true)}/>
      {isOpenBurger ? <Burger openBurger={() => openBurgerMenu(true)} closeBurger={() => openBurgerMenu(false)}/> : ''}
      {showForm ? <UserForm/> : ''}
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
