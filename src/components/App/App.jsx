import { useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyMap from "../MyMap/MyMap";
import AppRoutes from "../Routes/AppRoutes";
import Burger from "../Burger/Burger";

function App() {
  const [isOpenBurger, setOpenBurger] = useState(false);
  return (
    <div className="wrapper">
      <Header handleBurger={() => setOpenBurger(true)} />
      <Burger
        openBurger={isOpenBurger}
        closeBurger={() => setOpenBurger(false)}
      />
      {/* <MainPage /> */}
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
