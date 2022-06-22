
import React, { FC } from "react";
import Button from './Button';
import { useScrollHandler } from "../hooks/useScrollHandler";
import { motion } from "framer-motion"
import * as prismicT from "@prismicio/types";
import VariableContainer from "./VariableContainer";
import { findAndReplaceHolder } from "../utils/helpers";
import Container from "./Container";
import AnimationWrapper from "./AnimationWrapper";
import { PrismicRichText } from "@prismicio/react";
import ContactForm from "./ContactForm";

interface FooterProps {
    copyright: string,
    text:  prismicT.RichTextField,
    title:  prismicT.RichTextField,
    altLinks:  prismicT.RichTextField,
    alternativeContact:  any[],
    ref: any,
}


const Footer = React.forwardRef<HTMLDivElement, FooterProps>((props, ref) => {

    const {copyright, text, title, altLinks, alternativeContact} = props
    let updatedCopyright = findAndReplaceHolder({'year': new Date().getFullYear()}, copyright)

    
    return(

    <div ref={ref} className={`relative lg:fixed bottom-0 right-0 -z-50 w-full py-10 lg:py-20 min-h-[60vh] flex justify-center items-center text-left bg-gradient-to-br bg-gradient  from-custom-primary via-custom-secondary to-custom-tertiary animate-bg text-custom-white`}>
        <Container>
            <div className={`flex flex-col lg:flex-row align-start  text-left gap-20 'lg:flex-row` }>

                <div className={`flex-1 flex flex-col justify-start  gap-10 text-custom-faded items-start`}>
                    <div className={` flex flex-col gap-6 `}>
                        <PrismicRichText 
                            field={title}
                            components={{
                                heading2: ({ children }) =>  <h2 className='text-inherit'>{children}</h2>,
                            }}
                        />
                        <PrismicRichText 
                            field={text}
                            components={{
                                paragraph: ({ children }) =>  <p className='text-custom-faded-light'>{children}</p>,
                            }}
                        />  
                    </div>

                    <ContactForm/>    
                </div>

                <div className="flex flex-col gap-14">
                        {alternativeContact.map((item, i)=>{
                            console.log({item});
                            return (
                                
                                <div key={i}  className="flex flex-col gap-2">
                                <PrismicRichText 
                                    field={item.title}
                                    components={{
                                        heading3: ({ children }) =>  <h3 className='text-inherit'>{children}</h3>,
                                    }}
                                    key={i}
                                />
                                <PrismicRichText 
                                    field={item.content}
                                    
                                />
                                </div>
                            )
                        })}
                </div>

            </div>
            <div className="flex flex-row justify-between w-full">
                <span>{updatedCopyright}</span>
                <PrismicRichText 
                    field={altLinks}
                    components={{
                        paragraph: ({ children }) =>  <p className='text-custom-faded-light'>{children}</p>,
                    }}
                />  
            </div>
        </Container>
    </div>
    )
});

Footer.displayName = "Footer";

export default Footer;