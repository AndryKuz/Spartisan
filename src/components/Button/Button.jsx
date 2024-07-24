import style from "./Button.module.scss";

const Button = ({ nameButton }) => {
    return <button className={style.but}>{nameButton}</button>;
};

export default Button;
