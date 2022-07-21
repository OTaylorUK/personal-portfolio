import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { motion } from "framer-motion";
import Image from "next/image";
import { animateUp, wrapperAnimationSettings } from '../../../common/framerSettings';
import { GeneralTechStack } from '../../../common/types';
import { numIsOdd } from '../../../common/utils';


const TechStack = ({ slice, index }: SliceComponentProps<GeneralTechStack>) => {

  const { primary, items, slice_type } = { ...slice }
  const { title, text, uid } = primary;

  const isOdd = numIsOdd(index)

  return (
    <motion.section
      {...wrapperAnimationSettings}
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center  overflow-hidden`}
    >
      <div className={`content-container`}>

        <div className={`flex flex-col  text-left gap-20 ${isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'} `}>

          <motion.div className={`flex-1 flex flex-col justify-center  gap-2 text-custom-faded items-start`} variants={animateUp}>
            <PrismicRichText
              field={title}
            />
            <PrismicRichText
              field={text}
              components={{
                list: ({ children }) => <ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>{children}</ul>,
                listItem: ({ children }) =>
                  <li className='flex flex-row items-center gap-2'>
                    <svg className="grow-0 shrink-0 basis-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.66699 11.3335L6.66699 7.3335L2.66699 3.3335" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 12.6665H13.3333" stroke="#2CFF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>{children}
                  </li>,
              }}
            />
          </motion.div>

          <motion.div className={`flex-1 bg-custom-faded-light p-10 gap-10 grid grid-cols-2 items-center justify-items-center`} variants={animateUp}>
            {items.map((tech: any, i) => {
              const { logo, name } = tech
              return (
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
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default TechStack