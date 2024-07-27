import Title from "../common/Title";
import Button from "../components/Button/Button";
import { nameButtonProgram, nameTitle } from "../constants/common";
import { ReactComponent as Data } from "../assets/images/data.svg";
import style from "./Booking.module.scss";
import {MainButton, nameMainButton} from '../components/Button/MainButton';

const Booking = () => {
  return (
    <section className={style.booking}>
      <Title titleStart={nameTitle[4][1]} titleEnd={nameTitle[4][2]} />
      <h5>Program</h5>
      <div className={style.buttons}>
        {nameButtonProgram.map(({ title }) => (
          <Button key={title} nameButtonProgram={title} />
        ))}
      </div>
      <div className={style.time}>
        <h5>Time</h5>
        <form className={style.toggleTime}>
          <div>
            <input type="radio" id="option1" name="options" value="1" />
            <label className={style.first} for="option1">
              60
            </label>
            <label className={style.second} for="option1">
              minutes
            </label>
          </div>
          <div>
            <input type="radio" id="option2" name="options" value="2" />
            <label className={style.first} for="option2">
              120
            </label>
            <label className={style.second} for="option1">
              minutes
            </label>
          </div>
        </form>
      </div>
      <div>
        <div>
          <button>Date</button>
          <Data />
        </div>
        <div>
          <div>
            <button>-</button>
          </div>
          <div>1</div>
          <div>
            <button>+</button>
          </div>
        </div>
        <p>People</p>
        <MainButton buttonLabel={nameMainButton[0]}/>
      </div>
    </section>
  );
};

export default Booking;
