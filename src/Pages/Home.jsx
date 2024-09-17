import {useRef } from "react";

import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import OurReviews from "../components/OurReviews/OurReviews";
import MainPage from "../components/MainPage/MainPage";


const Home = () => {
  const programRef = useRef(null);

  const scrollToProgram = () => {
    if (programRef.current) {
      programRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <>
      <MainPage scrollToProgram={scrollToProgram} />
      <div ref={programRef}>
        <OurPrograms />
      </div>
      <CartPrograms />
      <AdditionalServices />
      <OurReviews />
    </>
  );
};

export default Home;
