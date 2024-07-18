import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import AppRoutes from "../Routes/AppRoutes";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <MainPage/>
      <main>
        <div className="container">
          <AppRoutes />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
