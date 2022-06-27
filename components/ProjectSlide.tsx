
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import AnimationWrapper from "./Helpers/AnimationWrapper";
import VariableContainer from "./Layout/VariableContainer";
import Button from "./Button";
import { ProjectProps } from "../types/ProjectSlice";
import { numIsOdd } from "../utils/helpers";


const ProjectSlide = ({github,image,name,summary,tools,website,index, buttonGithub, buttonWebsite}:ProjectProps): JSX.Element => {
  const isOdd = numIsOdd(index)

  return (

    <VariableContainer containerClass='flex flex-col lg:flex-row  gap-4  justify-center overflow-hidden group'>

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
                    list: ({ children }) =>  <ul className='flex flex-row row-wrap gap-4 text-custom-faded-dark opacity-90 text-sm'>{children}</ul>,
                  }}
              /> 
        </AnimationWrapper>
        <AnimationWrapper 
          innerClass={`flex-1 relative`}
          variantType={'alt'}
        >
          <Image
          className={`rounded-xl lg:rounded-md overflow-hidden transition-transform duration-500 opacity-90 group-hover:opacity-100 group-hover:scale-105`}
              src={image?.url}
              alt={image?.alt}
              width={image?.dimensions?.width}
              height={image?.dimensions?.height}
              layout={'responsive'}
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute w-full h-full z-10 top-0 left-0 flex flex-col justify-center items-center p-4 gap-6">
           
           {github.url && <Button link={github}  style="ghost-filled"  classList={` z-10 `}   type={'link'} content={buttonGithub} />}
            
            {website.url && <Button link={website}  style="ghost-filled"  classList={` z-10 `}   type={'link'} content={buttonWebsite} />}

            <div className="absolute w-full h-full -z-10 top-0 left-0 bg-custom-white opacity-40">
            </div>
          </div>
        </AnimationWrapper>

      </div>

      </VariableContainer>  


  );
};

export default ProjectSlide;