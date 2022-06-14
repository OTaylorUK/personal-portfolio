import React from 'react'
import * as prismicT from "@prismicio/types";
import {
  PrismicRichText,
	SliceComponentProps,
} from "@prismicio/react";
import Button from '../../../components/Button';
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';

type CtaSlice = prismicT.Slice<
	"general",
	{
		title: prismicT.RichTextField,
		text: prismicT.RichTextField
		uid: prismicT.KeyTextField
	}
>;


const Cta = ({ slice , index}: SliceComponentProps<CtaSlice>) => {
  const {primary,items, slice_type} = {...slice}

  const {title,text, uid} = primary;

  let isOdd = true;

  if(index % 2 === 0){
    isOdd = false;
  }
  
  return(
    <section id={uid ? uid : 'slice_type'} >
     
     <Container>
      <SectionHeader title={title} isOdd={isOdd} />
      <div className="flex flex-row text-left">
        <div className="flex-1">
            form
        </div>
        <div className="flex-1">
            <PrismicRichText 
              field={text}
            />  
        </div>

      </div>

      </Container>
  </section>
  )
}

export default Cta