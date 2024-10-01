import { useSelector } from "react-redux";

import style from "./OurPrograms.module.scss";

import Title from "common/Title/Title.jsx";
import Button from "../Button/Button.jsx";
import { nameButtonProgram } from "constants/programCart.js";

import { selectPrograms } from "../../features/booking/bookingSlice.js";
import { nameTitle } from "common/Title/titleData";

const OurPrograms = () => {

  const [programs] = useSelector(selectPrograms);


  
  const isActive = (program) => program.id === programs?.id;
  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButtonProgram.map((program) => (
          <Button
            key={program.id}
            program={program}
            isActive={isActive(program)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
