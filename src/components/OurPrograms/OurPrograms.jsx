import style from "./OurPrograms.module.scss";
import Title from "../../common/Title.jsx";
import { nameButtonProgram, nameTitle } from "../../constants/common.js";
import Button from "../Button/Button.jsx";


const OurPrograms = () => {

  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButtonProgram.map(({ title }) => (
          <Button key={title} nameButtonProgram={title} />
        ))}
        
      </div>
    </div>
  );
};

export default OurPrograms;
