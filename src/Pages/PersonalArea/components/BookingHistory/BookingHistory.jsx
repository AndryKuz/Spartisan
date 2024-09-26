import style from "./BookingHistory.module.scss";

export const bookingHistoryData = [
  {
    id: 1,
    data: "23.12.2024",
    people: 4,
    service: "Deep delight",
    time: 160,
    sum: 500,
  },
  {
    id: 2,
    data: "23.08.2024",
    people: 5,
    service: "Deep delight",
    time: 180,
    sum: 700,
  },
  {
    id: 3,
    data: "21.12.2024",
    people: 2,
    service: "Deep delight",
    time: 120,
    sum: 200,
  },
  {
    id: 4,
    data: "03.02.2024",
    people: 5,
    service: "Deep delight",
    time: 180,
    sum: 400,
  },
  {
    id: 5,
    data: "21.07.2024",
    people: 1,
    service: "Deep delight",
    time: 90,
    sum: 200,
  },
];

const BookingHistory = () => {
  return (
    <div className={style.history}>
      <div className={style.columns}>
        <div>Data</div>
        <div>Number of people</div>
        <div>Service</div>
        <div>Procedure time</div>
        <div>Sum</div>
      </div>
      <span className="divider"></span>

      {bookingHistoryData.map(({data,people,service,time,sum,id}) => (
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
  );
};

export default BookingHistory;
