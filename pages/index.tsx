import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices/index.js";
import ThemeToggle from '../components/themeToggle';
import Layout from '../components/Layout';


interface Props {
  slices: any[],
  header: {
    logoText: string,
    navItem: any[]
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

const Home: NextPage<Props> = ({slices, seo, colourPalette,header}) => {

  console.log({slices, seo,colourPalette,header});
  
  return (
    <Layout seo={seo} palette={colourPalette} header={header}>
      

      {/* <ThemeToggle/> */}
      {/* <Title>Ceci est un simple blog réalisé avec Prismic, Next.js et TypeScript</Title>
      <CategoryList categories={categories.results} />
      <CardForm /> */}
      <SliceZone 
        slices={slices} 
        components={components}
       />
    </Layout>
  )
}



export async function getStaticProps({ previewData }: {previewData: any}) {
  const client = createClient({ previewData });

  const header =  await client.getSingle("header");
  // const footer =  await client.getSingle("footer");
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
      seo: {
        title: page.data?.title ? page.data?.title : 'BACKUP title',
        description: page.data?.description ? page.data?.description : 'BACKUP description',
        ogImage: page.data?.ogImage,
      },

      // navigation,
      // footer,
      // seo: homePage?.data?.seo[0],
      // colourPalette,
      // variablePageData: variablePageData,

    },
  };
}

export default Home
