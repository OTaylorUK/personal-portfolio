import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
	SliceComponentProps,
} from "@prismicio/react";
import Container from '../../../components/Layout/Container';
import ProjectSlide from '../../../components/ProjectSlide';
import AnimationWrapper from '../../../components/Helpers/AnimationWrapper';
import { ProjectDefault } from '../../../types/ProjectSlice';

const Default = ({ slice,index }: SliceComponentProps<ProjectDefault>) => {

  const {primary,items, slice_type} = {...slice}
  const {title, text, uid, buttonGithub, buttonWebsite} = primary;

  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center`}
    >
    <Container 
      settings={{  
        outer: {
          padding: 'p-0 lg:px-4'
        },
        inner: {
          gap: 'gap-20' ,
          bg: 'bg-custom-faded-light',
          padding: 'py-10 px-4 lg:p-20'
        }
      }}
    >
      
      <AnimationWrapper 
        variantType={'alt'}
        innerClass={`flex-1 flex flex-col items-center justify-center  gap-6 text-custom-faded px-6 lg:w-8/12 m-auto`}
      >
        <PrismicRichText 
            field={title}
        />
        <PrismicRichText 
          field={text}
        /> 
      </AnimationWrapper>

      <div className="flex flex-col gap-8 lg:gap-24 ">
          {items.map((project , i)=>
            <ProjectSlide 
              index={i}
              github={project.github}
              image={project.image}
              name={project.name}
              summary={project.summary}
              tools={project.tools}
              website={project.website}
              buttonGithub={buttonGithub}
              buttonWebsite={buttonWebsite}
              key={i}
            />
          )}
      </div>
    </Container>

  </section>
  )
}

export default Default