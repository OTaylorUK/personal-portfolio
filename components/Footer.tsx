
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import { FooterProps } from "../common/types";
import { findAndReplaceHolder } from "../common/utils";
import ContactForm from "./ContactForm";

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(({ copyright, text, title, altLinks, alternativeContact, isFixed }, ref) => {
    const updatedCopyright = findAndReplaceHolder({ 'year': new Date().getFullYear() }, copyright)

    return (
        <div id="contact" ref={ref} className={`relative  bottom-0 right-0 -z-50 w-full py-10 lg:py-20 min-h-[60vh] flex justify-center items-center text-left bg-gradient-to-br bg-gradient  from-custom-primary via-custom-secondary to-custom-tertiary animate-bg text-custom-white`} style={{ position: `${isFixed ? 'fixed' : 'relative'}` }}>
            <div className="content-container">
                <div className={`flex flex-col lg:flex-row align-start  text-left gap-20 'lg:flex-row`}>

                    <div className={`flex-1 flex flex-col justify-start  gap-10 text-custom-faded items-start`}>
                        <div className={` flex flex-col gap-6 `}>
                            <PrismicRichText
                                field={title}
                                components={{
                                    heading2: ({ children }) => <h2 className='text-inherit'>{children}</h2>,
                                }}
                            />
                            <PrismicRichText
                                field={text}
                                components={{
                                    paragraph: ({ children }) => <p className='text-custom-faded-light'>{children}</p>,
                                }}
                            />
                        </div>

                        <ContactForm />
                    </div>

                    <div className="flex flex-col gap-14">
                        {alternativeContact.map((item, i) => {
                            return (
                                <div key={i} className="flex flex-col gap-2">
                                    <PrismicRichText
                                        field={item.title}
                                        components={{
                                            heading3: ({ children }) => <h3 className='text-inherit'>{children}</h3>,

                                        }}
                                        key={i}
                                    />
                                    <PrismicRichText
                                        field={item.content}
                                        components={{
                                            paragraph: ({ children }) => <p className='text-custom-faded-light'>{children}</p>,

                                        }}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className="flex flex-col gap-4 lg:flex-row justify-between w-full">
                    <span>{updatedCopyright}</span>
                    <PrismicRichText
                        field={altLinks}
                        components={{
                            paragraph: ({ children }) => <p className='text-custom-faded-light'>{children}</p>,

                        }}
                    />
                </div>
            </div>
        </div>
    )
});

Footer.displayName = "Footer";

export default Footer;