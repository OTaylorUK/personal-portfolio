
import Head from "next/head";
import React, { FC,  useCallback,  useRef, useState } from "react";
import {Header} from "../Header"
import Footer from "../Footer";
import { useResizeDetector } from 'react-resize-detector';
import Loading from "../Helpers/Loading";
import PageContent from "./PageContent";
import { LayoutProps } from "../../types/Layout";

const Layout: FC<LayoutProps> = ({ children, seo, header,footer }) => {

  const footerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true)
  const [footerHeight, setFooterHeight] = useState(0)

	const onResize = useCallback(() => {
    if (window === undefined) return

		if(window){
      let footerHeight = 0;
      
			if(window.innerWidth >= 1024 ){
        if(footerRef.current){
          const height = footerRef.current?.clientHeight  + 100 // account for err message height
          if(height <=  window.innerHeight){
            footerHeight = height
          }
        }
			}
      setFooterHeight(footerHeight)
    }
	}, []);

	const { ref } = useResizeDetector({onResize});
 

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={`@VirtualJungleUK`} />
        <meta name="twitter:creator" content={`@VirtualJungleUK`} />
        <meta property="og:url" content={'https://www.ollie-taylor.uk/'} />
        <meta name="og:title" content={seo?.title} />
        <meta name="og:description" content={seo?.description} />
        <meta property="og:image" content={seo?.ogImage?.url} />
        <meta property="og:type" content="article" />
        <meta name="description" content={seo?.description} />

        
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>


      </Head>

      <Header {...header}/>

      <div ref={ref}  className="z-20  inline-block  overflow-auto w-full  min-h-[100vh]" style={{marginBottom: `${footerHeight}px` }}>

      {isLoading ? <Loading time={.45} setIsLoading={setIsLoading} /> :  <PageContent>{children}</PageContent> }
      
      </div>

      <Footer ref={footerRef} {...footer}  isFixed={footerHeight === 0 ? false : true} />
      
    </>
  )
};

export default Layout;