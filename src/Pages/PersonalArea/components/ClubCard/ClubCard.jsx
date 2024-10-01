import style from "./ClubCard.module.scss";

import { MainButton, nameMainButton } from "components/Button/MainButton";

import TopHistory from "./TopHistory";

const ClubCard = () => {
  return (
    <>
    <div className={style.info}>
      <div className={style.visited}>
        <div >
          <h4>You balance:</h4>
          <h3>10 visits</h3>
        </div>
        <div>
          <span>Last enrollment was: </span>
          03.23.2023
        </div>
        <div>
          <span>Сlub card: </span>
          00001
        </div>
      </div>
      <div className={style.buy}>
        <span>Replenishment of the club card</span>
        <div>
          <input placeholder="Number of visits" type="number"/>
          <div style={{ display: "flex" }}>
            <MainButton buttonLabel={nameMainButton[5]}/>
          </div>
        </div>
      </div>
    </div>
    <br />
      <span className="divider"></span>
      <br />
      <TopHistory/>
    </>
  );
};

export default ClubCard;
