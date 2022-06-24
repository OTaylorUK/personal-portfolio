import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import AnimationWrapper from '../../../components/AnimationWrapper';
import VariableContainer from '../../../components/VariableContainer';

type HeroSlice = prismicT.Slice<
	"hero",
	{
		content: prismicT.RichTextField;
		uid: prismicT.KeyTextField;
		buttonStyle: prismicT.KeyTextField;
		buttonAction: string;
		buttonContent: prismicT.RichTextField;
	}
>;

type Social = {
  socialContent: Record<string, prismicT.AnyRegularField>,
  socialLink: Record<string, prismicT.AnyRegularField>,
  index: number, 
  array: Record<string, prismicT.AnyRegularField>[],
} 


const Default = ({ slice }: SliceComponentProps<HeroSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {content, uid, buttonStyle, buttonAction, buttonContent} = primary;

  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full pt-20 lg:pt-0 min-h-[100vh] flex justify-center items-center text-left bg-gradient-to-br bg-gradient  from-custom-primary via-custom-secondary to-custom-tertiary animate-bg`}
    >
     <Container>

      <div className="flex flex-col gap-8 items-start">
          <PrismicRichText 
            field={content}
            components={{
              heading1: ({ children }) => <AnimationWrapper 
              settings={{delay:.2}}
            ><h1 className='text-custom-white'>{children}</h1></AnimationWrapper>,
              paragraph: ({ children }) => <AnimationWrapper 
              settings={{delay:.4}}
            ><p className='large-text text-custom-faded-light w-full lg:w-7/12'>{children}</p></AnimationWrapper>,
            }}
          />  
        <Button  actionTarget={buttonAction} style={'ghost'}   type= 'button' content={buttonContent} />
      </div>
     </Container>


      <VariableContainer containerClass='hidden lg:flex absolute bottom-20 right-20  flex-col gap-5 items-center'>
          <AnimationWrapper 
            settings={{delay:1.5}}
            type='ul'
            innerClass={`flex flex-col gap-2 items-center`}
          >
          <>
          {items.map((channel: any , i)=>{
            return  (
              <Button key={`channel-${i}`}  style={'icon'} link={channel.socialLink}  type= 'link' content={channel.socialContent} />
            ) 
          })}
          </>
        <div className="h-20 w-[1px] bg-custom-faded-light"></div>
        </AnimationWrapper>
      </VariableContainer>  
          
  </section>
  )
}

export default Default