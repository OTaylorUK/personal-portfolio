
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import { outputVariableString } from "../utils/helpers";
import ColourPalette from "./ColourPalette";
import Header from "./Header";
import { motion, Variants } from "framer-motion";


interface ContainerProps {
  children?: ReactNode,
  settings?: {
      outer?: {
        align?: string ,
        justify?: string ,
      },
      inner?: {
        align?: string ,
        gap?: string ,
        padding?: string ,
        width?: string
        bg?: string
      }
      animation?:{
        inViewAmount?: number,
        bounce?: number,
        delay?: number,
        duration?: number,
      }
  }
}




const Container: FC<ContainerProps> = ({ children, settings }) => {
  

    const { 
      inner = {
        gap: 'gap-20' ,
        width: 'lg:w-11/12',
      },
      outer = {
        align: 'items-start' ,
      },
      animation = { 
        inViewAmount: 0.2,
      }
    } = {...settings}

    const outerVars = [
      outer?.align,
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
    className={`min-h-[30vh] container px-4 lg:px-12 flex flex-col ${outputVariableString(outerVars)}`}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: animation.inViewAmount }}
  >
    <div className={`min-h-[30vh] container px-4 lg:px-12 flex flex-col ${outputVariableString(outerVars)}`}>
        <div className={`content w-full flex flex-col items-start ${outputVariableString(innerVars)}`}>
            {children}
        </div>
    </div>
  </motion.div>
  );
};


export default Container;