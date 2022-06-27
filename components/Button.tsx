import Link from 'next/link'
import Svg from 'react-inlinesvg';
import React, { FC } from "react";
import * as prismicT from "@prismicio/types";
import {Link as ScrollLink} from 'react-scroll'
import { PrismicRichText } from '@prismicio/react';
import { ButtonProps } from '../types/Button';

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
          paragraph: ({ children }) =>  <>{children}</>,
          image: ({node}) => {
            return(
              <Svg className="icon" no-cors="true" src={node?.url} width={node.dimensions?.width} height={node.dimensions?.height} title={node?.alt ? node?.alt : 'Svg icon inside a button' } />
            )
          },
        }}
      />  
  )
}

const Button: FC<ButtonProps> = ({ file, currentPage = '' , target='_blank', classList ='', type='button', style = 'primary', link = null, text ='', icon = {}, eventHandler, textFirst = true, content, actionTarget}) => {


  let isCurrentPage = false;


  let variableClass = '';

  switch (style.toLowerCase()) {
    case 'text':
      variableClass = 'btn-text'
      break;
    case 'icon':
      variableClass = 'btn-icon'
      break;
    case 'ghost':
      variableClass = 'btn-ghost'
      break;
    case 'ghost-small':
      variableClass = 'btn-ghost-small'
      break;
    case 'ghost-filled':
      variableClass = 'btn-ghost-filled'
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
              offset={-120}
              to={actionTarget} 
              spy={true} 
              smooth={true}
              key={`btn`} 
              className={`xxcwdfwe ${buttonClass} `}
              >
              {formatButtonContent(content)}
            </ScrollLink>
          )
        }else{
          return null
        }
        break;
      case 'download':
        console.log(file);
        
        return(
          <a key={`btn`} href={file?.url} target="_blank" className={buttonClass} rel="noreferrer">
          {formatButtonContent(content)}
        </a>
        )
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
}

export default Button

