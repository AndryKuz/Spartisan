import style from "./TopHistory.module.scss";

export const visitData = [
  { id: 1, data: "23.12.2024", quantity: 4, sum: 500 },
  { id: 2, data: "23.08.2024", quantity: 5, sum: 700 },
  { id: 3, data: "21.12.2024", quantity: 2, sum: 200 },
  { id: 4, data: "03.02.2024", quantity: 5, sum: 400 },
  { id: 5, data: "21.07.2024", quantity: 1, sum: 200 },
];

const TopHistory = () => {
  return (
    <div className={style.mainTopHistory}>
      <h2>Top-up history</h2>
      <div className={style.columns}>
        <div>Data</div>
        <div>Quantity</div>
        <div>Sum</div>
      </div>
      <span className="divider"></span>
      {visitData.map((item) => (
        <div key={item.id}>
          <div className={style.columns}>
            <div>{item.data}</div>
            <div>{item.quantity} visits</div>
            <div>€{item.sum}</div>
          </div>
          <span className="divider"></span>
        </div>
      ))}
    </div>
  );
};

export default TopHistory;
