import { useSelector } from "react-redux";

import style from "./OurPrograms.module.scss";

import Title from "common/Title.jsx";
import Button from "../Button/Button.jsx";
import { nameButtonProgram } from "constants/programCart.js";
import { nameTitle } from "constants/common.js";
import { selectPrograms } from "../../features/booking/bookingSlice.js";

const OurPrograms = () => {

  const programs = useSelector(selectPrograms);

  
  const isActive = (program) => program.id === programs[0]?.id;
  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButtonProgram.map((program) => (
          <Button
            key={program.id}
            program={program}
            nameButtonProgram={program.title}
            isActive={isActive(program)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
