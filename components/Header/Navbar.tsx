

import { motion } from "framer-motion";
import { defaultAnimations, navMenuItem } from "../../common/framerSettings";
import { NavbarProps } from "../../common/types";
import Button from "../Button";
import NavMenu from "./Menu";
import MenuToggle from "./Toggle";


const Navbar = ({ scrolled, navItem, logo, isMobile, menuIsOpen, setMenuIsOpen }: NavbarProps): JSX.Element => {

  const handleClick = (action: boolean) => {
    setMenuIsOpen(action)
  }

  return (
    <>
      <motion.nav

        className=" z-0 bg-inherit px-6 lg:px-10 py-5 overflow-hidden  container max-w-screen-xl m-auto   flex flex-row items-center   h-full top-[0] transition-[top] duration-300 justify-between"
        initial="offscreen"
        whileInView="onscreen"
        animate={isMobile ? "offscreen" : "onscreen"}
        variants={defaultAnimations}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="block">
          <motion.div variants={navMenuItem} >
            <Button actionTarget={logo?.target} classList={`text-inherit w-36  `} style={'default'} type={logo?.action !== null ? logo?.action : 'link'} content={logo?.content} />
          </motion.div>
        </div>

        <NavMenu scrolled={scrolled} navItem={navItem} isMobile={isMobile} menuIsOpen={menuIsOpen} handleClick={() => handleClick(false)} />
        <MenuToggle menuOpen={menuIsOpen} toggle={() => setMenuIsOpen((prevState: any) => !prevState)} />


      </motion.nav>
    </>
  );
};

export default Navbar;