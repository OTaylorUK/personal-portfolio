
import React, { FC } from "react";
import { motion, Variants } from "framer-motion";
import { ContainerProps } from "../../types/Layout";

const animations: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: .35
    }
  }
};

const VariableContainer: FC<ContainerProps> = ({ children, settings, containerClass = '' }) => {
    const { 
      animation = { 
        inViewAmount: 0.2,
        initialState: "offscreen",
      }
    } = {...settings}

  return (

    <motion.div
      className={`${containerClass}`}
      initial="offscreen"
      whileInView="onscreen"
      variants={animations}
      viewport={{ once: true, amount: animation.inViewAmount }}
    >
      {children}
  </motion.div>
  );
};


export default VariableContainer;