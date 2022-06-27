import * as prismicT from "@prismicio/types";

export interface HeaderProps {
  logoAction: string,
  logoContent:  prismicT.RichTextField,
  logoTarget: string,
  navItem: any[]
}
export interface NavMenuProps {
  navItem: any
  scrolled: string
  isMobile: boolean
  menuIsOpen: boolean
}

export interface NavbarProps {
  navItem: any
  scrolled: string
  menuIsOpen: boolean
  isMobile: boolean
  setMenuIsOpen: any
  logo: {
    target: string
    action: string
    content: any
  }
}
export interface ToggleProps {
  menuOpen: boolean
  toggle: any
}
