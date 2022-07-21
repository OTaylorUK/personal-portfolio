import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { motion } from "framer-motion";
import { animateUp, wrapperAnimationSettings } from '../../../common/framerSettings';
import { HeroSlice } from '../../../common/types';
import Button from '../../../components/Button';

const Default = ({ slice }: SliceComponentProps<HeroSlice>) => {
  const { primary, items, slice_type } = { ...slice }
  const { content, uid, buttonTarget, buttonAction, buttonContent } = primary;

  return (
    <motion.section
      {...wrapperAnimationSettings}
      id={uid ? uid : slice_type}
      data-type={slice_type}
      className={`w-full pt-20 lg:pt-0 min-h-[100vh] flex justify-center items-center text-left bg-gradient-to-br bg-gradient  from-custom-primary via-custom-secondary to-custom-tertiary animate-bg`}
    >
      <div className={`content-container`}>
        <div className="flex flex-col gap-8 items-start">
          <PrismicRichText
            field={content}
            components={{
              heading1: ({ children }) => <motion.h1 variants={animateUp} className='text-custom-white'>{children}</motion.h1>,
              paragraph: ({ children }) => <motion.p variants={animateUp} className='large-text text-custom-faded-light w-full lg:w-7/12'>{children}</motion.p>,
            }}
          />
          <motion.div variants={animateUp}>
            <Button actionTarget={buttonTarget} style={'ghost'} type={buttonAction} content={buttonContent} />
          </motion.div>
        </div>
      </div>

      <div className='hidden lg:flex absolute bottom-20 right-20  flex-col gap-5 items-center'>
        <ul className={`flex flex-col-reverse gap-2 items-center`}>
          <motion.li variants={animateUp} className="h-20 w-[1px] bg-custom-faded-light" ></motion.li>
          {items.map((channel: any, i) => {
            return (
              <motion.li variants={animateUp} key={`channel-${i}`}  >
                <Button style={'icon'} link={channel.socialLink} type='link' content={channel.socialContent} />
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.section>
  )
}

export default Default