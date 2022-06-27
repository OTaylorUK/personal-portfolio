import * as prismicT from "@prismicio/types";
import  {ReactNode } from "react";

export interface ContainerProps {
  children?: ReactNode,
  containerClass?: string
  settings?: {
      outer?: {
        align?: string ,
        justify?: string ,
        padding?: string ,
      },
      inner?: {
        align?: string ,
        gap?: string ,
        padding?: string ,
        width?: string
        bg?: string
      }
      animation?:{
        initialState?: "onscreen" | "offscreen",
        inViewAmount?: number,
        bounce?: number,
        delay?: number,
        duration?: number,
      }
  }
}

export interface LayoutProps {
  children?: ReactNode,
  header: {
    logoAction: string,
    logoContent:  prismicT.RichTextField,
    logoTarget: string,
    navItem: any[]
  },
  footer: {
    copyright: string,
    text:  prismicT.RichTextField,
    title:  prismicT.RichTextField,
    altLinks:  prismicT.RichTextField,
    alternativeContact:  any[],
  }
  seo: {
    title: string,
    description: string,
    ogImage: {
      url?: string
    },
  };
}

export interface PageContent {
  children?: ReactNode,
}
