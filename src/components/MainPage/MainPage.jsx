import { motion } from "framer-motion";

import style from "./MainPage.module.scss";
import { ReactComponent as Arrow } from "assets/images/ExpandDown.svg";

const MainPage = ({ scrollToProgram }) => {
  const commonTransition = {
    delay: 0.3,
    suration: 0.3,
  };

  const titleAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: commonTransition,
    },
  };
  const subTitleAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: commonTransition,
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      className={style.pageParent}
    >
      <div className={style.mainPage}>
        <motion.h3 variants={titleAnimation}>
          The art of restoring the body through
        </motion.h3>
        <motion.h2 variants={subTitleAnimation}>bath procedures</motion.h2>
        <div>
          <span></span>
        </div>
        <div className={style.arrow}>
        <Arrow onClick={scrollToProgram} />

        </div>
      </div>
    </motion.section>
  );
};

export default MainPage;
