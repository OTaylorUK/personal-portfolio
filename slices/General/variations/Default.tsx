import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";

import Image from "next/image";
import Container from '../../../components/Container';
import AnimationWrapper from '../../../components/AnimationWrapper';


type GeneralSlice = prismicT.Slice<
	"general",
	{
		title: prismicT.RichTextField,
    text: prismicT.RichTextField,
    image: {
      url: string, 
      dimensions?: any, 
      alt?: string, 
    }
		uid: prismicT.KeyTextField

	}
>;


const Default = ({ slice, index }: SliceComponentProps<GeneralSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {title,text,image, uid} = primary;

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
          <div className={`flex-1 flex flex-col justify-center  gap-6 text-custom-faded ${isOdd ? 'items-start' : 'items-end'}`}>

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
                components={{
                  list: ({ children }) =>  <ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>{children}</ul>,
                  listItem: ({ children }) =>  
                    <li className='flex flex-row items-center gap-2'>
                      <svg className="grow-0 shrink-0 basis-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.66699 11.3335L6.66699 7.3335L2.66699 3.3335" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12.6665H13.3333" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>{children}
                    </li>,
                }}
              />  
            </AnimationWrapper>

          </div>

          <AnimationWrapper 
            settings={{delay:.6}}
            innerClass={`flex-1`}
          variantType={'alt'}

          >
            <Image
              src={image?.url}
              alt={image?.alt}
              width={image?.dimensions?.width}
              height={image?.dimensions?.height}
              layout={'responsive'}
            />
          </AnimationWrapper>
      
        </div>
     </Container>
  </section>
  )
}

export default Default