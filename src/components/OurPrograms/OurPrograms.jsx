import style from "./OurPrograms.module.scss";
import Title from "../../common/Title.jsx";
import { nameButtonProgram, nameTitle } from "../../constants/common.js";
import Button from "../Button/Button.jsx";


const OurPrograms = ({onButtonClick}) => {

  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButtonProgram.map((program ) => (
          <Button key={program.id} nameButtonProgram={program.title} onClick={() => onButtonClick(program)} />
        ))}
        
      </div>
    </div>
  );
};

export default OurPrograms;
