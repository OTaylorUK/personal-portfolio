
import React, { FC } from "react";
import { outputVariableString } from "../../utils/helpers";
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

const Container: FC<ContainerProps> = ({ children, settings }) => {

    const { 
      inner = {
        gap: 'gap-20' ,
        width: 'lg:w-11/12',
      },
      outer = {
        align: 'items-start' ,
        padding: 'px-4' ,
      },
      animation = { 
        inViewAmount: 0.2,
        initialState: "offscreen",
      }
    } = {...settings}

    const outerVars = [
      outer?.align,
      outer?.padding,
    ]

    const innerVars = [
      inner?.align,
      inner?.width,
      inner?.bg,
      inner?.gap,
      inner?.padding,
    ]
    
    
  return (

  <motion.div
    className={`min-h-[30vh] container  lg:px-12 flex flex-col ${outputVariableString(outerVars)}`}
    initial={animation.initialState}
    whileInView="onscreen"
    variants={animations}
    viewport={{ once: true, amount: animation.inViewAmount }}
  >
    <div className={`content w-full flex flex-col items-start ${outputVariableString(innerVars)}`}>
        {children}
    </div>
  </motion.div>
  );
};


export default Container;