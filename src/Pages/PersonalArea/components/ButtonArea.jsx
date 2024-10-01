import style from './ButtonArea.module.scss';

export const personalButton = [
  { id: 1, title: "Personal Area" },
  { id: 2, title: "Club card" },
  { id: 3, title: "Booking history" },
];

const ButtonArea = () => {
  return (
    <div className={style.wrapperButton}>
      {personalButton.map((item) => (
        <button key={item.id} className={style.button}>{item.title}</button>
      ))}
    </div>
  );
};

export default ButtonArea;
