import style from "./TotalBooking.module.scss";

const TotalBooking = () => {
  return (
    <div className={style.totalBooking}>
      <div className={style.describeTotal}>
        <div>
          <span>Data:</span>
          12.04.2012
        </div>
        <div>
          <span>Time:</span>c 12:00 до 13:00
        </div>
      </div>
      <div className={style.describeTotal}>
        <div>
          <span>Number of people:</span>2
        </div>
      </div>
      <div className={style.describeTotal}>
        <div>
          <span>Deep delight:</span>
          120$
        </div>
        <div>
          <span>Aroma fan:</span>
          30$
        </div>
      </div>
      <div className={style.totalPrice}>
        <h3>Price:</h3>
        <p>150$</p>
        
      </div>
    </div>
  );
};

export default TotalBooking;
