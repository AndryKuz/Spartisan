import style from "./Button.module.scss";

export const nameMainButton = ['Search place', 'Book now', 'Order', 'Register', 'Entrance'];

export const MainButton = ({buttonLabel}) => {
    return <button className={style.book}>{buttonLabel}</button>;
};
