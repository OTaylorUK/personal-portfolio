

import React, { FC,  } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, Variants } from "framer-motion";


interface AnimationWrapperProps {
    children: JSX.Element | JSX.Element[] ,
    innerClass?: string| null | undefined
    type?: string| null | undefined
    settings?: {
      bounce?: number,
      delay?: number,
      duration?: number,
    }
}


const AnimationWrapper = ({ type = 'default', innerClass = 'flex flex-col gap-4' , children, settings}:AnimationWrapperProps): JSX.Element => {

  const { 
    bounce = 0.4,
    delay = 0.8,
    duration = 0.8,  
  } = {...settings}


const textVariants: Variants = {
  offscreen: {
    y:'100%' ,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: bounce,
      duration: duration,
      delay: delay
    }
  }
};

switch (type) {
  case 'ul':
    return (
      <>
          <motion.ul className={` ${innerClass}`}  variants={textVariants}>
            {children}
          </motion.ul>
  
      </>
    );
    break;

  default:
    return (
      <>
          <motion.div className={` ${innerClass}`}  variants={textVariants}>
            {children}
          </motion.div>
  
      </>
    );

    break;
}

  
};

export default AnimationWrapper;