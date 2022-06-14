import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';
import ProjectSlide from '../../../components/ProjectSlide';

type ProjectSlice = prismicT.Slice<
	"project",
	{
		title: prismicT.RichTextField;
		uid: prismicT.KeyTextField;

	}
>;

// interface ProjectProps {
//   github: prismicT.AnyRegularField
//   image: prismicT.AnyRegularField
//   name:  prismicT.AnyRegularField,
//   summary:  prismicT.AnyRegularField,
//   tools:  prismicT.AnyRegularField,
//   website:  prismicT.AnyRegularField,
  
// }


const Default = ({ slice,index }: SliceComponentProps<ProjectSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {title, uid} = primary;

  let isOdd = true;

  if(index % 2 === 0){
    isOdd = false;
  }


  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center`}
    >
    <Container>
      <SectionHeader title={title} isOdd={isOdd} />

      <div className="flex flex-col gap-24 ">
          {items.map((project , i)=>
            <ProjectSlide 
              index={i}
              github={project.github}
              image={project.image}
              name={project.name}
              summary={project.summary}
              tools={project.tools}
              website={project.website}
              key={i}
            />
          )}
      </div>
    </Container>

  </section>
  )
}

export default Default