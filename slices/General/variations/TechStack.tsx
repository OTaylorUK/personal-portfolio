import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";

import Image from "next/image";
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';
import { motion, Variants } from "framer-motion";
import SectionText from '../../../components/SectionText';
import AnimationWrapper from '../../../components/AnimationWrapper';


type GeneralSlice = prismicT.Slice<
	"general",
	{
		title: prismicT.RichTextField,
    text: prismicT.RichTextField,
		uid: prismicT.KeyTextField
	}
>;




const cardVariants: Variants = {
  offscreen: {
    y: '100%'
  },
  onscreen: {
    y: 0,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const TechStack = ({ slice, index }: SliceComponentProps<GeneralSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {title,text, uid} = primary;

  let isOdd = true;

  if(index % 2 === 0){
    isOdd = false;
  }




  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center  overflow-hidden`}
    >
      <Container>

        <div className={`flex flex-col  text-left gap-20 ${isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'} ` }>
          <div className={`flex-1 flex flex-col justify-center  gap-6 text-custom-faded items-start`}>
            <AnimationWrapper 
              settings={{delay:.2}}
             >
              <PrismicRichText 
                  field={title}
              />
            </AnimationWrapper>

            <AnimationWrapper 
              settings={{delay:.4}}
             >
              <PrismicRichText 
                field={text}
              /> 
            </AnimationWrapper>
          </div>

          <AnimationWrapper 
            settings={{delay:.6}}
            innerClass={`flex-1 bg-custom-faded-light p-10 gap-10 grid grid-cols-2 items-center justify-items-center`}
            variantType={'alt'}

          >
          {items.map((tech: any , i)=>{
            const {logo, name} = tech
            return  (
              <Image
                key={name}
                src={logo?.url}
                alt={logo?.alt}
                width={logo?.dimensions?.width}
                height={40}
                layout={'fixed'}
              />
            ) 
          })}
          </AnimationWrapper>

        </div>
     </Container>
  </section>
  )
}

export default TechStack