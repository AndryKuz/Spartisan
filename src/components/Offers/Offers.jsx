import style from "./Offers.module.scss";
import Title from "../../common/Title.jsx";
import { nameButton, nameTitle } from "../../constants/common";
import Button from "../Button/Button.jsx";

const Offers = () => {
  return (
    <div className={style.programs}>
      <Title titleStart={nameTitle[0][1]} titleEnd={nameTitle[0][2]} />
      <div className={style.buttons}>
        {nameButton.map(({ title }) => (
          <Button key={title} nameButton={title} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
