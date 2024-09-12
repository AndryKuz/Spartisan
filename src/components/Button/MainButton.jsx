import style from "./MainButton.module.scss";

import Arrow from "assets/images/arrowButton.svg";

export const nameMainButton = [
  "Search place",
  "Book now",
  "Order",
  "Register",
  "Entrance",
];

export const MainButton = ({ buttonLabel, onClick, styleArrow, widthButton }) => {

 

  let arrowStyle;
  switch (styleArrow) {
    case "search":
      arrowStyle = style.searchPlaceArrow;
      break;
    case "order":
      arrowStyle = style.orderArrow;
      break;
    case 'book':
      arrowStyle = style.bookArrow  
  }

  return (
    <div className={style.wrapperMainButton}>
      <button className={style.mainButton} onClick={onClick} style={{width:widthButton}}>
        {buttonLabel}
      </button>
      <img src={Arrow} alt="sfa" className={`${arrowStyle} ${style.arrow}`} />
    </div>
  );
};
