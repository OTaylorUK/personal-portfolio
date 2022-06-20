
import React, { FC } from "react";
import Button from '../components/Button';
import { useScrollHandler } from "../hooks/useScrollHandler";
import { motion } from "framer-motion"
import * as prismicT from "@prismicio/types";
import VariableContainer from "./VariableContainer";

interface HeaderProps {
    logoAction: string,
    logoContent:  prismicT.RichTextField,
    logoTarget: string,
    navItem: any[]
}

const Header: FC<HeaderProps> = ({logoAction, logoContent, logoTarget, navItem}) => {
    const scrolled = useScrollHandler();
	let navPos = 'top-[0]'
    

    let navClass = '';


    switch (scrolled) {
        case "hero":
            navClass = ' text-custom-white'
            break;
        case "scrolled":
            navClass = 'bg-custom-white text-custom-primary shadow-sm '
            break;
        default:
            navClass = 'text-custom-white'
            break;
    }
    
    const variants = {
        'no-scroll': { 
            opacity: 1,
            y: '10%' ,

        },
        'hero': {
            opacity: 0, 
            y: "-100%" ,
            transition: {
                type: "spring",
                bounce: .8,
                duration: .8,
                delay: .2
              }
        },
        'scrolled': { 
            opacity: 1,
            y: 0
        },
    }


    return(

    <div className={`flex flex-row items-center h-20  fixed top-0 left-0  z-20 w-full `}>
        <motion.header
        animate={scrolled}
        variants={variants}
        className={`w-full ${navClass}`}
        >
            <div className={`px-10 z-0  py-5 overflow-hidden  container max-w-screen-xl m-auto   flex flex-row items-center   h-full ${navPos} transition-[top] duration-300 justify-between`}>
                <div className="wrap">
                <Button actionTarget={logoTarget}  classList={`text-inherit w-30  `} style={'default'}   type={logoAction !== null ? logoAction : 'link'} content={logoContent} />

                </div>
                <nav className="">
                    <ul className="flex flex-row gap-9 items-center">

                    {navItem.map((item, i)=>{
                        return(
                            <li key={i}>
                                <Button actionTarget={item.target}    classList={`relative z-10 text-inherit `} style={item.style !== null ? item.style : 'default'}   type={item.action !== null ? item.action : 'link'} content={item.content} />
                            </li>
                        )
                    })}
                    </ul>

                </nav>
            </div>
        </motion.header>
    </div>
    )
}

export default Header;