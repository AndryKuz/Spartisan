import { useEffect, useState } from "react";

import Title from "common/Title/Title";

import { images } from "constants/imageGallery";

import style from "./Gallery.module.scss";
import { nameTitle } from "common/Title/titleData";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const firstGallery = [];
  const secondGallery = [];

  images.forEach((item) => {
    if (item.id <= 4) {
      firstGallery.push(item);
    } else {
      secondGallery.push(item);
    }
  });
  const openImage = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.scrollTo(0,0);
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <Title titleStart={nameTitle[3][1]} titleEnd={nameTitle[3][2]} />
      <div className={style.firstGallery}>
        {firstGallery.map((item) => (
          <div
            key={item.id}
            className={style.parentImg}
            onClick={() => openImage(item.src)}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      <div className={style.secondGallery}>
        {secondGallery.map((item) => (
          <div
            key={item.id}
            className={style.parentImg}
            onClick={() => openImage(item.src)}
          >
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className={style.fullscreenImage} onClick={closeImage}>
          <img src={selectedImage} alt="Fullscreen" />
        </div>
      )}
    </>
  );
};

export default Gallery;
