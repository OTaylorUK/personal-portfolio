

import React, { FC,  } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, Variants } from "framer-motion";


interface SectionHeaderProps {
    title: prismicT.RichTextField,
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


const SectionHeader = ({ title}:SectionHeaderProps): JSX.Element => {

  return (
    <>
      <motion.div
        className="flex flex-row  gap-12   items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
      >
        <motion.div className={``} variants={textVariants}>
          <PrismicRichText 
                field={title}
            />
        </motion.div>
      </motion.div>

    </>
  );
};

export default SectionHeader;