

import React, { FC, Fragment, ReactNode } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, Variants } from "framer-motion";


interface SectionHeaderProps {
    title: prismicT.RichTextField,
    isOdd: boolean
}



const textVariants: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    // rotate: -10,
    transition: {
      // type: "spring",
      // bounce: 0.4,
      duration: 0.8,
      delay: 0.8
    }
  }
};


const SectionHeader: FC<SectionHeaderProps> = ({ title, isOdd}) => {

  const cardVariants: Variants = {
    offscreen: {
      x: isOdd ? '-100%': '100%' 
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  

  return (
    <Fragment>

      <motion.div
        className="flex flex-col lg:flex-row  gap-12  justify-center items-center"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <div className="flex items-center gap-12"> */}

        <motion.div className={`h-[1px] bg-custom-faded flex-1 ${isOdd ? '': 'order-2'}`} variants={cardVariants}>
        </motion.div>
        <motion.div className={``} variants={textVariants}>
          <PrismicRichText 
                field={title}
            />
        </motion.div>

           
        {/* </div> */}
      </motion.div>

    </Fragment>
  );
};

export default SectionHeader;