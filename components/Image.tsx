

import React, { FC,  } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, Variants } from "framer-motion";
import Image from "next/image";


interface ImageProps {
    outerClass?: string | null | undefined
    innerClass?: string| null | undefined
    image: {
      url: string, 
      dimensions?: any, 
      alt?: string, 
    }
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
      delay: 1.2
    }
  }
};


const AnimatedImage = ({ outerClass = '', innerClass = 'flex flex-col gap-4' , image}:ImageProps): JSX.Element => {

  return (
    <>
      <motion.div
        className={` ${outerClass}`}
        initial="offscreen"
        whileInView="onscreen"

        viewport={{ once: false, amount: 0.8 }}
      >
        <motion.div className={` ${innerClass}`}  variants={textVariants}>
          <Image
              src={image?.url}
              alt={image?.alt}
              width={image?.dimensions?.width}
              height={image?.dimensions?.height}
              layout={'responsive'}
            />
        </motion.div>
      </motion.div>

    </>
  );
};

export default AnimatedImage;