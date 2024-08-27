import style from "./OurPrograms.module.scss";
import Title from "../../common/Title.jsx";
import { nameButtonProgram } from "../../constants/programCart.js";
import Button from "../Button/Button.jsx";
import { nameTitle } from "../../constants/common.js";

const OurPrograms = ({ onButtonClick,activeButton }) => {


  const handleClickButton = (program) => {
    onButtonClick(program); 

  };


  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButtonProgram.map((program) => (
          <Button
            key={program.id}
            program={program}
            isActive={activeButton === program.id}
            nameButtonProgram={program.title}
            onClick={() => handleClickButton(program)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
