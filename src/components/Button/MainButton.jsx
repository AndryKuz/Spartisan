import style from "./MainButton.module.scss";

import Arrow from "assets/images/arrowButton.svg";

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
  "Buy now",
];

export const MainButton = ({ buttonLabel, onClick, styleArrow, widthButton }) => {

  let arrowStyle;
  switch (styleArrow) {
    case "search":
      arrowStyle = style.searchPlaceArrow;
      break;
    case 'book':
      arrowStyle = style.bookArrow  ;
      default:
        arrowStyle = style.orderArrow;
  }

  return (
    <div className={style.wrapperMainButton}>
      <button type="submit" className={style.mainButton} onClick={onClick} style={{width:widthButton}}>
        {buttonLabel}
      </button>
      <img src={Arrow} alt="sfa" className={`${arrowStyle} ${style.arrow}`} />
    </div>
  );
};
