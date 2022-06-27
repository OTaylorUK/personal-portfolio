import type { NextPage } from 'next'
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices/index.js";
import Layout from '../components/Layout/Layout';
import ColourPalette from '../components/Helpers/ColourPalette';
import { PageProps } from '../types/PageType';

const Home: NextPage<PageProps> = ({slices, seo, colourPalette,header, footer}) => {
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

  return {
    props: {
      slices: page.data?.slices,
      colourPalette: colourPalette?.data,
      header: header?.data,
      footer: footer?.data,
      seo: {
        title: page.data?.title ? page.data?.title : 'Ollie Taylor: Web Developer',
        description: page.data?.description ? page.data?.description : 'Ollie Taylor is a Frontend developer and designer passionate about building modern web applications using React.',
        ogImage: page.data?.ogImage,
      },
    },
  };
}

export default Home
