import * as prismicT from "@prismicio/types";
import  {ReactNode } from "react";

// Utils //

export type colour = {
    name: string
    light: string
    dark: string
}

export interface ColourProps {
	palette: {
		colour: colour[]
	}
  
}

export interface ThemeToggleProps {
	className?: string
}

export interface SeoProps {
  title: string,
  description: string,
  ogImage: {
    url?: string
  },
}
// Define general type for useWindowSize hook, which includes width and height
export interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}
export interface AnimationWrapperProps {
  children: JSX.Element | JSX.Element[] ,
  innerClass?: string| null | undefined
  type?: string| null | undefined
  variantType?: "alt" | "default" 
  settings?: {
    bounce?: number,
    delay?: number,
    duration?: number,
  }
}

export interface LoadingProps {
  time: number
  setIsLoading: any
}



// Pages //

export interface PageContent {
  children?: ReactNode,
}

export interface PageProps {
    slices: any[],
    header: {
      logoAction: string,
      logoContent:  prismicT.RichTextField,
      logoTarget: string,
      navItem: any[]
    },
    footer: FooterProps
    colourPalette: any,
    seo: {
      title: string,
      description: string,
      ogImage: {
        url?: string
      },
    }
    dynamicFields?: any
  }

// Components //

export interface ButtonProps {
  currentPage?: string,
  target?: string,
  type?: string | null,
  actionTarget?: string,
  style: string | null,
  classList?: string,
  textFirst?: boolean,
  eventHandler?: any
  file?: any
  icon?: any
  link?: any,
  text?: prismicT.AnyRegularField,
  content: prismicT.RichTextField 
}

export interface PercentLoaderProps {
  amount: number
}

export interface ProgressBarProps  {
  translateAmount: number | string
}

export interface FooterProps {
  copyright: string,
  isFixed: boolean,
  text:  prismicT.RichTextField,
  title:  prismicT.RichTextField,
  altLinks:  prismicT.RichTextField,
  alternativeContact:  any[],
}

export interface ButtonsProps  {
  buttons: ButtonProps[] | any[]
  replaceKey?: boolean
}

export interface PageLayoutProps {
  children?: ReactNode,
  header: {
    logoAction: string,
    logoContent:  prismicT.RichTextField,
    logoTarget: string,
    navItem: any[]
  },
  footer: FooterProps
  seo: {
    title: string,
    description: string,
    ogImage: {
      url?: string
    },
  };
}


// Slices //


export type HeroSlice = prismicT.Slice<
	"hero",
	{
		content: prismicT.RichTextField;
		uid: prismicT.KeyTextField;
		buttonStyle: prismicT.KeyTextField;
		buttonAction: string;
		buttonTarget: string;
		buttonContent: prismicT.RichTextField;
	}
>;



export type  ProjectDefault = prismicT.Slice<
	"project",
	{
		title: prismicT.RichTextField;
		text: prismicT.RichTextField;
		uid: prismicT.KeyTextField;
		buttonGithub: prismicT.RichTextField;
		buttonWebsite: prismicT.RichTextField;
	}
>;

export interface ProjectProps {
  index: number
  github: any
  image: any
  name:  any,
  summary:  any,
  tools:  any,
  website:  any,
  buttonGithub: prismicT.RichTextField;
  buttonWebsite: prismicT.RichTextField;
}

export type AccordianDefault = prismicT.Slice<
	"Accordian",
	{
		title: prismicT.RichTextField,
		text: prismicT.RichTextField,
		uid: prismicT.KeyTextField;
	}
>;

export type GeneralDefault = prismicT.Slice<
	"general",
	{
		title: prismicT.RichTextField,
		text: prismicT.RichTextField,
		uid: prismicT.KeyTextField
		image: {
			url: string, 
			dimensions?: any, 
			alt?: string, 
		}
	}
>;

export type GeneralTechStack = prismicT.Slice<
	"general",
	{
		title: prismicT.RichTextField,
		text: prismicT.RichTextField,
		uid: prismicT.KeyTextField
	}
>;




export interface SliceProps {
  slice: any,
}



// Form fields //

export type fieldTypes = 'textInput' | 'radioStyled' | 'radioBasic' | 'number' | 'checkboxStyled' | 'checkboxBasic' | 'select'


export type options = {
    uid: string
    label: string
    img: string
}

export interface fieldValue  {
    uid: string
    type: fieldTypes
    label: string
    placeholder?: string
    requiredErrorMsg?: string
    dynamicData?: any
    options?: options[]
    formikFunc?: any
    wrapContent?: boolean
}

export interface FormFieldsProps {
  data: {
    id: number
    label: string
    fields: fieldValue[]
  },
  dynamicData?: any,
  formikFunc?: any
}


// Game //

export interface FormWrapperProps {
  initialValues: any,
  numOfGroups: number,
  uniqueGroups: any,
  groupObjects:any
}

export interface formData {
  avatar: string,
  name: string,
  categories: string[],
  difficulty: string,
  limit: number,
  userLocation: string
}

// returned from Trivia API
export interface questionProps {
  id: string
  correctAnswer: string
  incorrectAnswers: string[]
  category: string
  type: string
  question: string
}

// formatted for output as form field
export type answerProp = {
  [key: string ]: {
    uid: string,
    question: string,
    answer: string
    options: any[]
  } 
}

export interface GameQuestionProps {
    data: {
      id: number
      type: fieldTypes
      uid: string
      options: options[]
      question: string
    },
}

// Header //

export interface HeaderProps {
  logoContent:  prismicT.RichTextField,
  logoTarget?: string,
  logoAction?: string,
  logoLink?: prismicT.LinkField,
  navItem: any[]
}
export interface NavMenuProps {
  navItem: any
  scrolled: string
  isMobile: boolean
  menuIsOpen: boolean
  handleClick?: any
}
export interface NavbarProps {
  navItem: any
  scrolled: string
  menuIsOpen: boolean
  isMobile: boolean
  setMenuIsOpen: any
  logo?: {
    action?: string| null | undefined;
    target?: string | undefined;
    content: any
    link?: any
    type?: any
  }
}
export interface ToggleProps {
  menuOpen: boolean
  toggle: any
}

export interface AppHeaderProps  {
  title: string
  limit?: number
  backLink?: string
}