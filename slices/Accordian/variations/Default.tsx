import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { motion } from "framer-motion";
import { useState } from 'react';
import { animateUp, wrapperAnimationSettings } from '../../../common/framerSettings';
import { AccordianDefault } from '../../../common/types';
import WorkSlide from '../../../components/WorkSlide';


const Default = ({ slice }: SliceComponentProps<AccordianDefault>) => {

  const { primary, items, slice_type } = { ...slice }
  const { title, text, uid } = primary;

  const [selectedTab, setSelectedTab] = useState(items[0])

  return (
    <motion.section
      {...wrapperAnimationSettings}
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center text-custom-faded content-container px-0`}
    >
      <div className={`w-full flex flex-col  gap-10 lg:gap-20  `}>
        <div className={`min-h-[40vh] flex flex-col  text-left gap-20 lg:flex-row `}>
          <motion.div
            variants={animateUp}
            className={`flex-1 flex flex-col justify-center px-4 lg:px-0  gap-2 text-custom-faded items-start`}
          >
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

          <motion.div
            variants={animateUp}
            className={`flex-1 flex flex-col   align-start`}
          >
            <nav className="flex flex-col gap-24 whitespace-nowrap bg-custom-faded-light text-left">
              <ul className='flex flex-row'>
                {items.map((project: any, i) => {

                  return (
                    <li
                      key={i}
                      className={`py-4 p-6 relative cursor-pointer  border-t-2 hover:text-custom-accent text-custom-primary ${selectedTab.uid === project.uid ? ' bg-white-100' : ''}`}
                      onClick={() => setSelectedTab(project)}
                    >
                      {project.uid}
                      {selectedTab.uid === project.uid ? (
                        <motion.div className="absolute w-full -top-[1px] left-0 h-[1px] bg-custom-primary" layoutId="underline" />
                      ) : null}
                    </li>
                  )
                })}

              </ul>
            </nav>
            <div className="p-8 flex flex-col gap-24 overflow-hidden bg-custom-faded-light">
              <WorkSlide
                selectedTab={selectedTab}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Default