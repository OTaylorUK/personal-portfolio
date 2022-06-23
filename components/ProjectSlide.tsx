
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import ColourPalette from "./ColourPalette";
import Header from "./Header";
import * as prismicT from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import SectionText from "./SectionText";
import SectionHeader from "./SectionHeader";
import AnimationWrapper from "./AnimationWrapper";
import VariableContainer from "./VariableContainer";


interface ProjectProps {
  index: number
  github: any
  image: any
  name:  any,
  summary:  any,
  tools:  any,
  website:  any,
  
}



const ProjectSlide = ({github,image,name,summary,tools,website,index}:ProjectProps): JSX.Element => {
    let isOdd = true;

    if(index % 2 === 0){
        isOdd = false;
    }
  
  return (

    <VariableContainer containerClass='flex flex-col lg:flex-row  gap-4  justify-center overflow-hidden'>

      <div className={`flex flex-col-reverse gap-8  lg:gap-20 relative justify-center  ${isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} >


      <AnimationWrapper
          innerClass={`flex-1 flex flex-col items-start text-left gap-6 text-custom-faded   lg:static z-10 h-full lg:h-auto  justify-center lg:p-0`}

          variantType={'alt'}
        >
           
              <PrismicRichText 
                field={name}
              /> 

           
              <PrismicRichText 
                  field={summary}
              /> 
              <PrismicRichText 
                  field={tools}
                  components={{
                    list: ({ children }) =>  <ul className='flex flex-row row-wrap gap-4'>{children}</ul>,
                  }}
              /> 
        </AnimationWrapper>
        <AnimationWrapper 
          innerClass={`flex-1`}
          variantType={'alt'}
        >
          <Image
          className={`rounded-xl lg:rounded-md overflow-hidden`}
              src={image?.url}
              alt={image?.alt}
              width={image?.dimensions?.width}
              height={image?.dimensions?.height}
              layout={'responsive'}
          />
        </AnimationWrapper>

      </div>

      </VariableContainer>  


  );
};

export default ProjectSlide;