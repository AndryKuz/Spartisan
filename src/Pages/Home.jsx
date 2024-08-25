import {useRef, useState } from "react";

import AdditionalServices from "../components/AdditionalServices/AdditionalServices";
import CartPrograms from "../components/CartPrograms/CartPrograms";
import OurPrograms from "../components/OurPrograms/OurPrograms";
import OurReviews from "../components/OurReviews/OurReviews";
import MainPage from "../components/MainPage/MainPage";
import { nameButtonProgram } from "../constants/programCart";

const Home = () => {
  const programRef = useRef(null);

  const defaultButtonProgram = nameButtonProgram[0];

  const [activeButton, setActiveButton] = useState(defaultButtonProgram.id);
  const [selectButtonProgram, setSelectProgram] =
    useState(defaultButtonProgram);


  const scrollToProgram = () => {
    if (programRef.current) {
      programRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  const handleButtonClick = (program) => {
    setSelectProgram(program);
    setActiveButton(program.id)
  };

 
  return (
    <>
      <MainPage scrollToProgram={scrollToProgram} />
      <div ref={programRef}>
        <OurPrograms onButtonClick={handleButtonClick} activeButton={activeButton}/>
      </div>
      <CartPrograms program={selectButtonProgram} />
      <AdditionalServices />
      <OurReviews />
    </>
  );
};

export default Home;
