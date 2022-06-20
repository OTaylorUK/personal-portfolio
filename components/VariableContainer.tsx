
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import { outputVariableString } from "../utils/helpers";
import ColourPalette from "./ColourPalette";
import Header from "./Header";
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




const VariableContainer: FC<ContainerProps> = ({ children, settings, containerClass = '' }) => {
  

    const { 
      animation = { 
        inViewAmount: 0.8,
      }
    } = {...settings}
    
    
  return (

    <motion.div
    className={`${containerClass}`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: animation.inViewAmount }}
  >
            {children}
  </motion.div>
  );
};


export default VariableContainer;