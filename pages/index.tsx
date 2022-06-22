import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/index.js";
import Layout from '../components/Layout';
import * as prismicT from "@prismicio/types";
import ColourPalette from '../components/ColourPalette';


interface Props {
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

const Home: NextPage<Props> = ({slices, seo, colourPalette,header, footer}) => {

  
  return (
    <>
    <Layout seo={seo} header={header} footer={footer}>
      <SliceZone 
        slices={slices} 
        components={components}
       />
    </Layout>
    <ColourPalette palette={colourPalette} />
    </>
  )
}

export async function getStaticProps({ previewData }: {previewData: any}) {
  const client = createClient({ previewData });

  const header =  await client.getSingle("header");
  const footer =  await client.getSingle("footer");
  const page = await client.getByUID('page', 'home')
  const colourPalette =  await client.getSingle("colour-palette");


  // // to keep same formatting as the variable [uid] page structure
  // let variablePageData = {};
  // variablePageData.events = await client?.getAllByType('event-time')



  return {
    props: {
      slices: page.data?.slices,
      colourPalette: colourPalette?.data,
      header: header?.data,
      footer: footer?.data,
      seo: {
        title: page.data?.title ? page.data?.title : 'BACKUP title',
        description: page.data?.description ? page.data?.description : 'BACKUP description',
        ogImage: page.data?.ogImage,
      },
    },
  };
}

export default Home
