import { useState } from "react";
import style from "./ClubCard.module.scss";

import { MainButton, nameMainButton } from "components/Button/MainButton";

import TopHistory from "./TopHistory";

const ClubCard = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
   
    setInputValue(e.target.value);
  }
  const onSubmit = () => {
    e.preventDefault();
    console.log(inputValue);
    
  }
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
        <form onSubmit={onSubmit}>
          <input placeholder="Number of visits" type="number" name="numberVisit" value={inputValue} onChange={handleInputChange}/>
          <div style={{ display: "flex", paddingRight:40 }}>
            <MainButton buttonLabel={nameMainButton[5]} />
          </div>
        </form>
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
