import { ReactComponent as Aroma } from "../assets/images/services/aroma.svg";
import { ReactComponent as Soapy } from "../assets/images/services/soapy.svg";
import { ReactComponent as Warming } from "../assets/images/services/warming.svg";
import { ReactComponent as WarmBrooms } from "../assets/images/services/warmBroom.svg";
import { ReactComponent as Scrub } from "../assets/images/services/scrub.svg";
import { ReactComponent as Sound } from "../assets/images/services/sound.svg";
import { ReactComponent as WarmFoot } from "../assets/images/services/warmFoot.svg";
import { ReactComponent as WarmHerbs } from "../assets/images/services/warmHerbs.svg";



export const serviceItems = [
  { id: 1, icon: <Aroma />, text: "Aroma fan soaring" },
  { id: 2, icon: <Soapy />, text: "Soapy massage with a birch broom" },
  { id: 3, icon: <Warming />, text: "Warming up with brooms" },
  { id: 4, icon: <WarmBrooms />, text: "Warming up with brooms" },
  { id: 5, icon: <Scrub />, text: "Scrub with natural ingredients" },
  { id: 6, icon: <Sound />, text: "Warm bath with a set of herbs" },
  { id: 7, icon: <WarmFoot />, text: "Warm foot bath" },
  { id: 8, icon: <WarmHerbs />, text: "Sound therapy" },
];

export const randomizeDisable = (arr) => {
  const randomCount = Math.floor(Math.random() * 4) + 1;
  const shuffleItems = arr.sort(() => 0.5 - Math.random());
  let disCount = shuffleItems.filter((item) => item.dis === true).length;
  for (
    let i = 0;
    i < Math.min(randomCount, shuffleItems.length) && disCount < 5;
    i++
  ) {
    if (!shuffleItems[i].dis) {
      shuffleItems[i].dis = true;
      disCount++;
      if (disCount <= 5) break;
    }
  }
  shuffleItems.sort((a, b) => a.id - b.id);
  return arr;
};

export const changeDate = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    const dateString = arr[0];
    const [year, month, day] = dateString.split("-");
    if (year && month && day) {
      return `${day}.${month}.${year}`;
    }
  }
};

export const parseToNumber = (arr) => {
  const findPrice = arr.map((item) => item.price);
  const findString = findPrice.map((item) => {
    if (typeof item === "string") {
      item = +item;
    }
    return item;
  });
  const res = findString.reduce((acc, prev) => acc + prev, 0);
  return res;
};
