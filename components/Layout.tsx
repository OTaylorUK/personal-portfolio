
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import ColourPalette from "./ColourPalette";
import Header from "./Header";

// import { Container } from "../styled-components";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

interface LayoutProps {
  children?: ReactNode,
  header: {
    logoText: string,
    navItem: any[]
  },
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

const Layout: FC<LayoutProps> = ({ children, seo, palette, header }) => {

  
  return (
    <Fragment>
      <Head>
        <title>{seo.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      </Head>

      <Header {...header}/>
      <div className="page-sections overflow-hidden items-center gap-y-48 flex flex-col bg-gradient-to-b bg-gradient  from-custom-primary to-custom-secondary"> 
      {children}
      </div>
      {/* <Footer /> */}
      <ColourPalette palette={palette} />
      
    </Fragment>
  );
};

export default Layout;