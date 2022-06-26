

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";


interface NavMenuProps {
  navItem: any
  isMobile: boolean
  menuIsOpen: boolean
}



const listItem = {
  offscreen: { opacity: 0, y: '-100%' },
  onscreen: { opacity: 1, y: 0 }
}


const variants = {
  open: { opacity: 1, x: 0,
    transition: {
      bounce: 0,
      duration: 0.25,
    } },
  closed: { opacity: 0, x: "100%" },
}

const NavMenu = ({ isMobile, menuIsOpen,  navItem}:NavMenuProps): JSX.Element => {


  if(isMobile){
    return(
      <motion.ul
				initial={isMobile ? {opacity: 0, x: "100%" } : {}}
				animate={menuIsOpen ? "open" : "closed"}
				variants={isMobile ? variants : {}}
				className={`text-custom-white -z-30  h-[101vh]  absolute   min-w-[60vw] bg-custom-tertiary flex-col gap-[3vh] p-12   flex justify-center items-start top-0 right-0`}
				>

            {navItem.map((item: any, i: number)=>{
              let variableClass = 'text-inherit';
              if(item.style === 'ghost' || item.style === 'ghost-small'){
                variableClass = ''
              }
                return(
                  <motion.li key={i} className="w-full" variants={listItem} >
                        <Button actionTarget={item.target}    classList={`relative justify-start z-10 ${variableClass}`} style={item.style !== null ? item.style : 'default'}   type={item.action !== null ? item.action : 'link'} content={item.content} />
                  </motion.li>
                )
            })}
				</motion.ul>
    )
  }else{
    return(
      <ul className={`flex flex-row gap-6 items-center`}>
      {navItem.map((item: any, i: number)=>{
        let variableClass = 'text-inherit';
        if(item.style === 'ghost' || item.style === 'ghost-small'){
          variableClass = ''
        }
          return(
            <motion.li key={i} variants={listItem} >
                  <Button actionTarget={item.target}    classList={`relative z-10 ${variableClass}`} style={item.style !== null ? item.style : 'default'}   type={item.action !== null ? item.action : 'link'} content={item.content} />
            </motion.li>
          )
      })}
    </ul>
    )
  }
  
};

export default NavMenu;