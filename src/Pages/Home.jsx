import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import Offers from "../components/Offers/Offers";

const Home = () => {
  return (
    <>
      <Offers />
      <CartPrograms/>
      <AdditionalServices/>
    </>
  );
};

export default Home;
