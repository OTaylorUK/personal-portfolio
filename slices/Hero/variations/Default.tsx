import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";
import Container from '../../../components/Container';

type HeroSlice = prismicT.Slice<
	"hero",
	{
		content: prismicT.RichTextField;
		uid: prismicT.KeyTextField;
	}
>;


const Default = ({ slice }: SliceComponentProps<HeroSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {content, uid} = primary;

  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full min-h-[100vh] flex justify-center items-center text-center`}
    >
     <Container settings={{gap:'gap-8', width: 'md:w-9/12', justifyCenter: 'justify-center'}}>
          <PrismicRichText 
            field={content}
            components={{
              heading2: ({ children }) => <h1 className='text-3xl text-custom-faded '>{children}</h1>,
              paragraph: ({ children }) => <p className='md:px-20 text-lg'>{children}</p>,
            }}
          />  
     </Container>
      
  </section>
  )
}

export default Default