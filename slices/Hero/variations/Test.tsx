import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";

type HeroSlice = prismicT.Slice<
	"hero",
	{
		content: prismicT.RichTextField;
	}
>;


const Test = ({ slice }: SliceComponentProps<HeroSlice>) => {

  const {primary,items} = {...slice}
  const {content} = primary;

  return(
    <section>
       <PrismicRichText 
          field={content}
        />  
  </section>
  )
}

export default Test