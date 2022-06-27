import * as prismicT from "@prismicio/types";

export interface PageProps {
  slices: any[],
  header: {
    logoAction: string,
    logoContent:  prismicT.RichTextField,
    logoTarget: string,
    navItem: any[]
  },
  footer: {
    copyright: string,
    text:  prismicT.RichTextField,
    title:  prismicT.RichTextField,
    altLinks:  prismicT.RichTextField,
    alternativeContact:  any[],
  }
  colourPalette: {
    colour: any
  },
  seo: {
    title: string,
    description: string,
    ogImage: {
      url?: string
    },
  };
}