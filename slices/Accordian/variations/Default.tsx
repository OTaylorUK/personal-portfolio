import React, { useEffect, useState } from 'react'
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import {
	SliceComponentProps,
} from "@prismicio/react";
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';
import WorkSlide from '../../../components/WorkSlide';
import { AnimatePresence, motion } from "framer-motion"

type AccordianSlice = prismicT.Slice<
	"Accordian",
	{
		title: prismicT.RichTextField;
    uid: prismicT.KeyTextField;
	}
>;



const Default = ({ slice,index  }: SliceComponentProps<AccordianSlice>) => {

  const {primary,items, slice_type} = {...slice}
  const {title, uid} = primary;

  let isOdd = true;

  if(index % 2 === 0){
    isOdd = false;
  }

  const [selectedTab, setSelectedTab] = useState(items[0])

  // useEffect(() => {
  //   items.map((project: any , i)=>{
  //     const uid = project.uid.toLowerCase().replace(' ', '-')
  //     if(i === 0){
  //       setIsOpen(uid)
  //     }
  //   })
  // },[items])

  return(
    <section 
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full  flex justify-center items-center text-center text-custom-faded`}
    >
    <Container>
      <SectionHeader title={title} isOdd={isOdd} />

      <div className="flex flex-row gap-20 ">
        <nav className="flex flex-col gap-24 whitespace-nowrap text-left">
          <ul>
            {items.map((project: any , i)=>{

              return(
                <li
                key={i}
                className={`py-4 px-2 relative cursor-pointer hover:text-custom-accent ${selectedTab.uid === project.uid ? 'text-custom-accent bg-custom-secondary' : 'text-custom-white'}`}
                onClick={() => setSelectedTab(project)}
              >
                {project.uid}
                {selectedTab.uid === project.uid ? (
                  <motion.div className="absolute h-full -left-[1px] top-0 w-[1px] bg-custom-accent" layoutId="underline" />
                ) : null}
                </li>
              )
            })}
            
            </ul>
        </nav>
        <div className="flex flex-col gap-24 overflow-hidden">
          <WorkSlide 
              selectedTab={selectedTab}
          />
        </div>
      </div>
    </Container>

  </section>
  )
}

export default Default