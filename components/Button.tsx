import Link from 'next/link'
import Svg from 'react-inlinesvg';
import React, { FC } from "react";
import * as prismicT from "@prismicio/types";
import {Link as ScrollLink} from 'react-scroll'
import { PrismicRichText } from '@prismicio/react';


interface ButtonProps {
  currentPage: string,
  target: string,
  type: string,
  actionTarget?: string,
  style: string,
  classList?: string,
  textFirst: boolean,
  eventHandler?: any
  icon?: any
  link?: any,
  text: prismicT.AnyRegularField,
  content: prismicT.RichTextField
}

// { currentPage = null , btnContext = null, target='_blank', classList ='', type='button', style = 'primary', link, text ='', icon = {}, textFirst = true}

const formatButtonLink = (link: any) => {

  const retSettings = {
    target: '_self',
    btnHref: '',
    currentPage: '',
    isCurrentPage: false,
  }
  
  switch (link?.link_type.toLowerCase()) {
    case 'web':
      if(link?.url){
        retSettings.btnHref = link?.url
        retSettings.target = '_blank'
      }
      break;
  
    case 'document':
      if(link?.slug){
        if (link?.slug !== 'home-page') {
          retSettings.btnHref = `/${link?.slug}`
        }else{
          retSettings.btnHref = `/`
        }
        if(retSettings.currentPage === retSettings.btnHref){
          retSettings.isCurrentPage = true
        }
        retSettings.target = '_self'
      }

      break;
  }

  return retSettings

}

const formatButtonContent = (content: prismicT.RichTextField | null ) : JSX.Element | null => {

  return (
    <PrismicRichText 
        field={content}
        components={{
          image: ({node}) => {
            return(
              <Svg className="icon" no-cors="true" src={node?.url} width={node.dimensions?.width} height={node.dimensions?.height} title={node?.alt ? node?.alt : 'Svg icon inside a button' } />
            )
          },
        }}
      />  
  )
}

const Button: FC<ButtonProps> = ({ currentPage = '' , target='_blank', classList ='', type='button', style = 'primary', link = null, text ='', icon = {}, eventHandler, textFirst = true, content, actionTarget}) => {


  let isCurrentPage = false;


  let variableClass = '';

  switch (style.toLowerCase()) {
    case 'text':
      variableClass = 'btn-text'
      break;
    case 'ghost':
      variableClass = 'btn-ghost'
      break;
    default:
      variableClass = 'btn-default'
      break;
  }

  const buttonClass = classList.concat(` ${isCurrentPage ? 'is-current-page' : ''} btn ${variableClass}`)


  if(type === 'link' && link){
    const {btnHref } = formatButtonLink(link)
    return (
      <Link  href={btnHref}>
        <a  key={`link`} className={buttonClass} target={target}>{formatButtonContent(content)}</a>
        {/* <a  onClick={handleClick} key={`link`} className={buttonClass} target={target}>{buttonContent}</a> */}
      </Link>
    )
  }else{
    
    // ScrollLink
    switch (type) {
      case 'scroll-to':
        if(actionTarget){
          return(
            <ScrollLink 
              to={actionTarget} 
              spy={true} 
              smooth={true}
              key={`btn`} 
              className={buttonClass}
              >
              {formatButtonContent(content)}
            </ScrollLink>
          )
        }else{
          return null
        }
        
        break;
    
      default:
        return(
          <button key={`btn`} className={buttonClass}>
            {formatButtonContent(content)}
          </button>
        )
        break;
    }
  
    }



  // icon svg

  // let setHeight = icon?.customDimension?.height ? icon?.customDimension?.height : icon?.dimensions?.height 

  // let setWidth = icon?.customDimension?.width ? icon?.customDimension?.width : icon?.dimensions?.width 

  // let iconInfo = {
  //   url: icon?.url ? icon?.url : null ,
  //   alt: icon?.alt ? `icon of ${icon?.alt}` : 'Icon with no description' ,
  //   width: setWidth ? `${setWidth}px` : '40px' ,
  //   height: setHeight ? `${setHeight}px` : 'auto' ,
  // }

  // let buttonIcon = '';

  // if (iconInfo?.url) {
  //   buttonIcon = <Svg className="icon" no-cors="true" src={iconInfo?.url} width={iconInfo?.width} height={iconInfo?.height} title={iconInfo?.alt} />
    
  // }





  // // // content order
  // // let buttonContent = [
  // //   buttonText,
  // //   // buttonIcon,
  // // ]
  // // if (!textFirst) {
  // //   content.reverse()
  // // }

  // // final class
  // const buttonClass = classList.concat(` ${isCurrentPage ? 'is-current-page' : ''} btn-style-${style.toLowerCase()}`)

  // const handleClick = ( ) => {
  //   if(typeof eventHandler === 'function'){
  //     eventHandler.call()
  //   }
  // }


  // if (type === 'button') {
  //   return (
  //     <button key={`btn`} className={buttonClass}>
  //       {/* {buttonContent?.map((content, i) => {
  //         return (
  //           <div key={`content-${i}`} >
  //            {content}
  //           </div>
  //         )
  //       })} */}
  //     </button>
  //   )
  // } else {
  //   return (
  //     <Link  href={btnHref}>
  //       <a  onClick={handleClick} key={`link`} className={buttonClass} target={target}>{buttonContent}</a>
  //     </Link>
  //   )
  // }

 
}

export default Button

