import { PrismicLink, PrismicRichText } from '@prismicio/react';
import * as prismicT from "@prismicio/types";
import { FC } from "react";
import Svg from 'react-inlinesvg';
import { Link as ScrollLink } from 'react-scroll';
import { ButtonProps } from '../common/types';
import { useAnalyticsEvent } from '../hooks/useAnalytics';

const formatButtonContent = (content: prismicT.RichTextField | null): JSX.Element | null => {

  return (
    <PrismicRichText
      field={content}
      components={{
        paragraph: ({ children }) => <>{children}</>,
        image: ({ node }) => {
          return (
            <Svg className="icon" no-cors="true" src={node?.url} width={node.dimensions?.width} height={node.dimensions?.height} title={node?.alt ? node?.alt : 'Svg icon inside a button'} />
          )
        },
      }}
    />
  )
}

const Button = ({ file, target='_self', classList ='', actionTarget, type='button', style = 'default', link = null, eventHandler, textFirst = true, content}:ButtonProps): JSX.Element => {

  const btnStyle = style!.toLowerCase()

  const { trackCustomEvent } = useAnalyticsEvent();

  let isCurrentPage = false;

  let variableClass = '';

  switch (btnStyle) {
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


  const triggerEvent = () => {
    trackCustomEvent({
      eventName: 'clicked_download_cv',
      eventTitle: 'download_cv'
    });
  }


  if (type === 'link' && link) {
    return (
      <PrismicLink key={`link`} className={buttonClass} field={link}>
        {formatButtonContent(content)}
      </PrismicLink>
    )
  } else {

    // ScrollLink
    switch (type) {
      case 'scroll-to':
        if (actionTarget) {
          return (
            <ScrollLink
              offset={-120}
              to={actionTarget}
              spy={true}
              smooth={true}
              key={`btn`}
              className={` ${buttonClass} `}
              onSetActive={eventHandler}
            >
              {formatButtonContent(content)}
            </ScrollLink>
          )
        } else {
          return <></>
        }
        break;
      case 'download':
        return (
          <a key={`btn`} onClick={() => triggerEvent()} href={file?.url} target="_blank" className={buttonClass} rel="noreferrer">
            {formatButtonContent(content)}
          </a>
        )
        break;
      default:
        return (
          <button key={`btn`} className={buttonClass}>
            {formatButtonContent(content)}
          </button>
        )
        break;
    }

  }
}

export default Button

