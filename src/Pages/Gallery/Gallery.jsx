import Title from "common/Title/Title";

import { images } from "constants/imageGallery";

import style from "./Gallery.module.scss";
import { nameTitle } from "common/Title/titleData";

const Gallery = () => {

  const firstGallery = [];
  const secondGallery = [];

  images.forEach((item) => {
    if (item.id <= 4) {
      firstGallery.push(item);
    } else {
      secondGallery.push(item);
    }
  });

  return (
    <>
      <Title titleStart={nameTitle[3][1]} titleEnd={nameTitle[3][2]} />
      <div className={style.firstGallery}>
        {firstGallery.map((item, index) => (
          <div
            key={item.id}
            className={style.parentImg}  
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className={style.secondGallery}>
        {secondGallery.map((item, index) => (
          <div
            key={item.id}
            className={style.parentImg}  
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
