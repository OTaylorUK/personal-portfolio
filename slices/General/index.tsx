import { log } from "console";
import React, { FC } from "react";
import { resolveVariation } from '../../utils/helpers';
import * as SectionComponents from './variations'

interface LayoutProps {
  slice: any,
  index: number
}

const General: FC<LayoutProps> = ({ slice, index }) => {
  
  const SectionComponent = resolveVariation(slice?.variation, SectionComponents)

  if (!SectionComponent) {
    return <div key={slice.variation}>Missing slice: {slice.variation}</div>
  }

  return <SectionComponent slice={slice} index={index}  />
}

export default General