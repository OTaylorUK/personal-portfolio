
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode,
}

const PageContent: FC<LayoutProps> = ({ children}) => {
  return (
    <div className=" bg-custom-white page-sections pb-48  overflow-hidden items-center gap-y-20 lg:gap-y-48 flex flex-col " > 
      {children}
    </div>
  )
};

export default PageContent;