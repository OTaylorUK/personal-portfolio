
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import ColourPalette from "./ColourPalette";
import Header from "./Header";

// import { Container } from "../styled-components";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

interface ContainerProps {
  children?: ReactNode,
  settings?: {
      gap?: string ,
      justifyCenter?: string ,
      width?: string
  }
}

const Container: FC<ContainerProps> = ({ children, settings }) => {
  
    const { gap, width, justifyCenter } = {...settings}

  return (
    <div className={`min-h-[30vh] container px-4 md:px-12 flex flex-col items-center  ${justifyCenter ? justifyCenter : ''}`}>
        <div className={`content w-full  ${width ? width : 'md:w-11/12'} flex flex-col ${gap ? gap : 'gap-20'}`}>
            {children}
        </div>
    </div>
  );
};

export default Container;