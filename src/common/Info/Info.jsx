import style from "./Info.module.scss";

import { ReactComponent as Phone } from "../../assets/images/info/phone.svg";
import { ReactComponent as Email } from "../../assets/images/info/email.svg";
import { ReactComponent as Location } from "../../assets/images/info/location.svg";
import { ReactComponent as Time } from "../../assets/images/info/time.svg";

export const iconInfo = [
  { id: 1, icon: <Phone />, title: "Telephone", text: "+436609508090" },
  { id: 2, icon: <Email />, title: "E-mail", text: "office@taiga-spa.at" },
  {
    id: 3,
    icon: <Location />,
    title: "Miscellaneous",
    text: "Helferstorferstraße 6/ Ecke Rockhgasse A-1010 Wien",
  },
  {
    id: 4,
    icon: <Time />,
    title: "Robot hour",
    text: "10am - Midnight Seven days a week",
  },
];

const Info = () => {
  return (
    <div className={style.cardWrapper}>
      {iconInfo.map((item) => (
        <div key={item.id} className={style.card}>
          <div className={style.icon}>
          {item.icon}
          </div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
