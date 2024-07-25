import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import OurReviews from "../components/OurReviews/OurReviews";

const Home = () => {
  return (
    <>
      <OurPrograms />
      <CartPrograms/>
      <AdditionalServices/>
      <OurReviews/>
    </>
  );
};

export default Home;
