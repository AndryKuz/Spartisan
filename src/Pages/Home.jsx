import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import MainPage from "../components/MainPage/MainPage";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import OurReviews from "../components/OurReviews/OurReviews";

const Home = () => {
  return (
    <>
      <MainPage />
      <OurPrograms />
      <CartPrograms />
      <AdditionalServices />
      <OurReviews />
    </>
  );
};

export default Home;
