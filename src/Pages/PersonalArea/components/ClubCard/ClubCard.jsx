import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import style from "./ClubCard.module.scss";

import { MainButton, nameMainButton } from "components/Button/MainButton";

import TopHistory from "./TopHistory";
import { ROUTES } from "components/Routes";
import { getNumberOfVisits } from "pages/PersonalArea/personalSlice";

const ClubCard = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    if (inputValue <= 0) {
      setError("You need to select the number of visits");
    } else {
      dispatch(getNumberOfVisits(inputValue))
      navigate(ROUTES.RESULT, { state: { status: "paymentSucc" }, replace: true });
    }
  };
  return (
    <>
      <div className={style.info}>
        <div className={style.visited}>
          <div>
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
          <form >
            <input
              placeholder="Number of visits"
              type="number"
              name="numberVisit"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
            <div style={{ display: "flex", paddingRight: 40 }}>
              <MainButton buttonLabel={nameMainButton[5]} onClick={onSubmit}/>
            </div>

          </div>
          {error && <p>{error}</p>}
        </div>
      </div>
      <br />
      <span className="divider"></span>
      <br />
      <TopHistory />
    </>
  );
};

export default ClubCard;
