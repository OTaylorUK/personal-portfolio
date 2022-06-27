
import React, { FC } from "react";
import { PageContent } from "../../types/Layout";

const PageContent: FC<PageContent> = ({ children}) => {
  return (
    <div className=" bg-custom-white page-sections pb-48  overflow-hidden items-center gap-y-20 lg:gap-y-48 flex flex-col " > 
      {children}
    </div>
  )
};

export default PageContent;