import { delay, motion } from "framer-motion";

import { serviceItems } from "constants/common";
import style from "./AdditionalServices.module.scss";

const ServiceCart = () => {
    const getIconAnimation = (index) => {
        if(index === 0 || index === 4) {
            return {
                hidden:{
                    x:-100,
                    opacity:0,
                },
                visible: {
                    x:0,
                    opacity:1,
                    transition:{
                        delay:.6,
                        duration:.3
                    }
                }
            }
        } else if(index === 1 || index === 5) {
            return {
                hidden:{
                    x:-100,
                    opacity:0,
                },
                visible: {
                    x:0,
                    opacity:1,
                    transition:{
                        delay:.3,
                        duration:.3
                    }
                }
            }
        } else if(index === 2 || index === 6) {
            return {
                hidden:{
                    x:100,
                    opacity:0,
                },
                visible: {
                    x:0,
                    opacity:1,
                    transition:{
                        delay:.3,
                        duration:.3
                    }
                }
            }
        } else if(index === 3 || index === 7) {
            return {
                hidden:{
                    x:100,
                    opacity:0,
                },
                visible: {
                    x:0,
                    opacity:1,
                    transition:{
                        delay:.6,
                        duration:.3
                    }
                }
            }
        } 
    }
  const iconAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        suration: 0.3,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.row}
    >
      {serviceItems.map((item, index) => (
        <motion.div
          variants={getIconAnimation(index)}
          key={item.id}
          className={style.cart}
        >
          {item.icon}
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ServiceCart;
