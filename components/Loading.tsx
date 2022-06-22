

import React, { FC, useEffect, useState,  } from "react";
import { PrismicRichText } from '@prismicio/react'
import * as prismicT from "@prismicio/types";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "../utils/use-flipper";
import { heart, star } from "../utils/paths";

interface LoadingProps {
  time: number
  setIsLoading: any
}

const paths = [star, heart];
const colors = ["#ffffff", "#ffffff"];


const Loading = ({time,setIsLoading}:LoadingProps): JSX.Element => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          console.log("done");
          setIsLoading(false)
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => animation.stop();
  }, [pathIndex, progress, setIsLoading]);


  return (
    <>
       <div className="fixed top-0 left-0 z-50 h-full w-full bg-custom-primary text-custom-white flex justify-center items-center flex-col gap-4 text-center" style={{backgroundColor: '#181433'}}>
       <svg  width="70" height="70">
          <rect width="70" height="70" rx="15" fill="url(#paint0_linear_72_56)" />
          <linearGradient
            id="paint0_linear_72_56"
            x1="-7.18543"
            y1="-12.9801"
            x2="105.653"
            y2="8.95485"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB4EFF" />
            <stop offset="1" stopColor="#6C70E4" />
          </linearGradient>
          <path
            d="M35 21C27.1833 21 20.1167 24.1667 15 29.3L35 49L55 29.3C52.3798 26.6641 49.2633 24.5734 45.8305 23.1488C42.3977 21.7241 38.7167 20.9938 35 21Z"
            fill="#181433"
            fillOpacity="0.4"
          />
          <g>
            <motion.path  style={{fill: '#181433 !important'}}  d={path} />
          </g>
        </svg>
        <span  style={{color: '#ffffff'}}>Loading...</span>
       </div>
       </>
  );
};

export default Loading;