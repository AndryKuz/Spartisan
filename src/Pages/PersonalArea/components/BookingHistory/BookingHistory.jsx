import style from "./BookingHistory.module.scss";
import { bookingHistoryData, columnTitle } from "./bookinHistoryData";

const BookingHistory = () => {
  return (
    <div className={style.history}>
      <div className={style.desktop}>
        <div className={style.columns}>
          <div>Data</div>
          <div>Number of people</div>
          <div>Service</div>
          <div>Procedure time</div>
          <div>Sum</div>
        </div>
        <span className="divider"></span>
        {bookingHistoryData.map(({ data, people, service, time, sum, id }) => (
          <div key={id}>
            <div className={style.columns}>
              <div>{data}</div>
              <div>{people}</div>
              <div>{service}</div>
              <div>{time} minutes</div>
              <div>€ {sum}</div>
            </div>
            <span className="divider"></span>
          </div>
        ))}
      </div>
      <div className={style.mobileColumns}>
        {bookingHistoryData.map(({ data, people, service, time, sum, id }) => (
          <div key={id}>
            <div className={style.table}>
              <div className={style.titleColumn}>
                {columnTitle.map((title) => (
                  <div key={title}>
                    <ul className={style.titleList}>
                      <li>{title}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div key={id}>
                <ul className={style.titleList}>
                  <li>{data}</li>
                  <li>{people}</li>
                  <li>{service}</li>
                  <li>{time} minutes</li>
                  <li>€ {sum}</li>
                </ul>
              </div>
            </div>
            <span className="divider"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;
