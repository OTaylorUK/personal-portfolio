
import React, { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";


interface ContainerProps {
  children?: ReactNode,
  containerClass?: string
  settings?: {
      animation?:{
        inViewAmount?: number,
      }
  }
}



const animations: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: .45
    }
  }
};

const VariableContainer: FC<ContainerProps> = ({ children, settings, containerClass = '' }) => {
  

    const { 
      animation = { 
        inViewAmount: 0.2,
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