
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import ColourPalette from "./ColourPalette";
import Header from "./Header";
import * as prismicT from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";


interface ProjectProps {
  index: number
  github: any
  image: any
  name:  any,
  summary:  any,
  tools:  any,
  website:  any,
  
}



const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};



const ProjectSlide = ({github,image,name,summary,tools,website,index}:ProjectProps): JSX.Element => {
    let isOdd = true;

    if(index % 2 === 0){
        isOdd = false;
    }
  
  return (

    <motion.div
      className="flex flex-col lg:flex-row  gap-4  justify-center"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="flex flex-col lg:flex-row  gap-4  justify-center" variants={cardVariants}>
        <div className={`flex-1 flex flex-col  gap-6 text-custom-faded ${isOdd ? 'text-left': 'order-2 text-right'}`}>
            <div className="flex flex-col gap-2">
                <PrismicRichText 
                    field={name}
                />  
            </div>

            <PrismicRichText 
                field={summary}
            />  
            
            <PrismicRichText 
                field={tools}
                components={{
                    list: ({ children }) =>  <ul className={`flex flex-row row-wrap gap-1 ${isOdd ? 'justify-start': 'justify-end'}`}>{children}</ul>,
                  }}
            />  
        </div>
        <div className="flex-1">
            <Image
                src={image?.url}
                alt={image?.alt}
                width={image?.dimensions?.width}
                height={image?.dimensions?.height}
                layout={'responsive'}
            />
        </div>
      </motion.div>

    </motion.div>

  );
};

export default ProjectSlide;