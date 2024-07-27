import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyMap from "../MyMap/MyMap";
import AppRoutes from "../Routes/AppRoutes";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="container">
          <AppRoutes />
        </div>
      </main>
      <MyMap/>
      <Footer/>
    </div>
  );
}

export default App;
