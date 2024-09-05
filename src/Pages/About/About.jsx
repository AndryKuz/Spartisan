import style from "./About.module.scss";

import Title from "common/Title";
import { nameTitle } from "constants/common";

import Image from "assets/images/about.png";
import Info from "common/Info/Info";

const About = () => {
  return (
    <div>
      <Title titleStart={nameTitle[6][1]} titleEnd={nameTitle[6][2]} />
      <div className={style.main}>
        <div className={style.description}>
          <p>
            <b>Spartisan is the first custom SPA complex in Budapest!</b>
          </p>
          <p>
            Discover our unique program today, which guarantees to improve your
            health and well-being!<b>We introduce SPARTISAN -</b> the art of
            restoring the body through sauna procedures. It is a revolutionary
            solution for those who live in the modern world and seek ways to
            combat constant stress and unfavorable environmental conditions
          </p>
          <p>
            <b>SPARTISAN combines the words SPA and ARTISAN - </b> symbols of
            the art of restoration and professional skills. Their combination
            leads to the creation of PARTISAN - the concept of combating
            negative influences. This means that SPARTISAN not only promotes
            relaxation and recovery but also helps to cope with everyday
            problems and challenges.
          </p>
          <p>
            Currently, our lives are constantly exposed to stress and tension,
            so it is important to ensure our health and well-being. That's why
            we offer our custom program, which will help strengthen the immune
            system, relieve tension, and enjoy complete relaxation.
          </p>
          <p>
            <b>
              SPARTISAN is an excellent way to cope with everyday problems and
              challenges. Start your journey to health and happiness, explore
              SPARTISAN today!
            </b>
          </p>
        </div>
        <div className={style.imageWrapper}>

            <div className={style.frame}></div>
            <img src={Image} alt="traditional steam" />

        </div>
      </div>
      <div className={style.contactInfo}>
        <h2 className={style.contactInfo}>Contact information:</h2>
      </div>
      <div className={style.infoIcon}>
        <Info/>
      </div>
    </div>
  );
};

export default About;
