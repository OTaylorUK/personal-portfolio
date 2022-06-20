
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import ColourPalette from "./ColourPalette";
import Header from "./Header";
import * as prismicT from "@prismicio/types";
import Footer from "./Footer";

interface LayoutProps {
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
  palette: {
		colour: any[]
	},
  seo: {
    title: string,
    description: string,
    ogImage: {
      url?: string
    },
  };
}

const Layout: FC<LayoutProps> = ({ children, seo, palette, header,footer }) => {

  
  return (
    <Fragment>
      <Head>
        <title>{seo.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header {...header}/>
      <div className="page-sections mb-20  overflow-hidden items-center gap-y-48 flex flex-col "> 
      {children}
      </div>
      <Footer {...footer} />
      <ColourPalette palette={palette} />
      
    </Fragment>
  );
};

export default Layout;