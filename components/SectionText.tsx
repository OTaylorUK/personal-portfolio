

import React, { FC,  } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, Variants } from "framer-motion";


interface SectionTextProps {
    children: JSX.Element | JSX.Element[],
    outerClass?: string | null | undefined
    innerClass?: string| null | undefined
}



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
      bounce: 0.4,
      duration: 0.8,
      delay: 0.8
    }
  }
};


const SectionText = ({ outerClass = '', innerClass = 'flex flex-col gap-4' , children}:SectionTextProps): JSX.Element => {

  return (
    <>
      <motion.div
        className={` ${outerClass}`}
        initial="offscreen"
        whileInView="onscreen"

        viewport={{ once: false, amount: 0.8 }}
      >
        <motion.div className={` ${innerClass}`}  variants={textVariants}>
          {children}
        </motion.div>
      </motion.div>

    </>
  );
};

export default SectionText;