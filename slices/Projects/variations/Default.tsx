import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { motion } from "framer-motion";
import { animateUp, wrapperAnimationSettings } from '../../../common/framerSettings';
import { ProjectDefault } from '../../../common/types';
import ProjectSlide from '../../../components/ProjectSlide';

import {  Variants } from "framer-motion";

export const defaultAnimations: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35
    }
  }
}



const Default = ({ slice, index }: SliceComponentProps<ProjectDefault>) => {

  const { primary, items, slice_type } = { ...slice }
  const { title, text, uid, buttonGithub, buttonWebsite } = primary;

  wrapperAnimationSettings['variants'] = defaultAnimations
  return (
    <motion.section
      {...wrapperAnimationSettings}
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center  overflow-hidden 4 content-container px-0 `}
    >
      <div className={`w-full flex flex-col bg-custom-faded-light gap-10 lg:gap-20  py-10 px-4 lg:p-20`}>
        <motion.div className={`flex-1 flex flex-col items-center justify-center  gap-6 text-custom-faded px-2 lg:w-8/12 m-auto`} variants={animateUp}>
          <PrismicRichText
            field={title}
          />
          <PrismicRichText
            field={text}
          />
        </motion.div>
        <div className="flex flex-col gap-8 lg:gap-24 ">
          {items.map((project, i) =>
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
      </div>

    </motion.section>
  )
}

export default Default